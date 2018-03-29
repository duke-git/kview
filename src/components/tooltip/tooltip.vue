<template>
    <div class="ks-tooltip" 
        :class="{'ks-tooltip-disabled': disabled}"
        @mouseenter="handleShow" 
        @mouseleave="handleClose"
    >
        <div class="ks-tooltip-label">{{label}}</div>
        <div class="ks-tooltip-content" :class="transitionClass">
            <slot name="content">{{ content }}</slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'KSCTooltip',
        props: {
            label: {
                type: String,
                required: false,
                default: '?'
            },
            content: {
                type: [String, Number],
                default: ''
            },
            delay: {
                type: Number,
                default: 0
            },
            disabled: Boolean
        },
        data () {
            return {
                show: false,
            };
        },
        computed:{
            transitionClass(){
                const show = this.show;
                return [
                    {
                        'ks-tooltip-content-show': show,
                        'ks-tooltip-content-opacity': show
                    }
                ]
            }
        },
        methods: {
            handleShow(e) {
                let target = e.currentTarget;
                if (this.disabled) {
                    return false;
                }
                this.timeout = setTimeout(() => {
                    this.show = true;
                }, this.delay);
                this.$emit('open');
            },
            handleClose(e) {
                let target = e.currentTarget;
                if (this.disabled) {
                    return false;
                }
                clearTimeout(this.timeout);
                this.show = false;
                this.$emit('close');
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ks-tooltip
        position: relative
        display: inline-block
        vertical-align: middle
        margin: 0 10px
        .ks-tooltip-label
            display: inline-block
            width: 16px
            height: 16px
            border: 1px solid #a6a6a6
            border-radius: 50%
            line-height: 16px
            cursor: pointer
            color: #a6a6a6
        .ks-tooltip-content
            position: absolute
            box-sizing: border-box
            z-index: 9999
            max-width: 500px
            border: 1px solid #d9d9d9
            border-radius: 3px
            background: #fafafa
            color: #657b83
            top: 25px
            padding: 5px 10px
            box-shadow: 1px 1px 2px 0px #ccc
            white-space: nowrap
            display: none
            opacity: 0
        .ks-tooltip-content-show
            display: block
            opacity: 0
        .ks-tooltip-content-opacity
            opacity: .9
            transition: opacity 2s ease-in-out
    .ks-tooltip-disabled
        .ks-tooltip-label
            background: #efefef
            cursor: not-allowed
        
</style>