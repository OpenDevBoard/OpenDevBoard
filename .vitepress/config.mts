import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Open DevBoard",
  titleTemplate: ":title - Open DevBoard",
  description: "你的开发板工具箱",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '下载镜像', link: '/download/' },
      { text: '查阅计划', link: '/roadmap' },
      { text: '参与', link: '/contribute'},
      { text: '交流', link: '/community'},
      { text: '捐助', link: '/donate'},
      { text: '关于', link: '/about'},
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/OpenDevBoard/OpenDevBoard/edit/main/:path'
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenDevBoard/OpenDevBoard' }
    ],
    footer: {
      message: '若无特别说明，本站的文字内容采用 CC BY-NC-SA 4.0 协议授权',
      copyright: '2024 Open DevBoard'
    }
  }
})
