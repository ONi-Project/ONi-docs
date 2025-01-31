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

          ]
        }
      ],
      'developer-guide': [
        {
          text: '开发者文档',
          items: [
            { text: '主页', link: 'developer-guide' },
            {
              text: '通信标准',
              items: [
                { text: '基本通信协议', link: 'developer-guide/communication/basic-protocol' },
                { text: 'SERVER -> OC', link: 'developer-guide/communication/server-oc' },
                { text: 'OC -> SERVER', link: 'developer-guide/communication/oc-server' },
                { text: 'SERVER -> WEB', link: 'developer-guide/communication/server-web' },
                { text: 'WEB -> SERVER', link: 'developer-guide/communication/web-server' },
              ]
            },
            {
              text: '数据结构',
              items: [
                { text: '全局数据', link: 'developer-guide/data-structure/global' },
              ]
            }
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
