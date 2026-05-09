---
title: "Instruction Paging Pattern ― LLMエージェントのコンテキスト汚染を構造で解決する"
date: 2026-05-02
type: publication
tags: [ai-agent, design-pattern, context-engineering, adk, implementation]
status: published
ai-reviewed: false
---

# Instruction Paging Pattern

## ― LLM エージェントのコンテキスト汚染を構造で解決する

**Edited by**: kishibashi3

---

## 課題：コンテキスト汚染

LLM エージェントがツールでデータを取得すると、返り値は会話履歴（events）に記録される。以降の全ターンでこのデータがコンテキストウィンドウを消費し続ける。

```
Turn 1: get_report(A) → events に A の本文が記録される
Turn 2: get_report(B) → events に A + B が残る
Turn 3: get_report(C) → events に A + B + C が残る
...
Turn N: events に A + B + ... + N が蓄積 → コンテキスト溢れ or 品質劣化
```

コンテキストウィンドウが 1M token あっても、164件のレポートを全部載せれば attention が希薄化して数値の読み落としが起きる。

**「入る」と「使える」は違う。**

これはモデルの能力不足ではない。データを会話履歴に蓄積し続けるアーキテクチャの問題だ。

---

## 着想：LLM にメモリ管理させる

OS がプロセスにメモリを管理させるように、LLM に自分のコンテキストを管理させる。

| OS のメモリ管理 | Instruction Paging |
|---------|----------------------------------|
| ディスク | state（永続、大容量） |
| RAM | instruction（揮発、限定容量） |
| ページイン | get_reports でレポートを instruction に展開 |
| ページアウト | temp: state の自動消去 |
| CPU | LLM（何を読むか、何を保存するかを自分で判断） |

---

## 仕組み

### State as Disk

レポート本文を session state に格納する。state は永続的で、コンテキストウィンドウを消費しない。LLM から直接見えないが、ツール経由でアクセスできる。

### Instruction as RAM

エージェントの instruction を async callable にする。毎ステップ再評価される性質を利用し、state から「今読みたいレポート」だけを instruction に動的展開する。instruction は system_instruction として LLM に渡されるが、events（会話履歴）には記録されない。

### LLM as CPU

LLM 自身がどのレポートを読むか、何件ずつ読むか、中間結果をどう保存するかを判断する。固定バッチサイズやフレームワークの制御ではなく、LLM の戦略に任せる。

---

## なぜ events を汚染しないか

| 情報 | 格納場所 | events に入るか |
|---|---|---|
| レポート本文 | state → instruction | 入らない |
| ツール返り値（get_reports） | 「N件読み込み完了」のメッセージのみ | 入る（軽量） |
| 中間結果（save_result） | state | 入らない |
| 最終回答 | LLM の応答 | 入る |

レポート本文は instruction（system_instruction）に展開されるため、events には一切記録されない。次のターンで instruction が再評価されると、前のバッチの本文は消え、新しいバッチだけが展開される。

---

## データフロー

```
[planning_agent]
  search → URI 一覧を特定
  transfer_to_agent → analyze_agent

[analyze_agent]
  get_reports([url1, url2, url3])
    → state["temp:report:url1"] = 本文  (キャッシュ)
    → state["temp:report:url2"] = 本文
    → state["temp:report:url3"] = 本文
    → state["temp:want_read"] = [url1, url2, url3]

  _analyze_instruction() が再評価される
    → temp:want_read の URL だけ instruction に展開
    → LLM は instruction 内のレポートを読んで分析

  calculate_with_state(uri=url1, ...)
    → state に保存済みの本文から数値計算

  save_result("batch1_result", "...")
    → 中間結果を state に保存

  get_reports([url4, url5, url6])
    → 前のバッチ（temp:）は次ターンで自動消去
    → 新しいバッチだけが instruction に展開される

  ... 全バッチ完了 ...

  中間結果をまとめて最終回答
  escalate → ユーザーに返す
```

---

## 実装（Google ADK）

### 動的 instruction

```python
async def _analyze_instruction(ctx: ReadonlyContext) -> str:
    base = "あなたはレポート分析エージェントです。..."

    active_urls = ctx.state.get("temp:want_read", [])
    if active_urls:
        base += "\n\n--- レポート本文 ---\n"
        for url in active_urls:
            content = ctx.state.get(f"temp:report:{url}")
            if content:
                base += f"\n### {url}\n{content}\n"
        base += "\n--- ここまで ---\n"

    return base
```

ADK の instruction は async callable として定義できる。毎ステップ再評価されるため、state の変化に応じて system_instruction の内容が動的に変わる。

### get_reports ツール

```python
MAX_REPORTS_PER_READ = 10

async def get_reports(urls: list[str], tool_context: ToolContext) -> str:
    for url in urls:
        cache_key = f"temp:report:{url}"
        if cache_key not in tool_context.state:
            content = await download_report(url)
            tool_context.state[cache_key] = content
    tool_context.state["temp:want_read"] = urls
    return f"{len(urls)} 件読み込み完了。分析してください。"
```

ポイントは返り値。レポート本文を返さず、「N件読み込み完了」という軽量なメッセージだけを返す。本文は state に格納され、instruction 経由で LLM に渡る。これにより events が汚染されない。

### temp: state によるページアウトの自動化

ADK の state で `temp:` プレフィックスをつけたキーは、現在のインボケーション（ユーザーの入力から最終回答までの1サイクル）の間のみ保持され、サイクル終了時に自動消去される。

- `temp:report:<url>` — 同一ターン内のキャッシュ。同じレポートを2回取得しない
- `temp:want_read` — 現在のバッチの URL リスト。instruction が何を展開するかの制御

次のターンでは前のバッチのデータが自動的に消え、コンテキストがクリーンにリセットされる。ページアウトを手動で制御する必要がない。

### save_result ツール

```python
async def save_result(task_id: str, result: str, tool_context: ToolContext):
    tool_context.state[f"intermediate_result:{task_id}"] = result
    return f"タスク {task_id} の結果を保存しました。"
```

中間結果を state に保存する。`temp:` プレフィックスをつけないため、セッション全体で保持される。全バッチの処理が終わった後、LLM がこれらの中間結果をまとめて最終回答を生成する。

---

## 何が変わるか

### Before（従来のアプローチ）

- ツール返り値が events に蓄積
- ターンごとにコンテキストが肥大化
- attention が希薄化し、数値の読み落としが発生
- コストが $O(n^2)$ で増大

### After（Instruction Paging）

- events にはツールの軽量な完了メッセージだけ
- instruction に「今必要なデータ」だけを展開
- 前のバッチは自動消去され、毎ターンクリーンな状態
- コストがほぼ $O(1)$（ターン数に依存しない）

---

## このパターンの前提

Instruction Paging は「実行時のコンテキスト管理」の解法である。これだけでは分析エージェントは成立しない。

- **レポート化アーキテクチャ**が前提にある。LLM が読むデータは事前計算された構造化レポートであり、生データではない。レポートの品質が回答の品質の上限を決める
- **曖昧入力の構造的な解決**が前提にある。ユーザーの曖昧な入力から正しいレポートに到達する検索構造がなければ、正しいデータをページインできない

これらの設計思想については、[AIエージェント設計概論](./agent-design/index.md)および[AIエージェント実装概論](./agent-implementation/index.md)で詳しく解説している。

---

**Last Updated**: 2026-05-02
