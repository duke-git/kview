<template>
    <table cellspacing="0" cellpadding="0" border="0" :style="styles" class="ks-table">
        <colgroup>
            <col v-for="(column, index) in columns" :width="setCellWidth(column, index, true)">
        </colgroup>
        <thead>
            <tr>
                <th v-for="(column, index) in columns" :class="alignCls(column)">
                    <div :class="cellClasses(column)">
                        <template v-if="column.type === 'selection'"><KSCCheckbox :checked="isSelectAll" @change="selectAll"></KSCCheckbox></template>
                        <template v-else>
                            <span v-html="renderHeader(column, index)"></span>
                            <div class="ks-ctrl-triangle" v-if="column.sortable">
                                <div class="ks-ctrl-triangle-up-done" :class="{on: column._sortType === 'asc'}" @click="handleSort(index, 'asc')"></div>
                                <div class="ks-ctrl-triangle-down" :class="{on: column._sortType === 'desc'}" @click="handleSort(index, 'desc')"></div>
                            </div>
                        </template>
                    </div>
                </th>
            </tr>
        </thead>
    </table>
</template>
<script>
    import KSCCheckboxGroup from '../checkbox-group/checkbox-group.vue';
    import KSCCheckbox from '../checkbox/checkbox.vue';
    import KSCDropdown from '../dropdown/dropdown.vue';
    import KSCButton from '../button/button.vue';
    import Mixin from './mixin';

    export default {
        name: 'tableHead',
        mixins: [ Mixin ],
        components: { KSCCheckboxGroup, KSCCheckbox, KSCDropdown, KSCButton },
        props: {
            styleObject: Object,
            columns: Array,
            objData: Object,
            data: Array,    // rebuildData
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
        computed: {
            styles () {
                const style = Object.assign({}, this.styleObject);
                const width = this.$parent.bodyHeight === 0 ? parseInt(this.styleObject.width) : parseInt(this.styleObject.width) + this.$parent.scrollBarWidth;
                style.width = `${width}px`;
                return style;
            },
            isSelectAll () {
                let isSelectAll = true;
                if (!this.data.length) isSelectAll = false;
                for (let i = 0; i < this.data.length; i++) {
                    if (!this.objData[this.data[i]._index]._isChecked && !this.objData[this.data[i]._index]._isDisabled) {
                        isSelectAll = false;
                        break;
                    }
                }

                return isSelectAll;
            }
        },
        methods: {
            cellClasses (column) {
                return [
                    `${this.prefixCls}-cell`,
                    {
                        [`${this.prefixCls}-hidden`]: !this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right')
                    }
                ];
            },
            itemClasses (column, item) {
                return [
                    `${this.prefixCls}-filter-select-item`,
                    {
                        [`${this.prefixCls}-filter-select-item-selected`]: column._filterChecked[0] === item.value
                    }
                ];
            },
            itemAllClasses (column) {
                return [
                    `${this.prefixCls}-filter-select-item`,
                    {
                        [`${this.prefixCls}-filter-select-item-selected`]: !column._filterChecked.length
                    }
                ];
            },
            renderHeader (column, $index) {
                if ('renderHeader' in this.columns[$index]) {
                    return this.columns[$index].renderHeader(column, $index);
                } else {
                    return column.title || '#';
                }
            },
            selectAll () {
                const status = !this.isSelectAll;
                this.$parent.selectAll(status);
            },
            handleSort (index, type) {
                if (this.columns[index]._sortType === type) {
                    type = 'normal';
                }
                this.$parent.handleSort(index, type);
            },
            handleFilter (index) {
                this.$parent.handleFilter(index);
            },
            handleSelect (index, value) {
                this.$parent.handleFilterSelect(index, value);
            },
            handleReset (index) {
                this.$parent.handleFilterReset(index);
            },
            handleFilterHide (index) {
                this.$parent.handleFilterHide(index);
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ks-table 
        th
            padding: 6px 0px 5px 0px;
    .ks-table-cell{
        padding-left: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        word-break: break-all;
        box-sizing: border-box;

        .ks-table-ellipsis {
            word-break: keep-all;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .ks-table-hidden{
        visibility: hidden;
    }
    th .ks-table-cell{
        display: inline-block;
        word-wrap: normal;
        vertical-align: middle;
    }
	
</style>