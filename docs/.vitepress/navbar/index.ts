import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '开发笔记',
    items: [
      {
        text: `JavaScript`,
        link: '/category/javascript/',
      },
      {
        text: 'Vue',
        link: '/category/vue/',
      },
      {
        text: 'React',
        link: '/category/react/',
      },
      {
        text: 'Node.js',
        link: '/category/nodejs/',
      },
      {
        text: 'MySQL',
        link: '/category/mysql/',
      },
    ],
  },

  {
    text: '所思所想',
    link: '/category/think/',
  },
  {
    text: '关于我',
    link: '/category/about/',
  },
];
