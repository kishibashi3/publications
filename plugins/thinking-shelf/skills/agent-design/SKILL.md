---
name: agent-design
description: AI エージェントの設計について相談を受ける。「エージェントを設計したい」「どう設計すべき？」「フロー設計の妥当性チェック」「タスク外部化すべきか」「文脈OS とは」のような相談で起動。「思考の本棚」の AIエージェント設計概論シリーズを土台に、文脈・実行・時間の三軸、5層構造、タスク外部化、レポート化アーキテクチャなどの観点で構造的に答える。
---

# AI エージェント設計スキル

[思考の本棚 AIエージェント設計概論](https://pubs.u-biosis.com/ai/agent-design/) を operationalize したスキル。設計相談を受けたら、シリーズの原則を該当ケースに適用する。

## 起動時の準備

publications 全体が marketplace cache としてローカルにある。Read で取得する:

```
ベースパス: ~/.claude/plugins/marketplaces/kishibashi3-publications-claude/
```

1. シリーズ目次を Read: `docs/ai/agent-design/index.md`
2. 相談内容に該当する章を特定し、Read
3. 必要なら Core ch.4（温度）, ch.6（システム価値）, supplementary/chaos-edge-optimization.md も参照

## 章マッピング

| 相談内容 | パス（ベースからの相対） |
|---|---|
| 「エージェントとは」「設計の出発点」 | docs/ai/agent-design/introduction.ja.md, docs/ai/agent-design/chapter-00.ja.md |
| 「設計の基本構造」「文脈と実行」 | docs/ai/agent-design/chapter-01.ja.md |
| 「ペルソナ」「役割」「文脈の分離」 | docs/ai/agent-design/chapter-02.ja.md |
| 「タスク外部化」「テンプレート設計」 | docs/ai/agent-design/chapter-03.ja.md |
| 「文脈OS」「Role / Values / Rules / Scope」 | docs/ai/agent-design/chapter-04.ja.md |
| 「自律 vs 伴走」「創発タスクの境界」 | docs/ai/agent-design/chapter-05.ja.md |
| 「データ分析」「レポート化」 | docs/ai/agent-design/chapter-06.ja.md |
| 「暴走防止」「ループ」「コスト爆発」 | docs/ai/agent-design/chapter-07.ja.md |
| 「エージェントOS」「思考のメモリ」 | docs/ai/agent-design/chapter-08.ja.md |
| 「品質保証」「eval」 | docs/ai/agent-design/chapter-09.ja.md |
| 「Instruction Paging Pattern」 | docs/ai/instruction-paging-pattern.md |

例: 文脈OS を引くとき:
Read `~/.claude/plugins/marketplaces/kishibashi3-publications-claude/docs/ai/agent-design/chapter-04.ja.md`

## 相談の進め方

1. **ユーザーの状況を聞く** — 何を作ろうとしているか、何が壊れているか
2. **三軸で分解** — 文脈・実行・時間 のどこに問題があるか特定
3. **該当章を WebFetch** で原則を確認
4. **具体的な状況に framework を適用**
5. **失敗モードを予防的に指摘** — 暴走、ループ、文脈漏れ、コスト爆発など

## 設計の鉄則

- **「API 脳」ではなく「認知システム」** — エージェントは API の組み合わせではない
- **LLM にやらせすぎない** — 数値集計、複雑なロジック、決定的処理はタスクとして外部化
- **文脈を分離する** — ペルソナを混ぜない、Role / Values / Rules / Scope を明確化
- **創発タスクと非創発タスクを区別** — Devin でさえ創発タスクで破綻する
- **レポート化アーキテクチャ** — データ分析は事前計算で、LLM は「読むだけ」
- **時間の固定化** — 推論時に context が膨張しない構造
- **「自律」は最後** — まず「伴走」から始める

## 出力形式

設計提案は以下の構造で:

1. **認識した課題** — ユーザーの状況を framework で再記述
2. **該当する設計原則** — 章番号 + 出典 + 原則の要約
3. **具体的な設計案** — 文脈・実行・時間の三軸で記述
4. **起こりうる失敗モード** — この設計で何が壊れる可能性があるか
5. **次のステップ** — 実装に進む際の優先順位

## 注意

- 設計概論は **思想層**。実装は別スキル `ai-implementation` を使う
- 設計と実装の境目で迷ったら、両方のスキルを横断する
- 「フロー設計」「タスク分解」のような従来語彙で説明すると、シリーズの趣旨と外れる。**「文脈・実行・時間」「OS としてのエージェント」** で語る
