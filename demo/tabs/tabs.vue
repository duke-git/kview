<template>
    <div class="example-container" v-html="content"></div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
</style>
<script>
    import KSCTabs from 'src/components/tabs/index'
    import Utils from '../utils.js'
    import Vue from 'vue'

    KSCTabs.register(Vue)

    export default {
        name: 'tabs-demo',
        mixins: [Utils],
        data() {
          return {
              tabs: {
                tabHeaders: [
                    {show: true, active: true, label: 'tab0', value: 'tab0', closable: true}, 
                    {show: true, active: false, label: 'tab1', value: 'tab1', closable: true},
                    {show: true, active: false, label: 'tab2', value: 'tab2'},
                    {show: true, active: false, label: 'tab3', value: 'tab3', disabled: true}
                ],
                tabPanels: {
                    tab0: Vue.extend({
                                template: '<p style="margin-bottom: 30px;">tab00000000000000000</p>'
                            }),
                    tab1: Vue.extend({
                                template: '<p style="margin-bottom: 30px;">tab11111111111111111</p>'
                            }),
                    tab2: Vue.extend({
                                template: '<p style="margin-bottom: 30px;">tab22222222222222222</p>'
                            }),
                    tab3: Vue.extend({
                        template: '<p style="margin-bottom: 30px;">tab3333333333333333</p>'
                    })
                }
              },

              content: {}
          }
        },
        methods: {
             changeTabs() {
                 var newTabHeader = {show: true, active: false, label: 'tab4', value: 'tab4', closable: true};
                 this.tabs.tabHeaders.push(newTabHeader);
                 this.tabs.tabPanels.tab3 = Vue.extend({
                                template: '<p style="margin-bottom: 30px;">tab444444444444444</p>'
                            });
                 this.$set(this.tabs, 'tabHeaders', this.tabs.tabHeaders);
                 this.$set(this.tabs, 'tabPanels', this.tabs.tabPanels);
             },
          handleClick(val) {
              console.log('tabs打开后', val);
          },    
          handleClose(val) {
              console.log('tabs关闭后', val);
          }
        }
    }
</script>
