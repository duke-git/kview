<template>
    <div class="example-container" v-html="content"></div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
</style>
<script>
    import KSCBreadcrumb from 'src/components/breadcrumb/index'
    import Utils from '../utils.js'
    import Vue from 'vue'
    let KSCBreadcrumbItem = KSCBreadcrumb.item;
    KSCBreadcrumb.register(Vue)
    KSCBreadcrumbItem.register(Vue)

    export default {
        name: 'breadcrumb-demo',
        mixins: [Utils],
        data() {
          return {
              content: {}
          }
        },
        methods: {
          
        }
    }
</script>
