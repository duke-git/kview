<template>
    <div class="ks-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
import {Util} from '../../utils/index';

export default {
    name: 'KSCCheckboxGroup',
    props: {
            value: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
    data() {
        return {
            currentValue: this.value,
            childrens: []
        };
    },
    mounted () {
        this.updateModel(true);
    },
    methods: {
        updateModel (update) {
            const value = this.value;
            this.childrens = Util.findComponentsDownward(this, 'KSCCheckbox');

            if (this.childrens) {
                this.childrens.forEach(child => {
                    child.model = value;

                    if (update) {
                        child.selected = value.indexOf(child.value) >= 0;
                        child.group = true;
                    }
                });
            }
        },
        change (data) {
            this.currentValue = data;
            this.$emit('input', data);
            this.$emit('change', data);
            // this.dispatch('FormItem', 'on-form-change', data);
        }
    },
    watch: {
        value () {
            this.updateModel(true);
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ks-checkbox-group
    display: block
</style>