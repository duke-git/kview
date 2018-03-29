<template>
  <div class="example-container" v-html="content">
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    .example-container
        .example
            padding-left 10px
    .ks-drag
        width 500px
    .float-left
        float left
        padding-top 20px
</style>
<script>
    import KSCSlider from 'src/components/slider/index';
    import Utils from '../utils.js'
    import Vue from 'vue';

    KSCSlider.register(Vue);

    export default{
        name: 'slider-demo',
        mixins: [Utils],
        data(){
            return{
                content: {},
                showRange: true,
                unit: 'G',
                value: 70,
                min:70,
                max: 180,
                step: 1,
                width: 380,
                disabled: true

            }
        },
        methods: {
            handleChange(val) {
                this.value = val;
            },

            stopHandle(val) {
                this.value = val;
            }
        }

    }
</script>
