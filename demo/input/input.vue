<template>
    <div class="example-container" v-html="content"></div>
</template>
<script>
    import Vue from 'vue'
    import Utils from '../utils.js'
    import KSCInput from 'src/components/input/index'
    
    KSCInput.register(Vue);

    export default {
        name:'input-demo',
        mixins: [Utils],
        data(){
            return {
                valueText:'haha',
                value1:"haha",
                label1:'this title',
                content: {}
            }
        },
        computed:{
            
        },
        methods:{
            onEnter(e){
                console.log(e.target.value)
                alert('enter')
            },
            onBlur(e){
                console.log('Blur',e.target.value)
            },
            onChange(e){
                alert('changed data ')
            },
            onInput(e){
                console.log('trigger input event...',e.target.value)
            },
            onClick(e){
                console.log('you clicked ',this.value1)
            }
        },
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
</style>