# CLAUDE.md

## Project Overview

「思考の本棚」— 思考の公開アーカイブ。VitePress で構築し GitHub Pages (`pubs.u-biosis.com`) にデプロイする。

## Site Philosophy

- **このサイトは「研究発表の場」ではなく「思考を並べておく本棚」**。トーンはやわらかく、堅くしすぎない
- 全コンテンツは **一般システム論** を基盤としている。創発文明論（`core/`）が土台であり、他のカテゴリはその展開
- Core の中核命題: **システムの価値 = そのシステムの生存期間において創発したサブシステムの価値の総和**（再帰的定義）
- ただし **創発文明論をトップで前面に押し出さない**。トップは淡白に。開けばわかる構造にする
- 「研究」「論文」という言葉を前面に出さない。上から目線に聞こえる。あくまで「思考」「考えたこと」として出す
- **主張は確信的に断言する**。「〜と考えている」「〜かもしれない」等のヘッジ表現は使わない。サイト全体が著者の思考であり、いちいち「考えている」は蛇足。ただし検証不能な推測は推測として書く
- **反論・留保は入れない**。本棚であり論文ではない。読者が同意するかは読者の問題
- **個人的体験（パワハラ、引きこもり等）は書かない**。怒りを表現する意図はない。攻撃的表現は「構造の観察」に変換する
- **サイドバーやナビゲーションで圧をかけない**。章タイトルは番号だけ、セクション名は短く。主張はページの中でやる
- 英語版（`en/`）は将来対応予定だが、空の状態では読者に見せない。翻訳が揃った時点で locale を有効化する

## Content Criteria

コンテンツとして載せるものの基準:
- **Core からの演繹であること** — 一般システム論の公理系から導かれる帰結であること。実務知見の体系化（AI設計概論・実装概論）は例外的に許容するが、本棚の本論ではなく補足
- **当たり前すぎないこと** — 公理から導いた結果が常識の確認に留まるものは載せない
- **過学習しないこと** — 個人の体験からの一般化は過学習になりやすい。理論的根拠で語る

## Tech Stack

- VitePress (Static Site Generator)
- MathJax3 (数式)
- Mermaid (図表)
- textlint + markdown-link-check (CI)

## Directory Structure

```
docs/
├── core/                  # 創発文明論（章分割）
│   └── supplementary/     # 補足資料（理論・方法論・メタ哲学）
├── social-physics/        # 社会物理学（社会温度論、波動的自己等）
├── governance/            # 統治論（民主主義v2、分析・批評）
├── economy/               # 経済論（経済v2、観光選別国）
├── applications/          # 応用（アジャイル、教育）
├── ai/                    # AI関連シリーズ（設計概論・実装概論・リテラシー）
├── notes/                 # 公開メモ
├── en/                    # 英語版（未公開。翻訳が揃ったら locale 有効化）
├── contributing.md        # 貢献ガイド
└── .vitepress/config.js   # VitePress設定
```

## Commands

```bash
npm run docs:dev       # 開発サーバー
npm run docs:build     # ビルド
npm run docs:preview   # ビルド結果プレビュー
npm run lint           # textlint + link-check を全実行
npm run lint:text      # textlint のみ
npm run lint:text:fix  # textlint 自動修正
npm run lint:link      # リンク切れチェック
```

## Rules

### Content

- 公開対象は `docs/` 配下のみ。GitHub Pages にデプロイされるのは `docs/` 配下だけ
- `drafts/` はリポジトリ内の保留領域として許容（公開されない）。下書き・素材・公開保留中の原稿はここに置く
- ファイル名はケバブケース（`emergent-civilization-theory.md`）
- 日本語がデフォルト。英語版は `docs/en/` 配下に配置

### Markdown で使えるプラグイン

- **MathJax3** — `$$V = f(S, R, T)$$` で数式。インラインは `$x^2$`
- **Mermaid** — コードブロック ` ```mermaid ` で図表（flowchart, graph, sequence 等）
- **PlantUML** — `@startuml` / `@enduml` でクラス図、シーケンス図等（公式サーバーでレンダリング）

### Sidebar

- 章を追加・削除したら `docs/.vitepress/config.js` の sidebar も更新すること
- 現在は単一言語（ja）構成。`themeConfig.sidebar` を直接編集する
- 英語版を有効化する際は locales 構成に戻す（`en/` のファイルは残してある）

### Lint

- コミット前に `npm run lint` を実行して通ること
- textlint ルール: `no-empty-section`, `no-todo`
- link-check: 内部リンクのみチェック（外部URLは無視）

### Git / Branch Rules

- main ブランチへの直接 push は禁止（PR経由のみ）
- PR のレビュー承認は不要（required_approving_review_count: 0）
- force push 禁止（non_fast_forward ルール）
- ブランチ名: `feature/`, `fix/`, `refactor/` などのプレフィックスを使う

### License

- コード（VitePress設定、ワークフロー等）: MIT
- コンテンツ（`docs/` 配下の全 Markdown）: CC BY-SA 4.0

### CI/CD

- `deploy-pages.yml`: main マージ時に GitHub Pages デプロイ
- `build-check.yml`: PR 時にビルド確認
- `textlint.yml`: PR 時に `npm run lint:text`
- `link-check.yml`: PR 時に `npm run lint:link`
