import { defineConfig } from 'vitepress';
import { nav } from './navbar';
import { sidebar } from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 网站名称（不能与index.md中的titleTemplate一样）
  base: '/blog/',
  title: '爱编程de小草',
  description: '爱编程de小草的个人博客',
  lang: 'zh-CN',
  // 网站icon
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    logo: '/avatar.png',
    sidebar: sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/coderxchao' }],
    search: {
      provider: 'local',
    },
    outline: {
      // level: [2, 6],
      label: '目录',
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
  },
});
