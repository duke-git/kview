<template>
    <div class="ks-radio-group">
        <slot></slot>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<script>
    import KSCRadio from './../radio/index'
    export default{
        name: "KSCRadioGroup",
        componentName: "KSCRadioGroup",
        props: {
            disabled: Boolean,
            value: {},
            name: String,
        },
        components: {
          KSCRadio
        },
        watch: {
           value(val) {
              this.$emit('change', val)
           }
        }
    }
</script>
