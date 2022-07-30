const config = {
  title: 'let.sh docs',
  description: 'Documentation for let.sh.',

  lastUpdated: true,

  algolia: {
    appId: '2GTGJBXHIX',
    apiKey: '8f067b172c1c397812479ea00b77e111',
    indexName: 'let'
  },
  themeConfig: {
    logo: '/img/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/let-sh/docs' },
    ],
    nav: [
      {
        text: 'Language',
        items: [
          { text: 'EN', link: '/' },
          { text: '中文', link: '/zh/' }
        ]
      }
    ],
    sidebar: {
      // '/zh/': [
       
      // ],
      '/': [
        {
          text: 'Quick Start',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Quick Start', link: '/quickstart/' },
            { text: 'Install Cli', link: '/quickstart/install' },
          ]
        },
        {
          text: 'Cli',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview', link: '/cli/overview' },
            { text: 'Commands', link: '/cli/commands' },
            { text: 'Env', link: '/cli/env' },
            { text: 'let.json', link: '/cli/let.json' },
          ]
        },
        {
          text: 'Handbook',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Static File Hosting', link: '/handbook/static' },
            { text: 'Hugo', link: '/handbook/hugo' },
            { text: 'Hexo', link: '/handbook/hexo' },
            { text: 'Docusaurus', link: '/handbook/docusaurus' },
            { text: 'Vue', link: '/handbook/vue' },
            { text: 'React', link: '/handbook/react' },
            { text: 'Nuxt', link: '/handbook/nuxt' },
            { text: 'FastApi', link: '/handbook/fastapi' },
            { text: 'Flask', link: '/handbook/flask' },
            { text: 'Express', link: '/handbook/express' },
            { text: 'Gin', link: '/handbook/gin' },
            { text: 'Rocket', link: '/handbook/rocket' },

            
          ]
        },
        {
          text: 'Plugin',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Firebase', link: '/plugin/firebase' },
            { text: 'Google Analytics', link: '/plugin/google-analytics' },
          ]
        },
        {
          text: 'Web3',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Deploy to Web3 infra', link: '/web3/' },
          ]
        }
      ],
    },
    editLink: {
      pattern: 'https://github.com/let-sh/docs/edit/main/docs/:path'
    },
    footer: {
      message: 'Powered by let.sh',
    }
  },
  markdown: {
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#permalinks


    // options for markdown-it-toc-done-right
    toc: { level: [1, 2, 3] },
  },
 
}

module.exports = config