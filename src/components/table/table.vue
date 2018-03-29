<template>
    <div :class="wrapClasses" :style="styles">
        <div class="ks-table">
            <div class="ks-table-title" v-if="showSlotHeader" ref="title"><slot name="header"></slot></div>
            <div class="ks-table-header" v-if="showHeader" ref="header" @mousewheel="handleMouseWheel">
                <table-head
                    :styleObject="tableStyle"
                    :columns="cloneColumns"
                    :obj-data="objData"
                    :columns-width="columnsWidth"
                    :data="rebuildData"></table-head>
            </div>
            <div class="ks-table-body" :style="bodyStyle" ref="body" @scroll="handleBodyScroll"
                v-show="!((!!localeNoDataText && (!data || data.length === 0)) || (!!localeNoFilteredDataText && (!rebuildData || rebuildData.length === 0)))">
                <table-body
                    ref="tbody"
                    :styleObject="tableStyle"
                    :columns="cloneColumns"
                    :data="rebuildData"
                    :columns-width="columnsWidth"
                    :obj-data="objData"></table-body>
            </div>
            <div
                class="ks-table-tip"
                v-show="((!!localeNoDataText && (!data || data.length === 0)) || (!!localeNoFilteredDataText && (!rebuildData || rebuildData.length === 0)))">
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td :style="{ 'height': bodyStyle.height }">
                                <span v-html="localeNoDataText" v-if="!data || data.length === 0"></span>
                                <span v-html="localeNoFilteredDataText" v-else></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="ks-table-fixed" :style="fixedTableStyle" v-if="isLeftFixed">
                <div class="ks-table-fixed-header" v-if="showHeader">
                    <table-head
                        fixed="left"
                        :styleObject="fixedTableStyle"
                        :columns="leftFixedColumns"
                        :obj-data="objData"
                        :columns-width.sync="columnsWidth"
                        :data="rebuildData"></table-head>
                </div>
                <div class="ks-table-fixed-body" :style="fixedBodyStyle" ref="fixedBody">
                    <table-body
                        fixed="left"
                        :styleObject="fixedTableStyle"
                        :columns="leftFixedColumns"
                        :data="rebuildData"
                        :columns-width="columnsWidth"
                        :obj-data="objData"></table-body>
                </div>
            </div>
            <div class="ks-table-fixed-right" :style="fixedRightTableStyle" v-if="isRightFixed">
                <div class="ks-table-fixed-header" v-if="showHeader">
                    <table-head
                        fixed="right"
                        :styleObject="fixedRightTableStyle"
                        :columns="rightFixedColumns"
                        :obj-data="objData"
                        :columns-width="columnsWidth"
                        :data="rebuildData"></table-head>
                </div>
                <div class="ks-table-fixed-body" :style="fixedBodyStyle" ref="fixedRightBody">
                    <table-body
                        fixed="right"
                        :styleObject="fixedRightTableStyle"
                        :columns="rightFixedColumns"
                        :data="rebuildData"
                        :columns-width="columnsWidth"
                        :obj-data="objData"></table-body>
                </div>
            </div>
            <div class="ks-table-footer" v-if="showSlotFooter" ref="footer"><slot name="footer"></slot></div>
        </div>
    </div>
