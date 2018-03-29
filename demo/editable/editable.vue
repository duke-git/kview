<template>
    <div class="example-container" v-html="content"></div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
</style>
<script>
    import KSCEditable from 'src/components/editable/index'
    import Utils from '../utils.js'
    import Vue from 'vue'

    KSCEditable.register(Vue)

    export default {
        name: 'editable-demo',
        mixins: [Utils],
        data() {
          return {
              template: Vue.extend({template: '<a href="http://www.baidu.com" style="color: blue">复杂editable</a>'}),
              content: {}
          }
        },
        methods: {
          handleOnError() {
              alert('请输入正整数');
          },
          handleChanged(text, oldText) {
              alert('改变后文本：'+text + ' 原文本：' + oldText);
          },    
          handleError(errorText) {
              alert('错误的文本：' + errorText);
          }
        }
    }
</script>
