# ai-implementation

AI エージェントの **実装** 相談を受けるスキル。

[思考の本棚 AI エージェント実装概論](https://pubs.u-biosis.com/ai/agent-implementation/) を operationalize したもの。5層構造、文脈OS / タスクOS / メモリOS / 安定性OS / 品質保証OS の観点で実務レベルで助言する。

## このプラグインに入っているもの

| 構成要素 | 役割 |
|---|---|
| **Skill** (`skills/agent-implementation.md`) | 実装相談で起動。シリーズの章 URL マップを持ち、相談内容に応じて WebFetch で深掘りする |

## 起動条件

- 「エージェントを実装したい」
- 「メモリOS の実装は」
- 「フレームワーク選定」（Dify / LangGraph / AutoGen / AgentEngine）
- 「実装が壊れる」「暴走防止」「ループ」
- 「品質保証」「eval 設計」
- 「実装ロードマップ」

## セットアップ手順

### Step 1: marketplace 登録

```
/plugin marketplace add https://github.com/kishibashi3/publications
```

### Step 2: プラグインインストール

```
/plugin install ai-implementation
```

### Step 3: プラグイン有効化

```
/reload-plugins
```

## 使い方

例:

```
エージェントの context が膨らんでコストが爆発するんだけど

→ skill が起動し、chapter-06（メモリOS）と chapter-07（安定性OS）を WebFetch、
  Instruction Paging Pattern による永続レポート化と context の page out 設計を提示
```

## 関連スキル

- [`ai-design`](../ai-design/) — 設計層の相談（文脈OS、タスク外部化、創発タスクの境界等）
- [`core-idea`](../core-idea/) — 実装の根本にある一般システム論の枠組み

## 関連リソース

- [AIエージェント実装概論 目次](https://pubs.u-biosis.com/ai/agent-implementation/)
- [Instruction Paging Pattern](https://pubs.u-biosis.com/ai/instruction-paging-pattern.html)

## ライセンス

CC BY-SA 4.0
