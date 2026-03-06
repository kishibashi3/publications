import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: 'Publications',
  description: 'Research publications',

  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/' },
          { text: 'About', link: '/about' },
          { text: '論文', link: '/publications/' },
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
            text: '創発文明論',
            collapsed: false,
            items: [
              { text: '目次', link: '/publications/core/' },
              { text: '序章　なぜ文明は創発しなくなったのか', link: '/publications/core/00-preface' },
              { text: '第1章　存在の公理', link: '/publications/core/01-axiom-of-existence' },
              { text: '第2章　円環構造', link: '/publications/core/02-circular-structure' },
              { text: '第3章　粒子性と波動性', link: '/publications/core/03-particle-wave' },
              { text: '第4章　熱力学的存在論', link: '/publications/core/04-thermodynamic-ontology' },
              { text: '第5章　再関係の倫理', link: '/publications/core/05-re-relational-ethics' },
              { text: '第6章　統合の倫理', link: '/publications/core/06-systemic-value' },
              { text: '第7章　終焉と創発', link: '/publications/core/07-ai-resonance' },
              { text: '附録A　対話記録', link: '/publications/core/appendix-a-dialogue' },
              { text: '附録B　AIの視点', link: '/publications/core/appendix-b-ai-perspective' }
            ]
          },
          {
            text: 'AI',
            items: [
              { text: 'AIエージェント設計概論', link: '/publications/ai/agent-design/' },
              { text: 'AIエージェント実装概論', link: '/publications/ai/agent-implementation/' },
              { text: 'AIリテラシー', link: '/publications/ai/literacy/' }
            ]
          },
          {
            text: 'コンテンツ',
            items: [
              { text: '論文一覧', link: '/publications/' },
              { text: 'ノート', link: '/notes/' }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'About', link: '/en/about' },
          { text: 'Publications', link: '/en/publications/' },
          { text: 'Notes', link: '/en/notes/' },
          { text: 'Contributing', link: '/en/contributing' }
        ],
        sidebar: [
          {
            text: 'About',
            items: [
              { text: 'About', link: '/en/about' }
            ]
          },
          {
            text: 'Publications',
            items: [
              { text: 'Publications', link: '/en/publications/' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
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
