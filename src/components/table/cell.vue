<template>
    <div :class="classes" ref="cell">
        <template v-if="renderType === 'index'">{{naturalIndex + 1}}</template>
        <template v-if="renderType === 'selection'">
            <KSCCheckbox :checked="checked" @change="toggleSelect" :disabled="disabled"></KSCCheckbox>
        </template>
        <template v-if="renderType === 'normal'"><span v-html="row[column.key]"></span></template>
    </div>
</template>
<script>
    import Vue from 'vue';
    import KSCCheckbox from '../checkbox/checkbox.vue';

    export default {
        name: 'TableCell',
        components: { KSCCheckbox },
        props: {
            row: Object,
            column: Object,
            naturalIndex: Number,    // index of rebuildData
            index: Number,           // _index of data
            checked: Boolean,
            disabled: Boolean,
            fixed: {
                type: [Boolean, String],
                default: false
            }
        },
        data () {
            return {
                prefixCls: 'ks-table',
                renderType: '',
                uid: -1,
                context: this.$parent.$parent.currentContext
            };
        },
        computed: {
            classes () {
                return [
                    `${this.prefixCls}-cell`,
                    {
                        [`${this.prefixCls}-hidden`]: !this.fixed && this.column.fixed && (this.column.fixed === 'left' || this.column.fixed === 'right'),
                        [`${this.prefixCls}-cell-ellipsis`]: this.column.ellipsis || false
                    }
                ];
            }
        },
        methods: {
            compile () {
                if (this.column.render) {
                    // 兼容真 Render，后期废弃旧用法
                    let isRealRender = false;
                    try {
                        this.column.render(this.row, this.column, this.index);
                    }
                    catch (err) {
                        isRealRender = true;
                    }

                    if (isRealRender) {
                        const component = new Vue({
                            functional: true,
                            render: (h) => {
                                return this.column.render(h, this.row, this.column, this.index);
                            }
                        });
                        const Cell = component.$mount();
                        this.$refs.cell.appendChild(Cell.$el);
                    } else {
                        const $parent = this.context;
                        const template = this.column.render(this.row, this.column, this.index);
                        const cell = document.createElement('div');
                        cell.innerHTML = template;

                        this.$el.innerHTML = '';
                        let methods = {};
                        Object.keys($parent).forEach(key => {
                            const func = $parent[key];
                            if (typeof(func) === 'function' && (func.name  === 'boundFn' || func.name === 'n')) {
                                methods[key] = func;
                            }
                        });
                        const res = Vue.compile(cell.outerHTML);
                        // 获取父组件使用的局部 component
                        const components = {};
                        Object.getOwnPropertyNames($parent.$options.components).forEach(item => {
                            components[item] = $parent.$options.components[item];
                        });

                        const component = new Vue({
                            render: res.render,
                            staticRenderFns: res.staticRenderFns,
                            methods: methods,
                            data () {
                                return $parent._data;
                            },
                            components: components
                        });
                        component.row = this.row;
                        component.column = this.column;

                        const Cell = component.$mount();
                        this.$refs.cell.appendChild(Cell.$el);
                    }
                }
            },
            destroy () {

            },
            toggleSelect () {
                this.$parent.$parent.toggleSelect(this.index);
            }
        },
        created () {
            if (this.column.type === 'index') {
                this.renderType = 'index';
            } else if (this.column.type === 'selection') {
                this.renderType = 'selection';
            } else if (this.column.render) {
                this.renderType = 'render';
            } else {
                this.renderType = 'normal';
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.compile();
            });
        },
        beforeDestroy () {
            this.destroy();
        },
        watch: {
            naturalIndex () {
                this.destroy();
                this.compile();
            }
        }
    };
</script>
