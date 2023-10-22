import { defineConfig } from 'vitepress';
import { nav } from './conf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 网站名称（不能与index.md中的titleTemplate一样）
  base: '/blog/',
  title: '爱编程de小草',
  description: '爱编程de小草的个人博客',
  // 网站icon
  head: [['link', { rel: 'icon', href: '/favicon.jpg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    logo: '/avatar.png',
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/coderxchao' }],
    search: {
      provider: 'local',
    },
    outline: {
      level: [2, 6],
      label: '文章目录',
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
  },
});
