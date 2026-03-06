import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: '思考の本棚',
  description: '思考の公開アーカイブ',

  lang: 'ja',

  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'ノート', link: '/notes/' },
      { text: '貢献', link: '/contributing' }
    ],
    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'About', link: '/about' }
        ]
      },
      {
        text: 'Core',
        collapsed: false,
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
      },
      {
        text: 'AI',
        collapsed: true,
        items: [
          { text: 'AIエージェント設計概論', link: '/ai/agent-design/' },
          { text: 'AIエージェント実装概論', link: '/ai/agent-implementation/' },
          { text: 'AIリテラシー', link: '/ai/literacy/' }
        ]
      },
      {
        text: 'ノート',
        items: [
          { text: 'ノート', link: '/notes/' }
        ]
      }
    ],

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

  // Dark mode by default
  appearance: 'dark',

  // Markdown configuration
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(mathjax3)
    }
  }
})
