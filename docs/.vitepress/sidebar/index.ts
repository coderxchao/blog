import { DefaultTheme } from 'vitepress';
import { jsSidebar } from './javascript';
import { mysqlSidebar } from './mysql';
import { nodeSidebar } from './nodejs';
import { othersSidebar } from './others';
import { reactSidebar } from './react';
import { thinkSidebar } from './think';
import { vueSidebar } from './vue';
export const sidebar: DefaultTheme.Sidebar = {
  '/category/javascript': jsSidebar,
  '/category/nodejs': nodeSidebar,
  '/category/mysql': mysqlSidebar,
  '/category/react': reactSidebar,
  '/category/vue': vueSidebar,
  '/category/think': thinkSidebar,
  '/category/others': othersSidebar,
};
