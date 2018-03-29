<template>
    <i class="icon" 
       :class="'icon-' + type"
       :style="styles"
    >
    </i>
</template>
<script>
    export default {
        name: 'KSCIcon',
        props: {
            type: String,
            size: {
                size: [Number, String],
                default: 20
            },
            color: String
        },
        computed: {
            styles () {
                let style = {};
                this.size && (style['font-size'] = `${this.size}px`);
                this.color && (style.color = this.color);
                return style;
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>