<template>
     <div class="ks-form-search">
        <input type="text" class="ks-form-text"  placeholder="输入关键字" v-model="keyword" @input="show($event.target.value)">
        <i class="icon icon-search-20"></i>
    </div>
</template>
<script>
    export default {
        name: 'KSCSearchBox',
        data(){
            return {keyword:''}
        },
        methods:{
            show(){
                this.$emit('input', event);
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>