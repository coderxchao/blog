import { DefaultTheme } from 'vitepress';
import { jsSidebar } from './javascript';
import { nodeSidebar } from './nodejs';
import { mysqlSidebar } from './mysql';
import { reactSidebar } from './react';
import { vueSidebar } from './vue';
import { thinkSidebar } from './think';
export const sidebar: DefaultTheme.Sidebar = {
  '/category/javascript': jsSidebar,
  '/category/nodejs': nodeSidebar,
  '/category/mysql': mysqlSidebar,
  '/category/react': reactSidebar,
  '/category/vue': vueSidebar,
  '/category/think': thinkSidebar,
};
