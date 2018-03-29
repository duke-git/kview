<template>
    <div class="example-container" v-html="content"></div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
</style>
<script>
    import KSCDatetimepicker from 'src/components/datetimepicker/index'
    import Utils from '../utils.js'
    import Vue from 'vue'

    KSCDatetimepicker.register(Vue)

    export default {
        name: 'datetimepicker-demo',
        mixins: [Utils],
        data() {
          return {
                dateStr1: '',
                dateStr2: '',
                dateStr3: '',
                fpOptions1: {
                    allowInput: true,
                },
                fpOptions2: {
                    enableTime: true
                },
                fpOptions3: {
                    enableSeconds: true
                },
                content: {}
          }
        },
        methods: {
          handleChange(selectedDates, dateStr, instance) {
              alert('日期改变时触发：' + dateStr);
          },
          handleOpen(selectedDates, dateStr, instance) {
              alert('打开时触发：' + instance);
          },    
          handleClose(selectedDates, dateStr, instance) {
              alert('关闭时触发' + dateStr);
          }
        }
    }
</script>
