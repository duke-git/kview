<template>
    <div class="ks-switch">
        <div class="ks-switch-wrapper" :class="switchWrapperClass">
            <span class="ks-switch-label-on" :class="switchLabelClass">{{labelOn}}</span>
            <span class="ks-switch-label-blank"> &nbsp;</span>
            <span class="ks-switch-label-off" :class="switchLabelClass">{{labelOff}}</span>
            <input type="checkbox"
                :class="{'ks-switch-input-disabled': disabled}"
                :disabled="disabled"
                :checked="checked"
                @change="handleChange"
            />
        </div>
    </div>
</template>
<script>
    export default {
        name: 'KSCSwitch',
        props: {
            labelOn: {
                type: String,
                required: false,
                default: 'ON'
            },
            labelOff: {
                type: String,
                required: false,
                default: 'OFF'
            },
            default: {
                type: String,
                required: false,
                default: 'off'
            },
            disabled: Boolean
        },
        data () {
            return {
                checked: this.default === 'on' ? true : false,
            };
        },
        computed:{
            switchWrapperClass(){
                const disabled = this.disabled;
                const checked = this.checked;
                return [
                    {
                        'ks-switch-on-offset': !checked,
                        'ks-switch-off-offset': checked,
                        'ks-switch-disabled': disabled
                    }
                ]
            },
            switchLabelClass(){
                const disabled = this.disabled;
                return [
                    {
                        'ks-switch-label-disabled': disabled
                    }
                ]
            }
        },
        methods: {
            handleChange(e) {
                let target = e.target;
                if (this.disabled) {
                    return false;
                }
                this.checked = target.checked;
                this.$emit('change', target.checked);
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ks-switch
        position: relative
        box-sizing: border-box
        display: inline-block
        width: 72px
        border: 1px solid
        overflow: hidden
        z-index: 0
        cursor: pointer
        border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;

        .ks-switch-wrapper
            box-sizing: border-box
            display: inline-block
            width: 112px
            transition: margin-left .5s
            span
                box-sizing: border-box
                display: inline-block
                margin: 0
            input
                position: absolute
                top: 0
                left: 0
                width: 72px
                height: 100%
                opacity: 0
                cursor: pointer
            .ks-switch-label-on
                text-align: center
                padding: 3px 6px
                font-size: 12px
                line-height: 18px
                width: 35px
                color: #fff
                background-color: #5faded
            .ks-switch-label-blank
                width: 36px
                text-align: center
                padding: 3px 6px
                z-index: 100
                border-left: 1px solid #ccc
                border-right: 1px solid #ccc
                margin-left: -3px
                margin-right: -3px
            .ks-switch-label-off
                text-align: center
                padding: 3px 6px
                font-size: 12px
                line-height: 18px
                width: 35px
                color: #333
                background-color: #f0f0f0
            .ks-switch-label-disabled
                color: #a6a6a6
            .ks-switch-input-disabled
                background: #efefef
                cursor: not-allowed
        .ks-switch-on-offset
            margin-left: -38px
        .ks-switch-off-offset
            margin-left: -3px

        .ks-switch-disabled
            background: #efefef
            cursor: not-allowed

</style>
