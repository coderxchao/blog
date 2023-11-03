import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  '/content/about/': {
    base: '/content/about/',
    items: [],
  },
  'content/think': {
    base: '/content/think',
    items: [],
  },
  'content/issue': {
    base: '/content/issue',
    items: [],
  },
  'content/notes': [
    {
      text: 'JavaScript',
      collapsed: false,
      items: [
        {
          text: 'JS闭包',
          link: '/aaa',
        },
      ],
    },
    {
      text: 'Vue',
      collapsed: false,
      items: [
        {
          text: 'vue双向绑定',
          link: '/bbbc',
        },
      ],
    },
  ],
};
