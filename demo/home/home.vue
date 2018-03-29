<template>
    <div class="home-main-wrap">
        <div class="title-container">
            <span>vue前端组件库</span>
        </div>
        <div class="logo-container">
            <div class="kview-logo"></div>
        </div>
        <div class="components-comment">
            <p>An UI components library based on vue.js.<p>
            <p>控制台前端组件库，基于vue2.0。目前版本v1.0.7。<p>
        </div>
        <div class="tech-container">
            <div class="tech-item-es6">
                <span>es6</span>
            </div>
            <div class="tech-item-vue">
                <span>vue2.0</span>
            </div>
            <div class="tech-item-webpack2">
                <span>webpack2.0</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods: {

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .home-main-wrap
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        text-align center
        color #2c3e50
    
    .title-container 
        font-weight bold
        font-size 24px
    .logo-container
        .kview-logo
            width 300px
            height 150px
            background url('../assets/images/kview-logo.png')
            background-size 300px 150px
            margin 0 auto

    .components-comment
        font-size 18px
    
    .tech-container
        display block
        padding 60px 80px
        div
            display inline-block
            margin-right 15px
        span
            font-size 20px
            color #fff
            display inline-block
            margin-top 60px

    .tech-item-es6
        width 200px
        height 200px
        background url('../assets/images/es6-logo.png')
        background-size 200px 200px
        span
            color #000

    .tech-item-vue 
        width 200px
        height 200px
        background url('../assets/images/vue-logo.png')

    .tech-item-webpack2
        width 200px
        height 200px
        background url('../assets/images/webpack-logo.jpg')
        background-size 200px 200px
    
</style>