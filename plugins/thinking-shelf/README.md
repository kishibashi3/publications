# thinking-shelf

[思考の本棚](https://pubs.u-biosis.com)（pubs.u-biosis.com）の思想を operationalize したスキル群。

## このプラグインに入っているスキル

| Skill | 起動条件 | 役割 |
|---|---|---|
| **core-idea** | 「創発文明論で見ると」「システム価値で評価」「適温で」「カオスの淵」 | 問題を Core の公理系で再記述し、演繹的に処方を提示する |
| **agent-design** | 「エージェントを設計したい」「タスク外部化」「文脈OS」「ペルソナ設計」 | AIエージェント設計概論を土台に、文脈・実行・時間の三軸で答える |
| **agent-implementation** | 「実装したい」「メモリOS」「フレームワーク選定」「品質保証」 | AIエージェント実装概論を土台に、5層構造と各 OS の観点で答える |

各 skill は trigger ベースで活性化する。発話に応じて関連する skill だけが動くので、context cost を抑えて運用できる。

## セットアップ手順

### Step 1: marketplace 登録

```
/plugin marketplace add https://github.com/kishibashi3/publications
```

trust prompt が出たら承諾。

### Step 2: プラグインインストール

```
/plugin install thinking-shelf
```

trust prompt が出たら承諾。

### Step 3: プラグイン有効化

```
/reload-plugins
```

`/plugin install` 直後は skill が現セッションに登録されないことがある。`/reload-plugins` で取り込み直す。

## 使い方

セットアップ後、自然言語で起動条件にマッチする発話をすると関連する skill が活性化する。

```
社会の少子化を創発文明論で見るとどう整理できる？
→ core-idea が起動

LLM にデータ集計させると数値がブレるんだけど、どう設計すべき？
→ agent-design が起動

エージェントの context が膨らんでコストが爆発するんだけど
→ agent-implementation が起動
```

## skill の動作

各 skill は plugin install 時には subdirectory のみ bundle される（git-subdir 形式）ため、コンテンツ参照は WebFetch で公開 URL（pubs.u-biosis.com）から行う。

つまり:
- skill は活性化時に必要な記事 URL を WebFetch
- ローカルに記事 content を bundle する必要なし
- 記事が更新されると、次の skill 実行で自動的に最新版を参照

## 関連リソース

- 元になった記事:
  - [Core (創発文明論)](https://pubs.u-biosis.com/core/)
  - [AIエージェント設計概論](https://pubs.u-biosis.com/ai/agent-design/)
  - [AIエージェント実装概論](https://pubs.u-biosis.com/ai/agent-implementation/)

## ライセンス

CC BY-SA 4.0（スキルのコンテンツは記事と同じライセンス）
