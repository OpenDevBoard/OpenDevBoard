import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Open DevBoard",
  titleTemplate: ":title - Open DevBoard",
  description: "你的开发板工具箱",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    [
      'script',
      { defer: '', src: 'https://analytics.owu.one/script.js', 'data-website-id': '0546685c-01df-406c-b8e9-8539144d04c5' }
    ],
    [
      'link',
      { href: 'https://comment.openboard.dev/dist/Artalk.css', rel: 'stylesheet' }
    ],
    [
      'script',
      { src: 'https://comment.openboard.dev/dist/Artalk.js' }
    ]
  ],
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 3],
    nav: [
      { text: '下载', link: '/download/' },
      { text: '计划', link: '/roadmap' },
      { text: '赞助', link: '/donate' },
      {
        text: '更多',
        items: [
          { text: '参与', link: '/contribute' },
          { text: '交流', link: '/community' },
          { text: '赞助', link: '/donate' },
          { text: '关于', link: '/about' }
        ]
      },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
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
