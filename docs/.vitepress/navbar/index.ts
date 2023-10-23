import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/', // 表示docs/index.md
  },
  {
    text: '博客',
    items: [
      {
        text: '学习笔记 📖',
        link: '/content/notes/',
      },
      {
        text: '开发问题 💻',
        link: '/content/issue/',
      },
      {
        text: '所思所想 🤔',
        link: '/content/think/',
      },
    ],
  },
  {
    text: '关于我',
    link: '/content/about/',
  },
];
