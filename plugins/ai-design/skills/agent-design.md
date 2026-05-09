---
name: agent-design
description: AI エージェントの設計について相談を受ける。「エージェントを設計したい」「どう設計すべき？」「フロー設計の妥当性チェック」「タスク外部化すべきか」「文脈OS とは」のような相談で起動。「思考の本棚」の AIエージェント設計概論シリーズを土台に、文脈・実行・時間の三軸、5層構造、タスク外部化、レポート化アーキテクチャなどの観点で構造的に答える。
---

# AI エージェント設計スキル

[思考の本棚 AIエージェント設計概論](https://pubs.u-biosis.com/ai/agent-design/) を operationalize したスキル。設計相談を受けたら、シリーズの原則を該当ケースに適用する。

## 起動時の準備

1. シリーズ目次を WebFetch で取得: https://pubs.u-biosis.com/ai/agent-design/
2. 相談内容に該当する章を特定し、その章の URL を WebFetch
3. 必要なら Core ch.4（温度）, ch.6（システム価値）, supplementary/chaos-edge-optimization.html も参照

## 章マッピングと URL

| 相談内容 | URL |
|---|---|
| 「エージェントとは」「設計の出発点」 | https://pubs.u-biosis.com/ai/agent-design/introduction.ja.html, https://pubs.u-biosis.com/ai/agent-design/chapter-00.ja.html |
| 「設計の基本構造」「文脈と実行」 | https://pubs.u-biosis.com/ai/agent-design/chapter-01.ja.html |
| 「ペルソナ」「役割」「文脈の分離」 | https://pubs.u-biosis.com/ai/agent-design/chapter-02.ja.html |
| 「タスク外部化」「テンプレート設計」 | https://pubs.u-biosis.com/ai/agent-design/chapter-03.ja.html |
| 「文脈OS」「Role / Values / Rules / Scope」 | https://pubs.u-biosis.com/ai/agent-design/chapter-04.ja.html |
| 「自律 vs 伴走」「創発タスクの境界」 | https://pubs.u-biosis.com/ai/agent-design/chapter-05.ja.html |
| 「データ分析」「レポート化」 | https://pubs.u-biosis.com/ai/agent-design/chapter-06.ja.html |
| 「暴走防止」「ループ」「コスト爆発」 | https://pubs.u-biosis.com/ai/agent-design/chapter-07.ja.html |
| 「エージェントOS」「思考のメモリ」 | https://pubs.u-biosis.com/ai/agent-design/chapter-08.ja.html |
| 「品質保証」「eval」 | https://pubs.u-biosis.com/ai/agent-design/chapter-09.ja.html |
| 「Instruction Paging Pattern」 | https://pubs.u-biosis.com/ai/instruction-paging-pattern.html |

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
