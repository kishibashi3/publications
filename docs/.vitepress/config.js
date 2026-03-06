import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'
import plantuml from 'markdown-it-plantuml'
import cjkFriendly from 'markdown-it-cjk-friendly'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: '思考の本棚',
  description: '思考の公開アーカイブ',

  lang: 'ja',

  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'About', link: '/about' },
      { text: '貢献', link: '/contributing' }
    ],
    sidebar: {
      '/core/': [
        {
          text: 'Core',
          items: [
            { text: '序章', link: '/core/00-preface' },
            { text: '第1章', link: '/core/01-axiom-of-existence' },
            { text: '第2章', link: '/core/02-circular-structure' },
            { text: '第3章', link: '/core/03-particle-wave' },
            { text: '第4章', link: '/core/04-thermodynamic-ontology' },
            { text: '第5章', link: '/core/05-re-relational-ethics' },
            { text: '第6章', link: '/core/06-systemic-value' },
            { text: '第7章', link: '/core/07-ai-resonance' },
            { text: '附録A', link: '/core/appendix-a-dialogue' },
            { text: '附録B', link: '/core/appendix-b-ai-perspective' }
          ]
        }
      ],
      '/ai/agent-design/': [
        {
          text: 'AIエージェント設計概論',
          link: '/ai/agent-design/',
          items: [
            { text: '入門', link: '/ai/agent-design/introduction.ja' },
            { text: '序章', link: '/ai/agent-design/chapter-00.ja' },
            { text: '第1章', link: '/ai/agent-design/chapter-01.ja' },
            { text: '第2章', link: '/ai/agent-design/chapter-02.ja' },
            { text: '第3章', link: '/ai/agent-design/chapter-03.ja' },
            { text: '第4章', link: '/ai/agent-design/chapter-04.ja' },
            { text: '第5章', link: '/ai/agent-design/chapter-05.ja' },
            { text: '第6章', link: '/ai/agent-design/chapter-06.ja' },
            { text: '第7章', link: '/ai/agent-design/chapter-07.ja' },
            { text: '第8章', link: '/ai/agent-design/chapter-08.ja' }
          ]
        }
      ],
      '/ai/agent-implementation/': [
        {
          text: 'AIエージェント実装概論',
          link: '/ai/agent-implementation/',
          items: [
            { text: '入門', link: '/ai/agent-implementation/introduction.ja' },
            { text: '序章', link: '/ai/agent-implementation/chapter-00.ja' },
            { text: '第1章', link: '/ai/agent-implementation/chapter-01.ja' },
            { text: '第2章', link: '/ai/agent-implementation/chapter-02.ja' },
            { text: '第3章', link: '/ai/agent-implementation/chapter-03.ja' },
            { text: '第4章', link: '/ai/agent-implementation/chapter-04.ja' },
            { text: '第5章', link: '/ai/agent-implementation/chapter-05.ja' },
            { text: '第6章', link: '/ai/agent-implementation/chapter-06.ja' },
            { text: '第7章', link: '/ai/agent-implementation/chapter-07.ja' },
            { text: '第8章', link: '/ai/agent-implementation/chapter-08.ja' },
            { text: '第9章', link: '/ai/agent-implementation/chapter-09.ja' },
            { text: '第10章', link: '/ai/agent-implementation/chapter-10.ja' }
          ]
        }
      ],
      '/ai/literacy/': [
        {
          text: 'AIリテラシー',
          link: '/ai/literacy/',
          items: [
            { text: 'Part 1 — 地形図', link: '/ai/literacy/part1-terrain-map' },
            { text: 'Part 2 — 詳細図', link: '/ai/literacy/part2-detailed-map' }
          ]
        }
      ],
      '/': [
        { text: 'About', link: '/about' },
        { text: 'Core', link: '/core/' },
        { text: 'AI', link: '/ai/' }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kishibashi3/publications' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Code: MIT / Content: CC BY-SA 4.0',
      copyright: 'Copyright (c) 2025 kishibashi3'
    }
  },

  lastUpdated: true,

  // Dark mode by default
  appearance: 'dark',

  // Markdown configuration
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(cjkFriendly)
      md.use(mathjax3)
      md.use(plantuml)
    }
  }
})
