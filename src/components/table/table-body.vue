<template>
    <table cellspacing="0" cellpadding="0" border="0" :style="styleObject">
        <colgroup>
            <col v-for="(column, index) in columns" :width="setCellWidth(column, index, false)">
        </colgroup>
        <tbody :class="[prefixCls + '-tbody']">
            <tr
                v-for="(row, index) in data"
                :key="row"
                :class="rowClasses(row._index)"
                @mouseenter.stop="handleMouseIn(row._index)"
                @mouseleave.stop="handleMouseOut(row._index)"
                @click.stop="clickCurrentRow(row._index)"
                @dblclick.stop="dblclickCurrentRow(row._index)">
                <td v-for="column in columns" :class="alignCls(column, row)">
                    <Cell
                        :fixed="fixed"
                        :prefix-cls="prefixCls"
                        :row="row"
                        :column="column"
                        :natural-index="index"
                        :index="row._index"
                        :checked="rowChecked(row._index)"
                        :disabled="rowDisabled(row._index)"
                        ></Cell>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    // todo :key="row"
    import Cell from './cell.vue';
    import Mixin from './mixin';

    export default {
        name: 'TableBody',
        mixins: [ Mixin ],
        components: { Cell },
        props: {
            styleObject: Object,
            columns: Array,
            data: Array,    // rebuildData
            objData: Object,
            columnsWidth: Object,
            fixed: {
                type: [Boolean, String],
                default: false
            }
        },
        data() {
            return {
                prefixCls: 'ks-table'
            }
        },
        methods: {
            rowClasses (_index) {
                return [
                    `${this.prefixCls}-row`,
                    this.rowClsName(_index),
                    {
                        [`${this.prefixCls}-row-highlight`]: this.objData[_index] && this.objData[_index]._isHighlight,
                        [`${this.prefixCls}-row-hover`]: this.objData[_index] && this.objData[_index]._isHover
                    }
                ];
            },
            rowChecked (_index) {
                return this.objData[_index] && this.objData[_index]._isChecked;
            },
            rowDisabled(_index){
                return this.objData[_index] && this.objData[_index]._isDisabled;
            },
            rowClsName (_index) {
                return this.$parent.rowClassName(this.objData[_index], _index);
            },
            handleMouseIn (_index) {
                this.$parent.handleMouseIn(_index);
            },
            handleMouseOut (_index) {
                this.$parent.handleMouseOut(_index);
            },
            clickCurrentRow (_index) {
                this.$parent.clickCurrentRow(_index);
            },
            dblclickCurrentRow (_index) {
                this.$parent.dblclickCurrentRow(_index);
            }
        }
    };
</script>
