<template>
    <label class="ks-checkbox">
        <span class="input-wrap"
            :class="checkboxClass">
            <input
                v-if="group"
                type="checkbox"
                :disabled="disabled"
                :value="value"
                v-model="model"
                @change="handleChange">
            <input v-if="!group"
                type="checkbox" 
                :disabled="disabled" 
                :value="value" 
                :name="name"
                :checked="selected"
                @change="handleChange"/>
        </span>
        <span :class="checkboxLabelClass">
            <slot></slot>
            <span v-if="!$slots.default">{{label}}</span>
        </span>
    </label>
</template>
<script>
import {Util} from '../../utils/index';

export default {
    name: 'KSCCheckbox',
    props: {
        label: {
            type: String,
            required: false,
            default: ''
        },
        value: {
            type: String,
            required: false,
            default: ''
        },
        disabled: Boolean,
        checked: Boolean,
        name: String,
    },
    data () {
        return {
            model: [],
            group: false,
            parent: Util.findComponentUpward(this, 'KSCCheckboxGroup'),
            selected: this.checked
        };
    },
    computed:{
        checkboxClass(){
            const disabled = this.disabled;
            const selected = this.selected;

            return [
                {
                    'ks-checkbox-disabled': disabled && !selected,
                    'ks-checkbox-checked': !disabled && selected,
                    'ks-checkbox-disabled-checked': disabled && selected
                }
            ]
        },
        checkboxLabelClass(){
            const disabled = this.disabled;
            const label = this.label;
            return [
                {
                    'disabled-label': disabled,
                    'ks-checkbox-label': label
                }
            ]
        }
        
    },
    methods: {
        handleChange(e) {
            const checked = event.target.checked;
            if (this.disabled) {
                return false;
            }
            this.selected = checked;
            this.$emit('input', checked);

            if (this.group) {
                this.$parent.change(this.model);
            } else {
                this.$emit('change', e);
            }
        },
        updateModel () {
            this.selected = this.checked;
        }
    },
    watch: {
        checked () {
            this.updateModel();
        }
    },
    mounted () {
        this.parent = Util.findComponentUpward(this, 'KSCCheckboxGroup');
        if (this.parent) this.group = true;
        if (!this.group) {
            this.updateModel();
            //this.showSlot = this.$slots.default !== undefined;
        } else {
            this.parent.updateModel(true);
        }
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ks-checkbox
        margin: 0
        cursor: pointer
        .input-wrap
            display: inline-block
            position: relative
            border: 1px solid #bfcbd9
            border-radius: 3px
            box-sizing: border-box
            width: 14px
            height: 14px
            vertical-align: middle
            input
                width: 14px
                height: 14px
                opacity: 0
        .ks-checkbox-checked
            background-color: #20a0ff
            border-color: #0190fe
            &:after
                content: '\2713'
                position: absolute
                top: 0
                line-height: 14px
                right: 2px
                color: #fff
        .ks-checkbox-disabled
            background-color: #efefef
            cursor: not-allowed
            input
                cursor: not-allowed
        .ks-checkbox-disabled-checked
            background-color: #efefef
            cursor: not-allowed
            &:before
                content: '\2713'
                position: absolute
                top: 0
                line-height: 14px
                right: 2px
                color: #a6a6a6
            input
                cursor: not-allowed

        .ks-checkbox-label
            margin-left: 2px
            margin-right: 4px
        .disabled-label
            color: #a6a6a6
            cursor: not-allowed
	
</style>