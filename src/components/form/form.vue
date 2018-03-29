<template>
    <form :class="formClasses">
        <slot></slot>
    </form>
</template>

<script>
/******************from组件完全引用iView form代码, 参考以下*********************/
/*******https://github.com/iview/iview/tree/2.0/src/components/form*******/

    export default {
        name: 'KSCForm',
        props: {
            model: {
                type: Object
            },
            rules: {
                type: Object
            },
            labelWidth: {
                type: Number
            },
            labelPosition: {
                validator(value) {
                    let positions = ['left', 'right', 'top'];
                    return (positions.indexOf(value) > -1);
                }
            },
            inline: {
                type: Boolean,
                default: false
            },
            showMessage: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                fields: []
            };
        },

        computed: {
            formClasses() {
                return [
                    'ks-form',
                    `ks-form-label-${this.labelPosition}`,
                    {
                        ['ks-form-inline']: this.inline
                    }
                ];
            }
        },
        methods: {
            resetFields() {
                this.fields.forEach(field => {
                    field.resetField();
                });
            },
            validate(callback) {
                let valid = true;
                let count = 0;
                this.fields.forEach(field => {
                    field.validate('', errors => {
                        if (errors) {
                            valid = false;
                        }
                        if (typeof callback === 'function' && ++count === this.fields.length) {
                            callback(valid);
                        }
                    });
                });
            },
            validateField(prop, cb) {
                const field = this.fields.filter(field => field.prop === prop)[0];
                if (!field) { throw new Error('[kView warn]: must call validateField with valid prop string!'); }

                field.validate('', cb);
            }
            
        },
        watch: {
            rules() {
                this.validate();
            }
        },
        created () {
            this.$on('on-form-item-add', (field) => {
                if (field) this.fields.push(field);
                return false;
            });
            this.$on('on-form-item-remove', (field) => {
                if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
                return false;
            });
        }


    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ks-form
        display: block
    .ks-form-inline
        .ks-form-item
            display: inline-block
            margin-right: 10px
            vertical-align: top
    .ks-form-label-left
        .ks-form-item-label
            text-align: left
    .ks-form-label-right
        .ks-form-item-label
            text-align: right
    .ks-form-label-left
        .ks-form-item-label
            text-align: right

</style>