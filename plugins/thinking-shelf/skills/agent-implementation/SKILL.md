---
name: agent-implementation
description: AI エージェントの実装について相談を受ける。「エージェントを実装したい」「メモリOS の実装は」「フレームワーク選定」「実装が壊れる」「品質保証」のような相談で起動。「思考の本棚」の AIエージェント実装概論シリーズを土台に、5層構造・文脈OS・タスクOS・メモリOS・安定性OS・品質保証OS の観点で実務レベルで助言する。
---

# AI エージェント実装スキル

[思考の本棚 AIエージェント実装概論](https://pubs.u-biosis.com/ai/agent-implementation/) を operationalize したスキル。実装相談を受けたら、シリーズの原則を該当ケースに適用する。

## 起動時の準備

publications 全体が marketplace cache としてローカルにある。Read で取得する:

```
ベースパス: ~/.claude/plugins/marketplaces/kishibashi3-publications-claude/
```

1. シリーズ目次を Read: `docs/ai/agent-implementation/index.md`
2. 相談内容に該当する章を特定し、Read
3. 設計層の問題なら `agent-design` スキルに切り替えるか併用
4. 必要なら Core ch.4（温度）も参照

## 章マッピング

| 相談内容 | パス（ベースからの相対） |
|---|---|
| 「壊れるパターン」「破綻分析」 | docs/ai/agent-implementation/chapter-00.ja.md |
| 「5層構造」「Layer 1〜5」 | docs/ai/agent-implementation/chapter-01.ja.md |
| 「自律 vs 伴走」「LLM 任せの境界」 | docs/ai/agent-implementation/chapter-02.ja.md |
| 「フレームワーク選定」「Dify / LangGraph / AutoGen / AgentEngine」 | docs/ai/agent-implementation/chapter-03.ja.md |
| 「文脈OS 実装」「Role / Values / Rules / Scope」 | docs/ai/agent-implementation/chapter-04.ja.md |
| 「タスクOS」「MCP」「実行の外部化」 | docs/ai/agent-implementation/chapter-05.ja.md |
| 「メモリOS」「永続レポート」 | docs/ai/agent-implementation/chapter-06.ja.md |
| 「安定性OS」「文脈分離・実行外部化・時間固定化」 | docs/ai/agent-implementation/chapter-07.ja.md |
| 「OS 統合」「Role / Memory / Task / Reports の組み合わせ」 | docs/ai/agent-implementation/chapter-08.ja.md |
| 「フレームワーク思想比較」 | docs/ai/agent-implementation/chapter-09.ja.md |
| 「実装ロードマップ」「30/90/180 日」 | docs/ai/agent-implementation/chapter-10.ja.md |
| 「品質保証OS」「多層検証」「eval 設計」 | docs/ai/agent-implementation/chapter-11.ja.md |
| 「補足: 確率的システムの品質保証」 | docs/ai/agent-implementation/chapter-quality-assurance.md |
| 「Instruction Paging Pattern」 | docs/ai/instruction-paging-pattern.md |

例: メモリOS を引くとき:
Read `~/.claude/plugins/marketplaces/kishibashi3-publications-claude/docs/ai/agent-implementation/chapter-06.ja.md`

## 相談の進め方

1. **何を実装しようとしているか / 何が壊れているか聞く**
2. **5 層構造のどこに問題があるか特定** — Layer 1〜5 のどれが歪んでいるか
3. **該当章を WebFetch** で実装原則を確認
4. **具体的な実装案を提示** — フレームワーク非依存な構造で記述
5. **失敗モードと対策** — 暴走、ループ、文脈漏れ、コスト爆発、データ汚染、context 溢れ

## 実装の鉄則

- **5 層構造で考える** — 全てのエージェントは Layer 1〜5 でしか動かない
- **文脈OS** — Role / Values / Rules / Scope の 4 原子
- **タスクOS** — MCP で実行を思考から追放
- **メモリOS** — 永続レポートで推論コストを「未来から過去へ」
- **安定性OS** — 文脈分離 / 実行外部化 / 時間固定化 の 3 層
- **品質保証OS** — eval 単体ではなく多層検証
- **フレームワーク非依存** — Dify でも LangGraph でも AgentEngine でも通用する原則を選ぶ

## Instruction Paging Pattern

実装パターンとして `Instruction Paging Pattern` がある。コンテキスト汚染対策として、データを events に常駐させずページイン/ページアウトする。詳細: https://pubs.u-biosis.com/ai/instruction-paging-pattern.html

## 出力形式

実装提案は以下の構造で:

1. **認識した実装課題** — どの層、どの OS の問題か
2. **該当する実装原則** — 章番号 + 出典 + 原則
3. **具体的な実装案** — コード or 構造図 + フレームワーク選定理由（必要なら）
4. **失敗モードとデバッグ手段** — この実装で何が壊れるか、どう検知するか
5. **次の検証手順** — 動作確認の優先順位

## 注意

- 実装概論は **実務層**。思想層の問題は `ai-design` スキルに切り替える
- 「コードベース固有の問題（特定 SDK のバグ等）」は本スキルの範囲外。一般 SDK ガイドへ
- フレームワーク選定で迷うときは chapter-03（4 つの型）+ chapter-09（思想比較）を必ず参照
- **「壊れない構造」を作るためのスキル**。動けばいい、ではなく長期運用に耐える形を目指す
