import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '<span style="color:yellow">首页</span>',
    link: '/', // 表示docs/index.md
  },
  {
    text: '个人成长',
    items: [
      {
        text: '所思.所想',
        link: '/', // 表示docs/column/Growing/index.md
      },
    ],
  },
  {
    text: '关于我',
    items: [
      {
        text: 'Github',
        link: '/',
      },
      {
        text: '掘金',
        link: '/',
      },
    ],
  },
];
