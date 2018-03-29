<template>
    <button :disabled="disabled"
        class="ks-btn"
        @click="handleClick"
        :type="type"
        :class="buttonClass"
        :title="title"
    >
        <i class="ks-icon-loading" v-if="loading"></i>
        <i class="icon ks-btns-icon " :class="'icon-' + icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>  
    </button>
</template>
<script>
    export default { 
        name: 'KSCButton',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            icon: {
                type: String,
                default: ''
            },
            size: String,
            loading: Boolean,
            disabled: Boolean,
            title: String
        },
        computed: {
            buttonClass() {
                const disabled = this.disabled;
                const type = this.type;
                const size = this.size;
                const loading = this.loading;
                return [
                    size ? 'ks-btn-' + size : '',
                    {
                        'ks-btn-default': !disabled && type==='default',
                        'ks-btn-default-disabled data-btn-disabled': disabled && type==='default',
                        'ks-btn-primary': !disabled && type==='primary',
                        'ks-btn-primary-disabled data-btn-disabled': disabled && type==='primary',
                        'ks-btns-operation ks-btns-option': !disabled && type==='operation',
                        'ks-btns-operation-disabled data-btn-disabled ks-btns-option': disabled && type==='operation',
                        'ks-btns-option': !disabled && type==='option',
                        'ks-btn-warnning': !disabled && type==='warnning',
                        'ks-btn-warnning-disabled data-btn-disabled': disabled && type==='warnning',
                        'ks-btn-loading data-btn-disabled': loading
                    }
                ]
            }
        },
        methods: {
            handleClick(event) {
                this.$emit('click', event);
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../styles/base.css'
    .ks-btn
        font-size 12px

    .data-btn-disabled
        cursor not-allowed!important

    .ks-btns-operation-disabled
        border-radius 2px
        
    .ks-btns-icon
        margin-right 5px
        width auto
        height auto

    .ks-btn-loading
        width 60px
        height 30px
        color #999
        background-color #fff
        border-color #d9d9d9
        i
            position: absolute
            margin-left -10px
            margin-top -10px
            width 20px
            height 20px
            background url('./../../assets/images/icons/loading-icon.gif')
            background-position center center
            background-repeat no-repeat
</style>