# CLAUDE.md

## Project Overview

「思考の本棚」— 思考の公開アーカイブ。VitePress で構築し GitHub Pages (`pubs.u-biosis.com`) にデプロイする。

## Site Philosophy

- **このサイトは「研究発表の場」ではなく「思考を並べておく本棚」**。トーンはやわらかく、堅くしすぎない
- 全コンテンツは **一般システム論** を基盤としている。創発文明論（`core/`）が土台であり、AI シリーズ等はその展開
- ただし **創発文明論をトップで前面に押し出さない**。トップは淡白に。開けばわかる構造にする
- 「研究」「論文」という言葉を前面に出さない。上から目線に聞こえる。あくまで「思考」「考えたこと」として出す
- **サイドバーやナビゲーションで圧をかけない**。章タイトルは番号だけ、セクション名は短く。主張はページの中でやる
- 英語版（`en/`）は将来対応予定だが、空の状態では読者に見せない。翻訳が揃った時点で locale を有効化する

## Tech Stack

- VitePress (Static Site Generator)
- MathJax3 (数式)
- Mermaid (図表)
- textlint + markdown-link-check (CI)

## Directory Structure

```
docs/
├── core/                  # 創発文明論（章分割）
│   └── supplementary/     # 補足資料（図解・数式化等）
├── ai/                    # AI関連シリーズ（創発文明論の展開）
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

- このリポジトリには公開済みコンテンツのみ置く。下書きや非公開ノートは置かない
- ファイル名はケバブケース（`emergent-civilization-theory.md`）
- 日本語がデフォルト。英語版は `docs/en/` 配下に配置
- 数式は MathJax（`$$...$$`）、図表は Mermaid を使う

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
- コンテンツ（`docs/core/`, `docs/ai/`, `docs/notes/`）: CC BY-SA 4.0

### CI/CD

- `deploy-pages.yml`: main マージ時に GitHub Pages デプロイ
- `build-check.yml`: PR 時にビルド確認
- `textlint.yml`: PR 時に `npm run lint:text`
- `link-check.yml`: PR 時に `npm run lint:link`
