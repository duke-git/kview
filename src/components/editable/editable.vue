<template>
    <div class="ks-editable"
        :class="{'isEditing': editing}"
        :title="text"
    >
        <i v-if="!disabled && !editing"
            class="icon icon-edit-20"
            title="编辑"
            @click="handleEditing"
        ></i>
        <div class="ks-editable-content"
            :class="{'ks-editable-disabled': disabled}">
            <input v-if="editing"
                type="text"
                class="ks-form-text ks-editable-input"
                v-model="valueText"
                @blur="handleBlur"
                @keydown="handleKeydown"
            />
            <div v-else class="ks-editable-text">
                {{valueText}}
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
// <component :is='getTemplate' keep-alive></component>
    export default {
        name: 'KSCEditable',
        props: {
            text: {
                type: String,
                required: false,
                default: '可编辑文字'
            },
            template: {
                type: Function,
                required: false,
                default: undefined
            },
            isEditing: {
                type: Boolean,
                required: false,
                default: false
            },
            required: {
                type: Boolean,
                required: false,
                default: true
            },
            test:{
                type: Boolean,
                required: false,
                default: true
            },
            validate: {
                type: [String, RegExp, Function],
                required: undefined
            },
            onError: {
                type: Function,
                required: false,
                default: function() { alert('输入不合法'); }
            },
            disabled: Boolean
        },
        data () {
            let valueText = this.text;
            let oldText = this.text;
            let isEditing = this.isEditing;
            let template = this.template;

            return {
                editing: isEditing,
                valueText: valueText,
                oldText: oldText
            };
        },
        computed:{
            getTemplate() {
                let template = this.template;
                let valueText = this.valueText;
                return template ? template : Vue.extend({template: '<span>'+ valueText + '</span>'});
            }
        },
        methods: {
            handleEditing(e) {
                if (this.disabled) {
                    return false;
                }
                this.isEscKey = false;
                this.isEnterKey = false;
                this.editing = true;

                this.$nextTick(function () {
                    let inputNode = this.$el.getElementsByTagName("input")[0];
                    inputNode && inputNode.focus();
                })
            },
            handleBlur(e) {
                if (this.disabled || this.isEscKey || this.isEnterKey) {
                    return;
                }
                this.setText(e.target.value.trim());
            },
            handleKeydown(e) {
                switch (e.keyCode) {
                    case 27:
                        this.isEscKey = true;
                        this.editing = false;
                        break;
                    case 13:
                        this.isEnterKey = true;
                        this.setText(e.target.value.trim());
                        break;
                }
            },
            setText(text) {
                let validate = this.validate;
                let valid = true;
                let required = this.required;

                // 验证输入合法性
                if (required && !text) {
                    valid = false;
                } else if (( (required && text) || (!required && text) ) && validate) {
                    if (_.isFunction(validate)) {
                        valid = validate(text);
                    } else if (_.isRegExp(validate)) {
                        valid = validate.test(text);
                    } else if (_.isString(validate)) {
                        valid = (new RegExp(validate)).test(text);
                    }
                }

                if (!valid) {
                    this.editing = (!required && !text);
                    this.valueText = this.oldText;
                    this.onError(text);
                    this.$emit('error', text);
                }else {
                    this.oldText = this.text;
                    this.editing = (!required && !text);
                    this.valueText = text;

                    if(this.oldText !== text) {
                        this.$emit('changed', text, this.oldText);
                    }
                }

            }

        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ks-editable
        position: relative
        display: inline-block
        vertical-align: middle
        //width: 100px
        .isEditing
            display: inline-block
        .icon-edit-20
            font-size: 16px
            float: right
            cursor: pointer
            margin: 6px 0 0 8px
            display: none
        &:hover
            .icon-edit-20
                display: inline-block
        .ks-editable-content
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            line-height: 29px
            float: left
        &.editing
            .ks-editable-content
                line-height: inherit
        input
            width: 100%
            box-sizing: border-box
            padding: 6px 12px

        .ks-editable-disabled
            color: #9e9e9e

</style>
