<template>
    <div class="example-container" v-html="content"></div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
</style>
<script>
    import KSCDialog from 'src/components/dialog/index'
    import KSCButton from 'src/components/button/index'
    import KSCMessage from 'src/components/message/index'
    import KSCCheckbox from 'src/components/checkbox/index'
    import KSCRadio from 'src/components/radio/index'
    import KSCRadioGroup from 'src/components/radio-group/index'
    import KSCSelect from 'src/components/select/index'
    import Utils from '../utils.js'
    import Vue from 'vue'

    KSCDialog.register(Vue)
    KSCButton.register(Vue)
    KSCCheckbox.register(Vue)
    KSCRadio.register(Vue)
    KSCRadioGroup.register(Vue)
    KSCSelect.register(Vue)
    KSCMessage.register(Vue)

    export default {
        name: 'dialog-demo',
        mixins: [Utils],
        data() {
          return {
              dialog1: false,
              dialog2: false,
              dialog3: false,
              loading: true,
              name: "",
              sex: "",
              location: "",
              hobby: "",
              selectOptions: [
                {label: '北京', value: 'beijing'},
                {label: '上海', value: 'shanghai'},
                {label: '天津', value: 'tianjin'}
              ],
              checkboxOptions: [
                {label: '打篮球', value: 'basketball'},
                {label: '看书', value: 'read'},
                {label: '压马路', value: 'road'}
              ],
              content: {}
          }
        },
        methods: {
          showDialog(dialog) {
            this[dialog] = true;
          },
          ok(dialog) {
              this.$Message.info('点击了确定');
              this[dialog] = false;
          },
          cancel(dialog) {
              this.$Message.info('点击了取消');
              this[dialog] = false;
          },
          showLoadingDialog(dialog) {
            this.loading = true;
            this[dialog] = true;
          },
          asyncOk() {
              setTimeout(() => {
                this.dialog2 = false;
                this.loading = false;
            }, 2000);
          },
          selectLocation(item) {
            this.location = item.value;
          },
          selectHobby(e) {
            this.hobby = e.target.value;
          },

          dialog3Ok() {
              var msg = '填写的信息是：' + '姓名：' + this.name + '，性别：' + this.sex + '，籍贯：'+ this.location + '，爱好：'+ this.hobby +
              '\n' + '点击确定开始发异步请求了！！！3秒后关闭！！！';
              alert(msg);
              setTimeout(() => {
                this.dialog3 = false;
                this.loading = false;
              }, 3000);
          }
        }
    }
</script>
