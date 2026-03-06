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
        collapsed: true,
        items: [
          { text: '創発文明論', link: '/core/' }
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
