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
        },
        {
          text: '補足資料',
          collapsed: true,
          items: [
            { text: 'カオスの淵 図解', link: '/core/supplementary/chaos-edge-diagrams' },
            { text: '創発理論', link: '/core/supplementary/emergence-theory' },
            { text: '創発価値理論（完全版）', link: '/core/supplementary/emergence-value-theory-complete' },
            { text: '階層性と循環性', link: '/core/supplementary/hierarchy-circularity' },
            { text: 'システム価値の公式', link: '/core/supplementary/system-value-formula' },
            { text: 'メタ学問としての一般システム論', link: '/core/supplementary/general-systems-as-meta' },
            { text: 'スケール不変の価値', link: '/core/supplementary/god-in-all-scales' },
            { text: '観測可能性の限界', link: '/core/supplementary/observation-limits' },
            { text: 'カオスの淵の最適化', link: '/core/supplementary/chaos-edge-optimization' },
            { text: '複雑性の視覚的理解', link: '/core/supplementary/complexity-visualization' },
            { text: '具象と抽象の往復', link: '/core/supplementary/concrete-abstract-oscillation' },
            { text: '単純系→複雑系→単純系', link: '/core/supplementary/simple-complex-simple' },
            { text: '価値の定量化', link: '/core/supplementary/value-quantification' }
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
        },
        {
          text: '補足',
          collapsed: true,
          items: [
            { text: '確率的システムの品質保証', link: '/ai/agent-implementation/chapter-quality-assurance' }
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
      '/social-physics/': [
        {
          text: '社会物理学',
          link: '/social-physics/',
          items: [
            { text: '粒子的自己と波動的自己', link: '/social-physics/wave-particle-self' },
            { text: '社会温度論', link: '/social-physics/social-temperature' },
            { text: '社会の過学習', link: '/social-physics/social-overfitting' }
          ]
        }
      ],
      '/governance/': [
        {
          text: '民主主義v2の設計',
          link: '/governance/',
          items: [
            { text: '01. 構造的欠陥', link: '/governance/01-structural-flaws' },
            { text: '02. 再定義', link: '/governance/02-redefinition' },
            { text: '03. 衆議院', link: '/governance/03-house-of-representatives' },
            { text: '04. 参議院', link: '/governance/04-house-of-councillors' },
            { text: '05. 相互チェック', link: '/governance/05-mutual-check' },
            { text: '06. 危機事態', link: '/governance/06-crisis' }
          ]
        },
        {
          text: '分析・批評',
          collapsed: true,
          items: [
            { text: 'イデオロギーの超越', link: '/governance/ideology-transcendence' },
            { text: '代議制民主主義の構造', link: '/governance/representative-democracy-reality' },
            { text: '平均余命連動投票力', link: '/governance/democracy-redesign' },
            { text: '国家存続の優先性', link: '/governance/national-survival' },
            { text: 'グローバリズムと格差', link: '/governance/globalism-inequality' },
            { text: '民主主義の三本柱', link: '/governance/democracy-principles' },
            { text: '民主主義 ≠ 多数決', link: '/governance/democracy-is-not-majority-rule' },
            { text: '動的ガバナンス論', link: '/governance/dynamic-governance' }
          ]
        }
      ],
      '/economy/': [
        {
          text: '経済v2の設計',
          link: '/economy/',
          items: [
            { text: '01. 外部調達社会の診断', link: '/economy/01-external-sourcing' },
            { text: '02. GDPの限界', link: '/economy/02-gdp-critique' },
            { text: '03. 家族の再定義', link: '/economy/03-family-redefinition' },
            { text: '04. 経済設計', link: '/economy/04-economy-design' },
            { text: '観光選別国', link: '/economy/tourism-selection' }
          ]
        }
      ],
      '/applications/': [
        {
          text: '応用',
          link: '/applications/',
          items: [
            { text: 'アジャイルとカオスの淵', link: '/applications/agile-chaos-edge' },
            { text: '教育システムと創発', link: '/applications/education-systems' },
          ]
        }
      ],
      '/': [
        { text: 'About', link: '/about' },
        { text: 'Core', link: '/core/' },
        { text: '社会物理学', link: '/social-physics/' },
        { text: '統治', link: '/governance/' },
        { text: '経済', link: '/economy/' },
        { text: '応用', link: '/applications/' },
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
