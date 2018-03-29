<template>
    <div class="ks-btns"
        :class="[
                {
                    'ks-btns-vertical': vertical
                }
            ]"
    >
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'KSCButtonGroup',
        props: {
            vertical: Boolean
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.ks-btns-vertical
    .ks-btn
        display block
        float none
        margin-top -2px
        margin-left 0
</style>