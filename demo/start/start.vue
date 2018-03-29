<template>
  <div class="container">
    <div class="title">
      <h1>快速上手</h1>
      <h2>使用之前</h2>
    </div>
    <p>该项目是基于vue.js的前端组件库，在使用 <code>kview</code> 之前，在使用之前我们假设您已经写过Vue，并掌握了下面的内容。</p>
    <ul>
      <li>
        <a href="https://cn.vuejs.org/v2/guide/components.html">Vue组件</a>
      </li>
      <li>
        <a href="https://cn.vuejs.org/v2/guide/single-file-components.html">单文件组件</a>
      </li>
    </ul>
    <p>在<code>kview</code> 中，有以下关键概念，建议开发者花点时间来了解。</p>
    <ul>
      <li>props 传递参数</li>
      <li>slot 内容分发</li>
      <li>events $emit @click 事件</li>
    </ul>
    <h2>引入kview</h2>
    <p>一般在 webpack 入口页面 <code>main.js</code> 中如下配置：</p>
    <code>
      <span>import Vue from 'vue';</span>
      <span>import VueRouter from 'vue-router';</span>
      <span>import App from 'components/app.vue';    // 路由挂载</span>
      <span>import Routers from './router.js';       // 路由列表</span>
      <span>import kView from 'kview';</span>
      <span>import 'kview/dist/kview.min.css';    // 使用 CSS</span>
      <span>Vue.use(VueRouter);</span>
      <span>Vue.use(kView);</span>
      <span>// 路由配置</span>
      <span>const RouterConfig = {</span>
      <span class="code-tab">routes: Routers</span>
      <span>};</span>
      <span>const router = new VueRouter(RouterConfig);</span>
      <span>new Vue({</span>
      <span class="code-tab">el: '#app',</span>
      <span class="code-tab">router: router,</span>
      <span class="code-tab">render: h => h(App)</span>
      <span>});</span>
    </code>
  </div>

</template>

<script>
  export default {
    name: "start",
    methods: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align left
    color #2c3e50
    padding 10px 25px
    min-height 950px
      .title
        float left
        h1
          text-align left
          font-size 30px
        h2
          font-size 20px
          margin-top 10px
    p
      font-size 17px
    ul
      li
        font-size 15px
        a
          color blue
    code
      span
        font-size 14px
        display: block
        color blue
      .code-tab
        margin-left 30px
</style>
