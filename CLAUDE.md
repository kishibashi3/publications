# CLAUDE.md

## Project Overview

研究論文の公開サイト。VitePress で構築し GitHub Pages にデプロイする。

## Tech Stack

- VitePress (Static Site Generator)
- MathJax3 (数式)
- Mermaid (図表)
- textlint + markdown-link-check (CI)

## Directory Structure

```
docs/
├── publications/          # 論文コンテンツ
│   ├── core/              # 創発文明論（章分割）
│   └── ai/                # AI関連シリーズ
├── notes/                 # 公開メモ
├── en/                    # 英語版（プレースホルダー）
├── contributing.md        # 貢献ガイド
└── .vitepress/config.js   # VitePress設定（locales, sidebar）
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
- 日本語は `locales.root.themeConfig.sidebar`、英語は `locales.en.themeConfig.sidebar`

### Lint

- コミット前に `npm run lint` を実行して通ること
- textlint ルール: `no-empty-section`, `no-todo`
- link-check: 内部リンクのみチェック（外部URLは無視）

### Git

- main ブランチへの直接 push は禁止（PR経由のみ）
- PR には最低1レビュー必須
- force push 禁止

### License

- コード（VitePress設定、ワークフロー等）: MIT
- コンテンツ（`docs/publications/`, `docs/notes/`）: CC BY-SA 4.0

### CI/CD

- `deploy-pages.yml`: main マージ時に GitHub Pages デプロイ
- `build-check.yml`: PR 時にビルド確認
- `textlint.yml`: PR 時に `npm run lint:text`
- `link-check.yml`: PR 時に `npm run lint:link`
