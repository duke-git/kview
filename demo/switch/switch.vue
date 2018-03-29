<template>
    <div class="example-container" v-html="content"></div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
</style>
<script>
    import KSCSwitch from 'src/components/switch/index'
    import Utils from '../utils.js'
    import Vue from 'vue'

    KSCSwitch.register(Vue)
    export default {
        name: 'switch-demo',
        mixins: [Utils],
        data() {
          return {
              content: {}
          }
        },
        methods: {
          handleChange(val) {
              alert('开关改变后的状态: ' + val);
          }
        }
    }
</script>
