import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ONi",
  description: "Developer & User documents of ONi.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '用户文档', link: '/user-guide' },
      { text: '开发者文档', link: '/developer-guide' }
    ],

    sidebar: {
      'user-guide': [
        {
          text: 'Examples1',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      'developer-guide': [
        {
          text: 'Examples2',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ONi-Project/ONi' }
    ],

    logo: 'oni.png'
  }
})
