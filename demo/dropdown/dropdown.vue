<template>
    <div class="example-container" v-html="content"></div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
</style>
<script>
    import KSCDropdown from 'src/components/dropdown/index'
    import KSCButton from 'src/components/button/index'
    import KSCButtonGroup from 'src/components/button-group/index'
    import Utils from '../utils.js'
    import Vue from 'vue'

    KSCDropdown.register(Vue)
    KSCButton.register(Vue)
    KSCButtonGroup.register(Vue)

    export default {
        name: 'dropdown-demo',
        mixins: [Utils],
        data() {
          return {
              content: {}
          }
        },
        methods: {
          handleClick() {
              alert('1111');
          }
        }
    }
</script>
