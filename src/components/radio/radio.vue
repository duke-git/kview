<template>
    <label class='ksc-radio'>
        <span class='radio'
              :class="{
              'is-disabled': isDisabled,
              'is-checked': model === label,
              }">
            <input type="radio" :disabled="isDisabled" class="ksc-radio-origin"  v-model="model" :name="name" :value="label" @change="changeEvent"/>
            <i class="ksc-radio-style"></i>
        </span>
        <span>
            <span>
                <slot></slot>
                <span v-if="!$slots.default">{{label}}</span>
            </span>
        </span>
    </label>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ksc-radio
        margin-right 20px
        .radio
            display inline-block
            margin-right 3px
            vertical-align middle
            line-height 1
            .ksc-radio-origin
                opacity 0
                outline none
                position absolute
                z-index -1
                top  0
                left 0
                right 0
                bottom 0
                margin 0
            .ksc-radio-style
                border 1px solid #bfcbd9
                width 16px
                height 16px
                border-radius 50%
                background-color  #fff
                position relative
                cursor pointer
                display block
                box-sizing border-box
        .is-checked
            .ksc-radio-style
                border-color  #28a1fc
                background #fff
                &:after
                    width 8px
                    height 8px
                    border-radius 50%
                    background-color #28a1fc
                    content ""
                    position absolute
                    left 50%
                    top 50%
                    transform translate(-50%, -50%)
        .is-disabled
            .ksc-radio-style
                cursor not-allowed
                border-color #bfcbd9
                &:after
                    background-color #bfcbd9
        .is-vertical
            display block


</style>]
<script>
    export default{
        name: 'KSCRadio',
        componentName: 'KSCRadio',
        props: {
            disabled: Boolean,
            name: String,
            value: {}, //radio传入的初始值，区别于input value(https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events)
            label: {},
        },
        computed: {
            isGroup() {
                let  parentDom = this.$parent;
                while(parentDom) {
                   if (parentDom.$options.componentName !=='KSCRadioGroup') {
                      parentDom = parentDom.$parent
                   } else {
                      this._radioGroup = parentDom;
                      return true;
                   }
                }
                return false;
            },
            model: {
                get() {
                    return this.isGroup ? this._radioGroup.value : this.value;
                },

                set(val) {
                    if(this.isGroup) {
                        this._radioGroup.$emit('input', val);
                    } else {
                        this.$emit('input', val);
                    }
                }
            },

            isDisabled() {
                return this.isGroup ? this._radioGroup.disabled : this.disabled
            },

        },
        methods: {
          changeEvent(event) {
            this.$emit('change', event);
          }
        }
    }
</script>
