import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '<span style="font-weight: bold">首页</span>',
    link: '/', // 表示docs/index.md
  },
  {
    text: '<span style="font-weight: bold">个人成长</span>',
    items: [
      {
        text: '所思.所想',
        link: '/', // 表示docs/column/Growing/index.md
      },
    ],
  },
  {
    text: '<span style="font-weight: bold">关于我</span>',
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
