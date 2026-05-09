# 思考の本棚 / Bookshelf of Thoughts

An open archive of thoughts built on General Systems Theory.

一般システム論をベースにした思考の公開アーカイブ。

**Site**: https://pubs.u-biosis.com

## Workflow

```mermaid
flowchart LR
    A[Write in research repo] --> B[Ready to publish?]
    B --> C[Copy to this repo]
    C --> D[Create PR]
    D --> E[CI checks]
    E --> F[Merge]
    F --> G[Auto-deploy to pubs.u-biosis.com]
```

## Contents

| Section | Description | Language |
|---------|-------------|----------|
| [Core Theory](https://pubs.u-biosis.com/core/) | 創発文明論 — Emergent Civilization Theory | ja (en planned) |
| [Social Physics](https://pubs.u-biosis.com/social-physics/) | 社会物理学（社会温度論等） | ja |
| [Governance](https://pubs.u-biosis.com/governance/) | 統治（民主主義 v2 等） | ja |
| [Economy](https://pubs.u-biosis.com/economy/) | 経済（経済 v2 等） | ja |
| [Applications](https://pubs.u-biosis.com/applications/) | 応用（アジャイル、教育等） | ja |
| [AI](https://pubs.u-biosis.com/ai/) | Agent Design / Implementation / Literacy | ja (en planned) |
| [Notes](https://pubs.u-biosis.com/notes/) | Miscellaneous notes | ja |

## Claude Code Plugins

このリポジトリは Claude Code の **marketplace** でもある。記事の思想を operationalize したスキルを 1 つの plugin にまとめて提供する:

| Plugin | 内容 |
|---|---|
| [`thinking-shelf`](plugins/thinking-shelf/) | 創発文明論 (`core-idea`) + AI エージェント設計 (`agent-design`) + AI エージェント実装 (`agent-implementation`) の 3 skills |

セットアップ手順:

```
/plugin marketplace add https://github.com/kishibashi3/publications
/plugin install thinking-shelf
/reload-plugins
```

詳細は [plugin の README](plugins/thinking-shelf/) を参照。

## Writing

Markdown plugins available:

- **MathJax3** — `$$V = f(S, R, T)$$` for block math, `$x^2$` for inline
- **Mermaid** — ` ```mermaid ` code blocks for diagrams (flowchart, graph, sequence, etc.)
- **PlantUML** — `@startuml` / `@enduml` for class diagrams, sequence diagrams, etc.

## Development

```bash
npm ci
npm run docs:dev
```

## Feedback

Issues and suggestions are welcome via [GitHub Issues](https://github.com/kishibashi3/publications/issues).

## License

- **Code** (VitePress config, workflows): [MIT](./LICENSE)
- **Content** (`docs/core/`, `docs/ai/`, `docs/notes/`): [CC BY-SA 4.0](./LICENSE-CONTENT)
