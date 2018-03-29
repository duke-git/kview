<template>
    <div class="example-container" v-html="content">
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
    .example
        button
            clear both
            margin 20px 0

</style>
<script>
    import KSCSteps from 'src/components/steps/index'
    import KSCButton from 'src/components/button/index'
    import Utils from '../utils.js'
    import Vue from 'vue';


    KSCSteps.register(Vue);
    KSCButton.register(Vue);


    export default {
        name: 'steps-demo',
        mixins: [Utils],
        data() {
          return {
              active: 0,
              steps:[{text: '步骤1'},{text: '步骤2'},{text: '步骤3'}],
              center: false,
              content: {}
          }
        },
        methods: {
          nextStep(event) {
              if(this.active < this.steps.length-1)
                return this.active++;
          },
          previousStep(event) {
              if(this.active > 0)
              return this.active--;
          }
         }
    }
</script>
