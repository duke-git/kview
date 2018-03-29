<template>
   <div :class="classes">
        <label class="ks-form-item-label" :style="labelStyles" v-if="label">
            <slot name="label">{{ label }}</slot>
        </label>
        <div class="ks-form-item-content" :style="contentStyles">
            <slot></slot>
            <transition name="fadeIn">
                <div class="ks-form-item-error-tip" v-if="validateState === 'error' && showMessage && form.showMessage">
                    {{ validateMessage }}
                </div>
            </transition>
        </div>
   </div>
</template>

<script>
/******************from-item组件完全引用iView form代码, 参考以下*********************/
/*******https://github.com/iview/iview/tree/2.0/src/components/form*******/

    import AsyncValidator from 'async-validator';
    import Emitter from '../../mixins/emitter';

    function getPropByPath(obj, path) {
        let tempObj = obj;
        path = path.replace(/\[(\w+)\]/g, '.$1');
        path = path.replace(/^\./, '');

        let keyArr = path.split('.');
        let i = 0;

        for (let len = keyArr.length; i < len - 1; ++i) {
            let key = keyArr[i];
            if (key in tempObj) {
                tempObj = tempObj[key];
            } else {
                throw new Error('[kView warn]: please transfer a valid prop path to form item!');
            }
        }
        return {
            o: tempObj,
            k: keyArr[i],
            v: tempObj[keyArr[i]]
        };
    }

    export default {
        name: 'KSCFormItem',
        mixins: [ Emitter ],
        props: {
            label: {
                type: String,
                default: ''
            },
            labelWidth: {
                type: Number
            },
            prop: {
                type: String
            },
            required: {
                type: Boolean,
                default: false
            },
            rules: {
                type: [Object, Array]
            },
            error: {
                type: String
            },
            validateStatus: {
                type: Boolean
            },
            showMessage: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                isRequired: false,
                validateState: '',
                validateMessage: '',
                validateDisabled: false,
                validator: {}
            };
        },
        watch: {
            error (val) {
                this.validateMessage = val;
                this.validateState = 'error';
            },
            validateStatus (val) {
                this.validateState = val;
            }
        },
        computed: {
            classes () {
                let prefixClass = 'ks-form-item';
                return [
                    `${prefixClass}`,
                    {
                        [`${prefixClass}-required`]: this.required || this.isRequired,
                        [`${prefixClass}-error`]: this.validateState === 'error'
                    }
                ];
            },
            form() {
                let parent = this.$parent;
                while (parent.$options.name !== 'KSCForm') {
                    parent = parent.$parent;
                }
                return parent;
            },
            fieldValue: {
                cache: false,
                get() {
                    const model = this.form.model;
                    if (!model || !this.prop) { return; }

                    let path = this.prop;
                    if (path.indexOf(':') !== -1) {
                        path = path.replace(/:/, '.');
                    }

                    return getPropByPath(model, path).v;
                }
            },
            labelStyles () {
                let style = {};
                const labelWidth = this.labelWidth || this.form.labelWidth;
                if (labelWidth) {
                    style.width = `${labelWidth}px`;
                }
                return style;
            },
            contentStyles () {
                let style = {};
                const labelWidth = this.labelWidth || this.form.labelWidth;
                if (labelWidth) {
                    style.marginLeft = `${labelWidth}px`;
                }
                return style;
            }
        },
        methods: {
            getRules () {
                let formRules = this.form.rules;
                const selfRules = this.rules;

                formRules = formRules ? formRules[this.prop] : [];

                return [].concat(selfRules || formRules || []);
            },
            getFilteredRule (trigger) {
                const rules = this.getRules();

                return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
            },
            validate(trigger, callback = function () {}) {
                const rules = this.getFilteredRule(trigger);
                if (!rules || rules.length === 0) {
                    callback();
                    return true;
                }

                this.validateState = 'validating';

                let descriptor = {};
                descriptor[this.prop] = rules;

                const validator = new AsyncValidator(descriptor);
                let model = {};

                model[this.prop] = this.fieldValue;

                validator.validate(model, { firstFields: true }, errors => {
                    this.validateState = !errors ? 'success' : 'error';
                    this.validateMessage = errors ? errors[0].message : '';

                    callback(this.validateMessage);
                });
            },
            resetField () {
                this.validateState = '';
                this.validateMessage = '';

                let model = this.form.model;
                let value = this.fieldValue;
                let path = this.prop;
                if (path.indexOf(':') !== -1) {
                    path = path.replace(/:/, '.');
                }

                let prop = getPropByPath(model, path);

                if (Array.isArray(value)) {
                    this.validateDisabled = true;
                    prop.o[prop.k] = [].concat(this.initialValue);
                } else {
                    this.validateDisabled = true;
                    prop.o[prop.k] = this.initialValue;
                }
            },
            onFieldBlur() {
                this.validate('blur');
            },
            onFieldChange() {
                if (this.validateDisabled) {
                    this.validateDisabled = false;
                    return;
                }

                this.validate('change');
            }
        },
        mounted () {
            if (this.prop) {
                this.dispatch('KSCForm', 'on-form-item-add', this);

                Object.defineProperty(this, 'initialValue', {
                    value: this.fieldValue
                });

                let rules = this.getRules();

                if (rules.length) {
                    rules.every(rule => {
                        if (rule.required) {
                            this.isRequired = true;
                            return false;
                        }
                    });
                    this.$on('on-form-blur', this.onFieldBlur);
                    this.$on('on-form-change', this.onFieldChange);
                }
            }
        },
        beforeDestroy () {
            this.dispatch('KSCForm', 'on-form-item-remove', this);
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.ks-form-item
    margin-bottom: 24px
    vertical-align: top
    zoom: 1
    display: inline-block
    width: 100%
    .ks-form-item-label
        text-align: right
        vertical-align: middle
        float: left
        font-size: 12px
        color: #495060
        line-height: 1
        padding: 10px 12px 10px 0
        box-sizing: border-box
    .ks-form-item-content
        position: relative
        line-height: 32px
        font-size: 12px
        width: 185px
        height: 30px
        .ks-form-item-error-tip
            position: absolute
            top: 100%
            left: 0
            line-height: 1
            padding-top: 6px
            color: #ed3f14
.ks-form-item-required
    .ks-form-item-label:before
        content: '*'
        display: inline-block
        margin-right: 4px
        line-height: 1
        font-size: 12px
        color: #ed3f14

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