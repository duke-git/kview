<template>
<transition-group name="fadeIn">
    <div class="ks-dialog-mask" v-bind:key="mask" v-show="visible && modal" @click="handleMaskClick">
    </div>
    <div class="ks-dialog-wrapper" v-show="visible" v-bind:key="wrapper">
        <div class="ks-dialog"
            ref="dialog"
            :style="{width: dialogWidth}"
        >
            <div class="ks-dialog-content">
                <div class="ks-dialog-header">
                    <span class="ks-dialog-title">
                        {{ title }}
                    </span>
                    <a href="javascript:void(0)" class="close">
                        <i class="icon icon-close-20" title="关闭" @click="close"></i>
                    </a>
                </div>
                <div class="ks-dialog-body"><slot></slot></div>
                <div class="ks-dialog-footer" v-if="footerVisible">
                    <slot name="footer">
                        <KSCButton type="primary" :loading="buttonLoading" @click="handleOkBtnClick" v-if="okBtnVisible">
                        <span v-if="!buttonLoading">{{ okBtnText }}</span></KSCButton>
                        <KSCButton type="default" @click="handleCancelClick" v-if="cancelBtnVisible">{{ cancelBtnText }}</KSCButton>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</transition-group>
</template>
<script>
import KSCButton from '../button/button.vue';

    export default {
        name: 'KSCDialog',
        components: { KSCButton },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                required: false,
                default: '提示'
            },
            modal: {
                type: Boolean,
                default: true
            },
            maskClosable: {
                type: Boolean,
                required: false,
                default: false
            },
            escClosable: {
                type: Boolean,
                required: false,
                default: false
            },
            footerVisible: {
                type: Boolean,
                required: false,
                default: true
            },
            okBtnText: {
                type: String,
                required: false,
                default: '确定'
            },
            cancelBtnText: {
                type: String,
                required: false,
                default: '取消'
            },
            okBtnVisible: {
                type: Boolean,
                required: false,
                default: true
            },
            cancelBtnVisible: {
                type: Boolean,
                required: false,
                default: true
            },
            isBtnLoading: {
                type: Boolean,
                required: false,
                default: false
            },
            width: {
                type: [Number, String],
                default: 520
            },
        },
        data () {
            return {
                buttonLoading: false,
                visible: this.value,
                dialogWidth: parseInt(this.width, 10) + 'px',
                mask: "mask",
                wrapper: "wrapper"

            };
        },
        methods: {
            handleMaskClick() {
                if (this.maskClosable) {
                    this.close();
                }
            },
            handleOkBtnClick() {
                if (this.isBtnLoading) {
                    this.buttonLoading = true;
                } else {
                    this.visible = false;
                }
                this.$emit('ok');
            },
            handleCancelClick() {
                this.close();
            },
            close() {
                this.visible = false;
                this.$emit('cancel');
            },
            escClose(e) {
                if (this.visible && this.escClosable) {
                    if (e.keyCode === 27) {
                        this.close();
                    }
                }
            },

        },
        watch:{
            value(val) {
                this.visible = val;
            },
            isBtnLoading(val) {
                if (!val) {
                    this.buttonLoading = false;
                }
            }

        },
        mounted () {
            document.addEventListener('keydown', this.escClose);
        },
        beforeDestroy () {
            document.removeEventListener('keydown', this.escClose);
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

.ks-dialog-mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(55,55,55,.6)
    z-index: 100
.ks-dialog-wrapper
    position: fixed
    overflow: auto
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 1000
    outline: 0

    .ks-dialog
        box-sizing: border-box
        width: auto
        margin: 0 auto
        position: relative
        outline: 0
        top: 100px
        box-shadow: 0 0 20px 0 #666
        .ks-dialog-content
            position: relative
            background-color: #fff
            border: 0
            background-clip: padding-box
            .ks-dialog-header
                height: 40px
                line-height: 40px
                border-bottom: 1px solid #ebebeb
                color: #666
                position: relative
                font-size: 14px
                margin: 0 16px
                .ks-dialog-title
                    float: left
                    font-size: 14px
                .close
                    display: inline-block
                    float: right
                    width: 30px
                    margin-top: 10px
                    >i
                        font-size: 16px
                        &:hover
                            color: #666
            .ks-dialog-body
                padding: 16px;
            .ks-dialog-footer
                border-top: 1px solid #ebebeb
                padding: 12px 18px
                text-align: right
                .ks-btn
                    margin: 0
                .ks-btn-loading
                    >i
                        margin-top: -2px;
                .ks-btn:first-child
                    margin-right: 10px


.fadeIn-enter-active,.fadeIn-leave-active {
  transition: all 1s ease;
}
.fadeIn-enter-active,.fadeIn-leave {
    opacity: 1;
}
.fadeIn-enter,.fadeIn-leave-active {
  opacity: 0;
}
</style>
