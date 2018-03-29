<template>
    <div class="example-container" v-html="content"></div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
</style>
<script>
    import KSCTooltip from 'src/components/tooltip/index'
    import Utils from '../utils.js'
    import Vue from 'vue'

    KSCTooltip.register(Vue)

    export default {
        name: 'tooltip-demo',
        mixins: [Utils],
        data() {
          return {
              content: {}
          }
        },
        methods: {
          handleOpen() {
              console.log('tooltip打开后');
          },
          handleClose() {
              console.log('tooltip关闭后');
          }
        }
    }
</script>
