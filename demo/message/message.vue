<template>
    <div class="example-container" v-html="content"></div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
</style>
<script>
    import KSCMessage from 'src/components/message/index'
    import KSCButton from 'src/components/button/index'
    import Utils from '../utils.js'
    import Vue from 'vue'

    KSCButton.register(Vue)
    KSCMessage.register(Vue)


    export default {
        name: 'message-demo',
        mixins: [Utils],
        data() {
          return {
              content: {}
          }
        },
        methods: {
          showMessage(type) {
            switch(type){
                case 'info':
                    this.$Message.info('信息提示');
                    break;
                case 'success':
                    this.$Message.success('成功提示');
                    break;
                case 'warning':
                    this.$Message.warning('警告提示');
                    break;
                case 'error':
                    this.$Message.error('错误提示');
                    break;
                default:
                    this.$Message.info('普通提示');
            }

          },

          showLoadingMessage() {
              this.$Message.loading('加载中....');
          },
          showClosableMessage() {
              this.$Message.info('可以关闭提示', 2000, null, true);
          },
          showLongMessage() {
              this.$Message.info('10秒后关闭', 10000);
          }
        }
    }
</script>
