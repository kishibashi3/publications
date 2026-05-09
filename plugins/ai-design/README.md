# ai-design

AI エージェントの **設計** 相談を受けるスキル。

[思考の本棚 AI エージェント設計概論](https://pubs.u-biosis.com/ai/agent-design/) を operationalize したもの。文脈・実行・時間の三軸、5層構造、タスク外部化、レポート化アーキテクチャの観点で構造的に答える。

## このプラグインに入っているもの

| 構成要素 | 役割 |
|---|---|
| **Skill** (`skills/agent-design.md`) | 設計相談で起動。シリーズの章 URL マップを持ち、相談内容に応じて WebFetch で深掘りする |

## 起動条件

- 「エージェントを設計したい」
- 「どう設計すべき？」
- 「フロー設計の妥当性チェック」
- 「タスク外部化すべきか」
- 「文脈OS とは」「ペルソナ設計」
- 「自律 vs 伴走」「創発タスク」

## セットアップ手順

### Step 1: marketplace 登録

```
/plugin marketplace add https://github.com/kishibashi3/publications
```

### Step 2: プラグインインストール

```
/plugin install ai-design
```

### Step 3: プラグイン有効化

```
/reload-plugins
```

## 使い方

例:

```
LLM にデータ集計させると数値がブレるんだけど、どう設計すべき？

→ skill が起動し、chapter-03（タスク外部化）と chapter-06（レポート化アーキテクチャ）を
  WebFetch、「LLM にはテキストを渡す。データは渡さない」原則に基づいた設計案を提示
```

## 関連スキル

- [`ai-implementation`](../ai-implementation/) — 実装層の相談（5層構造、メモリOS、品質保証 OS 等）
- [`core-idea`](../core-idea/) — 設計の根本にある一般システム論の枠組み

## 関連リソース

- [AIエージェント設計概論 目次](https://pubs.u-biosis.com/ai/agent-design/)
- [Instruction Paging Pattern](https://pubs.u-biosis.com/ai/instruction-paging-pattern.html)

## ライセンス

CC BY-SA 4.0
