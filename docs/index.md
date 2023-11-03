---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
home: true
# 网站名称
title: 爱编程de小草
titleTemplate: 个人博客
editLink: true
lastUpdated: true

hero:
  # 首页文字
  name: '爱编程de小草'
  text: '好学若饥，谦卑若愚'
  tagline: /web前端/爱折腾/工具控
  # 右边的图片
  image:
    src: /avatar.png
    alt: 努力，奋斗
  actions:
    - theme: brand
      text: 进入主页
      link: /content/notes/
    - theme: alt
      text: 所思所想
      link: /content/think/

features:
  - title: web前端
    details: 一名不起眼的前端开发，会Android，懂点MySQL及Node后端开发
    icon: 🔥

  - title: 爱折腾
    details: 对于自己感兴趣的事物或技术爱捣鼓折腾
    icon: 😆

  - title: 工具控
    details: 喜欢搜索折腾各种好用的工具及插件
    icon: 🛠️
---

<!-- 使用自定义组件 -->

<!-- <home/> -->
<!-- <script setup>
  import home from './components/home.vue';
</script> -->

<style>
:root {
  /* 主页文字渐变和图片背景渐变 */
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #e18a3b 30%, #c12c1f);
  --vp-home-hero-image-background-image: linear-gradient(135deg,#029bbd,#fdc632);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
