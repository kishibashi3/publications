---
title: Contributing
layout: doc
---

# Contributing

This is an open research publication site. Contributions are welcome.

## What you can contribute

### Accepted as PRs

- **Typo fixes** - 誤字脱字の修正
- **Translation improvements** - 翻訳の改善（日本語 / English）
- **Broken link fixes** - リンク切れの修正
- **Formatting improvements** - Markdown の書式改善

### Open an Issue first

- **New content** - 新しい記事の提案
- **Major edits** - 既存記事の大幅な変更
- **Structural changes** - ディレクトリ構成やナビゲーションの変更

### Not accepted

- Unrelated content - このサイトのトピック（創発文明論、AI等）に関係のないもの
- Advertising or promotional content

## How to submit a PR

1. Fork this repository
2. Create a branch (`fix/typo-in-chapter-01` etc.)
3. Make your changes
4. Submit a PR with a clear description of what you changed and why

## Content guidelines

- File names: kebab-case (`emergent-civilization-theory.md`)
- Japanese articles: `.ja.md` suffix
- Images: place in `images/` directory within the article's folder
- Use MathJax for mathematical expressions
- Use Mermaid for diagrams

## Local development

```bash
npm install
npm run docs:dev    # Start dev server
npm run docs:build  # Build for production
```

## Repository policy

### Branch strategy

- **main** - Production branch. Deploys to GitHub Pages on push.
- All changes go through PR review before merge.

### Content flow

New content is authored separately and published here when complete.
Draft or in-progress work does not belong in this repository.

### Review process

All PRs are reviewed by the maintainer before merge. Please be patient.

## License

- **Code** (VitePress config, workflows): [MIT License](https://github.com/kishibashi3/publications/blob/main/LICENSE)
- **Content** (publications, notes): [CC BY-SA 4.0](https://github.com/kishibashi3/publications/blob/main/LICENSE-CONTENT)

By submitting a PR, you agree that your contribution will be licensed under these terms.
