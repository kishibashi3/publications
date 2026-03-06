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
        text: '創発文明論',
        collapsed: false,
        items: [
          { text: '目次', link: '/core/' },
          { text: '序章　なぜ文明は創発しなくなったのか', link: '/core/00-preface' },
          { text: '第1章　存在の公理', link: '/core/01-axiom-of-existence' },
          { text: '第2章　円環構造', link: '/core/02-circular-structure' },
          { text: '第3章　粒子性と波動性', link: '/core/03-particle-wave' },
          { text: '第4章　熱力学的存在論', link: '/core/04-thermodynamic-ontology' },
          { text: '第5章　再関係の倫理', link: '/core/05-re-relational-ethics' },
          { text: '第6章　統合の倫理', link: '/core/06-systemic-value' },
          { text: '第7章　終焉と創発', link: '/core/07-ai-resonance' },
          { text: '附録A　対話記録', link: '/core/appendix-a-dialogue' },
          { text: '附録B　AIの視点', link: '/core/appendix-b-ai-perspective' }
        ]
      },
      {
        text: '補足資料',
        collapsed: true,
        items: [
          { text: 'カオスの淵 図解', link: '/core/supplementary/chaos-edge-diagrams' },
          { text: '創発理論', link: '/core/supplementary/emergence-theory' },
          { text: '創発価値理論（完全版）', link: '/core/supplementary/emergence-value-theory-complete' },
          { text: '階層性と循環性', link: '/core/supplementary/hierarchy-circularity' },
          { text: 'システム価値の公式', link: '/core/supplementary/system-value-formula' }
        ]
      },
      {
        text: 'AI',
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
