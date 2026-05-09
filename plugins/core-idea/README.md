# core-idea

創発文明論（一般システム論ベース）の枠組みで問題を構造化するスキル。

[思考の本棚](https://pubs.u-biosis.com) の Core 章群（公理・システム価値・温度・カオスの淵・勾配）を operationalize したもの。問題を Core の言語で再記述し、演繹的に処方を提示する。

## このプラグインに入っているもの

| 構成要素 | 役割 |
|---|---|
| **Skill** (`skills/core-idea.md`) | 「創発文明論で見ると」「システム価値で評価」「適温で」「カオスの淵で」のような相談で起動。Core 概念で問題を再記述する |

## 起動条件

ユーザーが以下のように言ったら起動:

- 「創発文明論で見ると」「一般システム論で考えると」
- 「システム価値で評価して」「価値を構造的に見ると」
- 「適温の観点で」「カオスの淵で言うと」
- 「これを構造的に整理して」「思考の本棚の枠組みで」

## セットアップ手順

### Step 1: marketplace 登録

Claude Code 内で:

```
/plugin marketplace add https://github.com/kishibashi3/publications
```

trust prompt が出たら承諾。

### Step 2: プラグインインストール

```
/plugin install core-idea
```

### Step 3: プラグイン有効化

```
/reload-plugins
```

`/plugin install` 直後は skill が現セッションに登録されないことがある。`/reload-plugins` で取り込み直す。

## 使い方

セットアップ後、自然言語で起動条件にマッチする発話をすると skill が活性化する。

例:

```
社会の少子化を創発文明論で見るとどう整理できる？

→ skill が起動し、Core ch.4（温度）と ch.6（システム価値）を WebFetch で参照、
  少子化を「適温帯からの離脱」「次世代創発の枯渇」「価値関数の逓減」として再記述
```

## 関連リソース

スキルが参照する公開記事:

- [Core 全体](https://pubs.u-biosis.com/core/)
- [熱力学的存在論](https://pubs.u-biosis.com/core/04-thermodynamic-ontology.html)
- [システム価値](https://pubs.u-biosis.com/core/06-systemic-value.html)
- [カオスの淵の最適化](https://pubs.u-biosis.com/core/supplementary/chaos-edge-optimization.html)

## ライセンス

CC BY-SA 4.0（スキルのコンテンツは記事と同じライセンス）