</template>
<script>
    import tableHead from './table-head.vue';
    import tableBody from './table-body.vue';
    import {Util} from '../../utils/index';
    import Csv from './csv';
    import ExportCsv from './export-csv';

    //const prefixCls = 'ks-table';

    export default {
        name: 'KSCTable',
        components: { tableHead, tableBody },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            columns: {
                type: Array,
                default () {
                    return [];
                }
            },
            size: {
                validator (value) {
                    return Util.oneOf(value, ['small', 'large', 'default']);
                }
            },
            width: {
                type: [Number, String]
            },
            height: {
                type: [Number, String]
            },
            stripe: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean,
                default: false
            },
            showHeader: {
                type: Boolean,
                default: true
            },
            highlightRow: {
                type: Boolean,
                default: false
            },
            rowClassName: {
                type: Function,
                default () {
                    return '';
                }
            },
            context: {
                type: Object
            },
            noDataText: {
                type: String
            },
            noFilteredDataText: {
                type: String
            }
        },
        data () {
            return {
                prefixCls: 'ks-table',
                ready: false,
                tableWidth: 0,
                columnsWidth: {},
                compiledUids: [],
                objData: this.makeObjData(),     // checkbox or highlight-row
                rebuildData: [],    // for sort or filter
                cloneColumns: this.makeColumns(),
                showSlotHeader: true,
                showSlotFooter: true,
                bodyHeight: 0,
                bodyRealHeight: 0,
                scrollBarWidth: Util.getScrollBarSize(),
                currentContext: this.context,
                cloneData: Util.deepCopy(this.data)    // when Cell has a button to delete row data, clickCurrentRow will throw an error, so clone a data
            };
        },
        computed: {
            localeNoDataText () {
                if (this.noDataText === undefined) {
                    return '暂无数据';
                } else {
                    return this.noDataText;
                }
            },
            localeNoFilteredDataText () {
                if (this.noFilteredDataText === undefined) {
                    return "暂无数据";
                } else {
                    return this.noFilteredDataText;
                }
            },
            wrapClasses () {
                return [
                    `${this.prefixCls}-wrapper`,
                    {
                        [`${this.pprefixCls}-hide`]: !this.ready,
                        [`${this.pprefixCls}-with-header`]: this.showSlotHeader,
                        [`${this.pprefixCls}-with-footer`]: this.showSlotFooter
                    }
                ];
            },
            classes () {
                return [
                    `${this.pprefixCls}`,
                    {
                        [`${this.pprefixCls}-${this.size}`]: !!this.size,
                        [`${this.pprefixCls}-border`]: this.border,
                        [`${this.pprefixCls}-stripe`]: this.stripe,
                        [`${this.pprefixCls}-with-fixed-top`]: !!this.height
                    }
                ];
            },
            styles () {
                let style = {};
                if (this.height) {
                    const height = (this.isLeftFixed || this.isRightFixed) ? parseInt(this.height) + this.scrollBarWidth : parseInt(this.height);
                    style.height = `${height}px`;
                }
                if (this.width) style.width = `${this.width}px`;
                return style;
            },
            tableStyle () {
                let style = {};
                if (this.tableWidth !== 0) {
                    let width = '';
                    if (this.bodyHeight === 0) {
                        width = this.tableWidth;
                    } else {
                        if (this.bodyHeight > this.bodyRealHeight) {
                            width = this.tableWidth;
                        } else {
                            width = this.tableWidth - this.scrollBarWidth;
                        }
                    }
//                    const width = this.bodyHeight === 0 ? this.tableWidth : this.tableWidth - this.scrollBarWidth;
                    style.width = `${width}px`;
                }
                return style;
            },
            fixedTableStyle () {
                let style = {};
                let width = 0;
                this.leftFixedColumns.forEach((col) => {
                    if (col.fixed && col.fixed === 'left') width += col._width;
                });
                style.width = `${width}px`;
                return style;
            },
            fixedRightTableStyle () {
                let style = {};
                let width = 0;
                this.rightFixedColumns.forEach((col) => {
                    if (col.fixed && col.fixed === 'right') width += col._width;
                });
                width += this.scrollBarWidth;
                style.width = `${width}px`;
                return style;
            },
            bodyStyle () {
                let style = {};
                if (this.bodyHeight !== 0) {
                    // add a height to resolve scroll bug when browser has a scrollBar in fixed type and height prop
                    const height = (this.isLeftFixed || this.isRightFixed) ? this.bodyHeight + this.scrollBarWidth : this.bodyHeight;
                    style.height = `${height}px`;
                }
                return style;
            },
            fixedBodyStyle () {
                let style = {};
                if (this.bodyHeight !== 0) {
                    let height = this.bodyHeight + this.scrollBarWidth - 1;

                    if (this.width && this.width < this.tableWidth){
                        height = this.bodyHeight;
                    }
//                    style.height = this.scrollBarWidth > 0 ? `${this.bodyHeight}px` : `${this.bodyHeight - 1}px`;
                    style.height = this.scrollBarWidth > 0 ? `${height}px` : `${height - 1}px`;
                }
                return style;
            },
            leftFixedColumns () {
                let left = [];
                let other = [];
                this.cloneColumns.forEach((col) => {
                    if (col.fixed && col.fixed === 'left') {
                        left.push(col);
                    } else {
                        other.push(col);
                    }
                });
                return left.concat(other);
            },
            rightFixedColumns () {
                let right = [];
                let other = [];
                this.cloneColumns.forEach((col) => {
                    if (col.fixed && col.fixed === 'right') {
                        right.push(col);
                    } else {
                        other.push(col);
                    }
                });
                return right.concat(other);
            },
            isLeftFixed () {
                return this.columns.some(col => col.fixed && col.fixed === 'left');
            },
            isRightFixed () {
                return this.columns.some(col => col.fixed && col.fixed === 'right');
            }
        },
        methods: {
            rowClsName (index) {
                return this.rowClassName(this.data[index], index);
            },
            handleResize () {
                this.$nextTick(() => {
                    const allWidth = !this.columns.some(cell => !cell.width);    // each column set a width
                    if (allWidth) {
                        this.tableWidth = this.columns.map(cell => cell.width).reduce((a, b) => a + b);
                    } else {
                        this.tableWidth = parseInt(Util.getStyle(this.$el, 'width')) - 1;
                    }
                    this.columnsWidth = {};
                    this.$nextTick(() => {
                        let columnsWidth = {};
                        let autoWidthIndex = -1;
                        if (allWidth) autoWidthIndex = this.cloneColumns.findIndex(cell => !cell.width);//todo 这行可能有问题

                        if (this.data.length) {
                            const $td = this.$refs.tbody.$el.querySelectorAll('tbody tr')[0].querySelectorAll('td');
                            for (let i = 0; i < $td.length; i++) {    // can not use forEach in Firefox
                                const column = this.cloneColumns[i];

                                let width = parseInt(Util.getStyle($td[i], 'width'));
                                if (i === autoWidthIndex) {
                                    width = parseInt(Util.getStyle($td[i], 'width')) - 1;
                                }
                                if (column.width) width = column.width;

                                this.cloneColumns[i]._width = width;

                                columnsWidth[column._index] = {
                                    width: width
                                };
                            }
                            this.columnsWidth = columnsWidth;
                        }
                    });
                    // get table real height,for fixed when set height prop,but height < table's height,show scrollBarWidth
                    this.bodyRealHeight = parseInt(Util.getStyle(this.$refs.tbody.$el, 'height'));
                });
            },
            handleMouseIn (_index) {
                if (this.objData[_index]._isHover) return;
                this.objData[_index]._isHover = true;
            },
            handleMouseOut (_index) {
                this.objData[_index]._isHover = false;
            },
            highlightCurrentRow (_index) {
                if (!this.highlightRow || this.objData[_index]._isHighlight) return;

                let oldIndex = -1;
                for (let i in this.objData) {
                    if (this.objData[i]._isHighlight) {
                        oldIndex = parseInt(i);
                        this.objData[i]._isHighlight = false;
                    }
                }
                this.objData[_index]._isHighlight = true;
                const oldData = oldIndex < 0 ? null : JSON.parse(JSON.stringify(this.cloneData[oldIndex]));
                this.$emit('on-current-change', JSON.parse(JSON.stringify(this.cloneData[_index])), oldData);
            },
            clickCurrentRow (_index) {
                this.highlightCurrentRow (_index);
                this.$emit('on-row-click', JSON.parse(JSON.stringify(this.cloneData[_index])));
            },
            dblclickCurrentRow (_index) {
                this.highlightCurrentRow (_index);
                this.$emit('on-row-dblclick', JSON.parse(JSON.stringify(this.cloneData[_index])));
            },
            getSelection () {
                let selectionIndexes = [];
                for (let i in this.objData) {
                    if (this.objData[i]._isChecked) selectionIndexes.push(parseInt(i));
                }
                return JSON.parse(JSON.stringify(this.data.filter((data, index) => selectionIndexes.indexOf(index) > -1)));
            },
            toggleSelect (_index) {
                let data = {};

                for (let i in this.objData) {
                    if (parseInt(i) === _index) {
                        data = this.objData[i];
                    }
                }
                const status = !data._isChecked;

                this.objData[_index]._isChecked = status;

                const selection = this.getSelection();
                if (status) {
                    this.$emit('on-select', selection, JSON.parse(JSON.stringify(this.data[_index])));
                }
                this.$emit('on-selection-change', selection);
            },
            selectAll (status) {
                for(const data of this.rebuildData){
                    if(this.objData[data._index]._isDisabled){
                        continue;
                    }else{
                        this.objData[data._index]._isChecked = status;
                    }
                }
                const selection = this.getSelection();
                if (status) {
                    this.$emit('on-select-all', selection);
                }
                this.$emit('on-selection-change', selection);
            },
            fixedHeader () {
                if (this.height) {
                    this.$nextTick(() => {
                        const titleHeight = parseInt(Util.getStyle(this.$refs.title, 'height')) || 0;
                        const headerHeight = parseInt(Util.getStyle(this.$refs.header, 'height')) || 0;
                        const footerHeight = parseInt(Util.getStyle(this.$refs.footer, 'height')) || 0;
                        this.bodyHeight = this.height - titleHeight - headerHeight - footerHeight;
                    });
                } else {
                    this.bodyHeight = 0;
                }
            },
            hideColumnFilter () {
                this.cloneColumns.forEach((col) => col._filterVisible = false);
            },
            handleBodyScroll (event) {
                if (this.showHeader) this.$refs.header.scrollLeft = event.target.scrollLeft;
                if (this.isLeftFixed) this.$refs.fixedBody.scrollTop = event.target.scrollTop;
                if (this.isRightFixed) this.$refs.fixedRightBody.scrollTop = event.target.scrollTop;
                this.hideColumnFilter();
            },
            handleMouseWheel (event) {
                const deltaX = event.deltaX;
                const $body = this.$refs.body;

                if (deltaX > 0) {
                    $body.scrollLeft = $body.scrollLeft + 10;
                } else {
                    $body.scrollLeft = $body.scrollLeft - 10;
                }
            },
            sortData (data, type, index) {
                const key = this.cloneColumns[index].key;
                data.sort((a, b) => {
                    if (this.cloneColumns[index].sortMethod) {
                        return this.cloneColumns[index].sortMethod(a[key], b[key], type);
                    } else {
                        if (type === 'asc') {
                            return a[key] > b[key] ? 1 : -1;
                        } else if (type === 'desc') {
                            return a[key] < b[key] ? 1 : -1;
                        }
                    }
                });
                return data;
            },
            handleSort (index, type) {
                this.cloneColumns.forEach((col) => col._sortType = 'normal');

                const key = this.cloneColumns[index].key;
                if (this.cloneColumns[index].sortable !== 'custom') {    // custom is for remote sort
                    if (type === 'normal') {
                        this.rebuildData = this.makeDataWithFilter();
                    } else {
                        this.rebuildData = this.sortData(this.rebuildData, type, index);
                    }
                }
                this.cloneColumns[index]._sortType = type;

                this.$emit('on-sort-change', {
                    column: JSON.parse(JSON.stringify(this.columns[this.cloneColumns[index]._index])),
                    key: key,
                    order: type
                });
            },
            handleFilterHide (index) {    // clear checked that not filter now
                if (!this.cloneColumns[index]._isFiltered) this.cloneColumns[index]._filterChecked = [];
            },
            filterData (data, column) {
                return data.filter((row) => {
                    //如果定义了远程过滤方法则忽略此方法
                    if (typeof column.filterRemote === 'function') return true;

                    let status = !column._filterChecked.length;
                    for (let i = 0; i < column._filterChecked.length; i++) {
                        status = column.filterMethod(column._filterChecked[i], row);
                        if (status) break;
                    }
                    return status;
                });
            },
            filterOtherData (data, index) {
                let column = this.cloneColumns[index];
                if (typeof column.filterRemote === 'function') {
                    column.filterRemote.call(this.$parent, column._filterChecked, column.key, column);
                }

                this.cloneColumns.forEach((col, colIndex) => {
                    if (colIndex !== index) {
                        data = this.filterData(data, col);
                    }
                });
                return data;
            },
            handleFilter (index) {
                const column = this.cloneColumns[index];
                let filterData = this.makeDataWithSort();

                // filter others first, after filter this column
                filterData = this.filterOtherData(filterData, index);
                this.rebuildData = this.filterData(filterData, column);

                this.cloneColumns[index]._isFiltered = true;
                this.cloneColumns[index]._filterVisible = false;
            },
            handleFilterSelect (index, value) {
                this.cloneColumns[index]._filterChecked = [value];
                this.handleFilter(index);
            },
            handleFilterReset (index) {
                this.cloneColumns[index]._isFiltered = false;
                this.cloneColumns[index]._filterVisible = false;
                this.cloneColumns[index]._filterChecked = [];

                let filterData = this.makeDataWithSort();
                filterData = this.filterOtherData(filterData, index);
                this.rebuildData = filterData;
            },
            makeData () {
                let data = Util.deepCopy(this.data);
                data.forEach((row, index) => row._index = index);
                return data;
            },
            makeDataWithSort () {
                let data = this.makeData();
                let sortType = 'normal';
                let sortIndex = -1;
                let isCustom = false;

                for (let i = 0; i < this.cloneColumns.length; i++) {
                    if (this.cloneColumns[i]._sortType !== 'normal') {
                        sortType = this.cloneColumns[i]._sortType;
                        sortIndex = i;
                        isCustom = this.cloneColumns[i].sortable === 'custom';
                        break;
                    }
                }
                if (sortType !== 'normal' && !isCustom) data =  this.sortData(data, sortType, sortIndex);
                return data;
            },
            makeDataWithFilter () {
                let data = this.makeData();
                this.cloneColumns.forEach(col => data = this.filterData(data, col));
                return data;
            },
            makeDataWithSortAndFilter () {
                let data = this.makeDataWithSort();
                this.cloneColumns.forEach(col => data = this.filterData(data, col));
                return data;
            },
            makeObjData () {
                let data = {};
                this.data.forEach((row, index) => {
                    const newRow = Util.deepCopy(row);// todo 直接替换
                    newRow._isHover = false;
                    if(newRow._disabled){
                        newRow._isDisabled = newRow._disabled;
                    }else{
                        newRow._isDisabled = false;
                    }
                    if (newRow._checked) {
                        newRow._isChecked = newRow._checked;
                    } else {
                        newRow._isChecked = false;
                    }
                    if (newRow._highlight) {
                        newRow._isHighlight = newRow._highlight;
                    } else {
                        newRow._isHighlight = false;
                    }
                    data[index] = newRow;
                });
                return data;
            },
            makeColumns () {
                let columns = Util.deepCopy(this.columns);
                let left = [];
                let right = [];
                let center = [];

                columns.forEach((column, index) => {
                    column._index = index;
                    column._width = column.width ? column.width : '';    // update in handleResize()
                    column._sortType = 'normal';
                    column._filterVisible = false;
                    column._isFiltered = false;
                    column._filterChecked = [];

                    if ('filterMultiple' in column) {
                        column._filterMultiple = column.filterMultiple;
                    } else {
                        column._filterMultiple = true;
                    }
                    if ('filteredValue' in column) {
                        column._filterChecked = column.filteredValue;
                        column._isFiltered = true;
                    }

                    if (column.fixed && column.fixed === 'left') {
                        left.push(column);
                    } else if (column.fixed && column.fixed === 'right') {
                        right.push(column);
                    } else {
                        center.push(column);
                    }
                });
                return left.concat(center).concat(right);
            },
            exportCsv (params) {
                if (params.filename) {
                    if (params.filename.indexOf('.csv') === -1) {
                        params.filename += '.csv';
                    }
                } else {
                    params.filename = 'table.csv';
                }

                let columns = [];
                let datas = [];
                if (params.columns && params.data) {
                    columns = params.columns;
                    datas = params.data;
                } else {
                    columns = this.columns;
                    if (!('original' in params)) params.original = true;
                    datas = params.original ? this.data : this.rebuildData;
                }

                let noHeader = false;
                if ('noHeader' in params) noHeader = params.noHeader;

                const data = Csv(columns, datas, ',', noHeader);
                ExportCsv.download(params.filename, data);
            }
        },
        created () {
            if (!this.context) this.currentContext = this.$parent;
            this.showSlotHeader = this.$slots.header !== undefined;
            this.showSlotFooter = this.$slots.footer !== undefined;
            this.rebuildData = this.makeDataWithSortAndFilter();
        },
        mounted () {
            this.handleResize();
            this.fixedHeader();
            this.$nextTick(() => this.ready = true);
            window.addEventListener('resize', this.handleResize, false);
            this.$on('on-visible-change', (val) => {
                if (val) {
                    this.handleResize();
                    this.fixedHeader();
                }
            });
        },
        beforeDestroy () {
            window.removeEventListener('resize', this.handleResize, false);
        },
        watch: {
            data: {
                handler () {
                    this.objData = this.makeObjData();
                    this.rebuildData = this.makeDataWithSortAndFilter();
                    this.handleResize();
                    // here will trigger before clickCurrentRow, so use async
                    setTimeout(() => {
                        this.cloneData = Util.deepCopy(this.data);
                    }, 0);
                },
                deep: true
            },
            columns: {
                handler () {
                    // todo 这里有性能问题，可能是左右固定计算属性影响的
                    this.cloneColumns = this.makeColumns();
                    this.rebuildData = this.makeDataWithSortAndFilter();
                    this.handleResize();
                },
                deep: true
            },
            height () {
                this.fixedHeader();
            }
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ks-table-wrapper{
        position: relative;
        border-bottom: 0;
        border-right: 0;
    }
    .ks-table
        th
            padding: 0

        .ks-table-hide{
            opacity: 0;
        }

        .ks-table:before{
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: @border-color-base;
            z-index: 1;
        }

        .ks-table:after{
            content: '';
            width: 1px;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            background-color: @border-color-base;
            z-index: 3;
        }

        .ks-table-with-header{
            //border-radius: @border-radius-base @border-radius-base 0 0;
        }

        .ks-table-with-footer{
            //border: 1px solid @border-color-base;
            //border-radius: 0 0 @border-radius-base @border-radius-base;
        }

        .ks-table-with-header.ks-table-with-footer{
            //border-radius: @border-radius-base;
        }

        .ks-table-title, .ks-table-footer{
            height: 48px;
            line-height: 48px;
            border-bottom: 1px solid @border-color-split;
        }
        .ks-table-footer{
            border-bottom: none;
        }

        .ks-table-header{
            overflow: hidden;
        }
        .ks-table-body{
            overflow: auto;
            //position: relative;
        }

        .ks-table-with-fixed-top, .ks-table-with-footer{
            .ks-table-footer{
                border-top: 1px solid @border-color-base;
            }
            tbody tr:last-child td{
                border-bottom: none;
            }
        }

        th, td
        {
            min-width: 0;
            padding: 0;
            height: 48px;
            box-sizing: border-box;
            text-align: left;
            text-overflow: ellipsis;
            vertical-align: middle;
            //position: relative;
            border-bottom: 1px solid @border-color-split;
        }

        th {
            height: 40px;
            white-space: nowrap;
            overflow: hidden;
        }
        td{
            background-color: #fff;
            transition: background-color @transition-time @ease-in-out;
        }

        th  > .ks-table-column,
        td > .ks-table-column
        {
            .ks-table-left{
                text-align: left;
            }
            .ks-table-center{
                text-align: center;
            }
            .ks-table-right{
                text-align: right;
            }
        }

        .ks-table table{
            //width: 100%;
            table-layout: fixed;
        }
        .ks-table-border{
            th,td{
                border-right: 1px solid @border-color-split;
            }
        }
        .ks-table-cell{
            padding-left: 18px;
            padding-right: 18px;
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
        th > .ks-table-cell{
            display: inline-block;
            //position: relative;
            word-wrap: normal;
            vertical-align: middle;
        }

        .ks-table-stripe , .ks-table-body,
        .ks-table-stripe, .ks-table-fixed-body
        {
            tr:nth-child(2n) {
                td{
                    background-color: @table-td-stripe-bg;
                }
            }
        }

        tr > .ks-table-row-hover{
            td{
                background-color: @table-td-hover-bg;
            }
        }

        .ks-table-large {
            font-size: @font-size-base;
            th{
                height: 48px;
            }
            td{
                height: 60px;
            }
            .ks-table-title, .ks-table-footer{
                height: 60px;
                line-height: 60px;
            }
        }

        .ks-table-small{
            th{
                height: 32px;
            }
            td{
                height: 40px;
            }
            .ks-table-title, .ks-table-footer{
                height: 40px;
                line-height: 40px;
            }
        }

        .ks-table-row-highlight{
            
        }


        .ks-table-fixed, .ks-table-fixed-right{
            position: absolute;
            top: 0;
            left: 0;
            box-shadow: 2px 0 6px -2px rgba(0, 0, 0, 0.2);

            .ks-table::before {
                content: '';
                width: 100%;
                height: 1px;
                background-color: @border-color-base;
                position: absolute;
                left: 0;
                bottom: 0;
                z-index: 4;
            }
        }
        .ks-table-fixed-right{
            top: 0;
            left: auto;
            right: 0;
            box-shadow: -2px 0 6px -2px rgba(0, 0, 0, 0.2);
        }
        .ks-table-fixed-header{
            overflow: hidden;
        }
        .ks-table-fixed-body{
            overflow: hidden;
            position: relative;
            z-index: 3;
        }

        .ks-table-fixed-shadow {
            width: 1px;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            box-shadow: @shadow-right;
            overflow: hidden;
            z-index: 1;
        }

        .ks-table-sort{
            //.sortable();
        }
        .ks-table-filter{
            display: inline-block;
            cursor: pointer;
            position: relative;

            i{
                color: @btn-disable-color;
                transition: color @transition-time @ease-in-out;
                &:hover{
                    color: inherit;
                }
            }
            .ks-table-list{
                padding: 8px 0 0;
                .ks-table-item{
                    padding: 0 12px 8px;
                    label {
                        display: block;
                        margin-bottom: 4px;

                        & > span{
                            margin-right: 4px;
                        }
                    }
                }
                ul{
                    padding-bottom: 8px;
                }
            }
            .ks-table-footer{
                padding: 4px;
                border-top: 1px solid @border-color-split;
            }
        }
        .ivu-poptip-popper{
            min-width: 0;
            text-align: left;
        }
        thead .ivu-poptip-popper{
            .ivu-poptip-body{
                padding: 0;
            }
        }

        .ks-table-tip {
            table {
                width: 100%;

                td {
                text-align: center;
                }
            }
        }
</style>