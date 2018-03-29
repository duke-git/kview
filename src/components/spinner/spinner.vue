<template>
    <div class="ks-spinner space">
        <button
                @click="decrease($event)"
                :class="{disabled: disabled || disableDecrease}"
        >
            -
        </button>
        <input
                type="text"
                name="spinner"
                class="ks-form-text"
                ref="spinner"
                :class="{'disabled': disabled}"
                :value="val"
                @change="changeValue($event)"
                :disabled="disabled"
                :max="max"
                :min="min"
                :step="step"
        />
        <button
                @click="increase($event)"
                :class="{disabled: disabled || disableIncrease}"
        >
            +
        </button>
    </div>
</template>

<script>
    export default {
        name: "KSCSpinner",
        data: function() {
            return {
                val: this.value
//                maxValue: this.max,
//                min: this.min,
//                value: this.val,
//                disabled: this.initDisabled,
//                oldValue: this.value,
            }
        },
        props: {
            max: {
                type: Number,
                default: 3
            },
            min: {
                type: Number,
                default: 0
            },
            value: {
                type: Number,
                default: 1
            },
            disabled: {
                type: Boolean,
                default: false
            },
            step: {
                type: Number,
                default: 2
            }
        },
        computed: {
            // 禁用 -
            disableDecrease: function() {
                return this.val <= this.min || this.disabled || this.val - this.min < this.step;
            },
            //禁用 +
            disableIncrease: function() {
                return this.val >= this.max || this.disabled || this.max - this.val < this.step;
            }
        },
        methods: {
            /**
             *  点击 '+' 按钮触发
             */
            increase: function(e) {
                if (this.disableIncrease) return;
                this.val += this.step;
                this.$emit('changed', this.val, e);
            },
            /**
             * 点击 '-' 按钮触发
             */
            decrease: function(e) {
                if (this.disableDecrease) return;
                this.val -= this.step;
                this.$emit('changed', this.val, e);
            },
            /**
             * input 框修改时触发
             */
            changeValue: function(e) {
                let value = e.target.value.trim();
                let reg = /^[+-]?\d+$/;
                if (!reg.test(value) || this.disabled) {
                    this.$refs.spinner.value = this.val;
                } else {
                    value = parseInt(value);
                    if (value >= this.max) {
                        this.val = this.max;
                    } else if (value < this.min) {
                        this.val = this.min;
                    } else {
                        this.val = value;
                    }
                    this.$refs.spinner.value = this.val;
                    this.$emit('changed', value, e);
                }
            },

            getVal: function() {
                return this.val;
            },
            reset: function() {
//                this.val= this.oldValue;
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .no-border-radius
        border-radius 0 !important

    .disabled
        cursor not-allowed
        background-color #fafafa
        border-color #e7e7e7
        color #555

    .ks-spinner
        button
            border-radius 0 !important

    .space
        margin 5px 0
</style>


