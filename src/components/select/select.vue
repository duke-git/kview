<template>
    <div class="ks-select-dropdown">
        <div class="ks-dropdown"
                :class="{'ks-dropdown-open': open}"
                :style="{width: width}"
                @click.stop='handleClick($event)'
                @mouseover='handleMouseover()'
                @mouseout='handleMouseout()'
            >
                <button type="button" class="ks-btn ks-dropdown-text"
                    :class="{'ks-dropdown-disabled': disabled}">
                    {{selectedItem}}
                    <span class="ks-caret"></span>
                </button>
                <div class="ks-dropdown-menu">
                    <div class="ks-form-search" v-if="searchable">
                        <input type="text"
                            placeholder="请输入搜索关键字"
                            v-model="filterLabel"
                            :style="{width: searchInputWidth}"
                        />
                        <i class="icon icon-search-20"></i>
                    </div>
                    <ul>
                        <li v-for="item in filteredOptions"
                            v-bind:key="item.value"
                            :class="{'active-item': currentItem && item.value === currentItem.value}"
                            @click.stop=""
                        >
                            <span v-if="item.disabled">{{item.label}}</span>
                            <a v-else href="javascript:;" @click.stop='selectItem(item)'>{{item.label}}</a>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
</template>
<script>
import {Util} from '../../utils/index';

export default {
    name: 'KSCSelect',
    props: {
        disabled: Boolean,
        trigger: {
            type: String,
            required: false,
            default: 'click'
        },
        searchable: {
            type: Boolean,
            required: false,
            default: false
        },
        options: {
            type: Array,
            required: true,
            default: () => []
        },
        value: '',
        width: {
            type: String,
            required: false,
            default: '232px'
        },
        currentitem: {
            type: Object,
            default: function() {
                return null
            }
        }
    },
    data() {
        return {
            filterLabel: '',
            open: false,
            mouseTimer: null,
            currentItem: this.getCurrentItem(),
            uuid: '',
            currentValue: this.value
        }
    },
    computed: {
        filteredOptions() {
            let self = this;
            return self.options.filter(function (option) {
                if(self.searchable) {
                    return (self.filterLabel ? option.label === self.filterLabel : option.label);
                }else{
                    return option.label;
                }
            })
        },
        selectedItem() {
            let self = this;
            return self.currentItem ? self.currentItem.label : '请选择';
        },
        //todo
        searchInputWidth(){
            let dropdownWidth = parseInt(this.width, 10);
            let searchInputWidth = (dropdownWidth - 20) + 'px';
            return searchInputWidth;
        },
        // currentValue: {
        //     // 动态计算currentValue的值
        //     get:function() {
        //         return this.currentItem.value;
        //     },
        //     set:function(val) {
        //         this.$emit('change', val);
        //     }
        // }
    },
    methods: {
        handleClick(e) {
            if(this.disabled
            || this.trigger !== 'click'
            || e.target.tagName.toLowerCase() === 'input'){
                return;
            }
            this.open = !this.open;

            this.$nextTick(() => {
                $(document).trigger('select-click', [this.uuid]);
            });
        },
        handleMouseover() {
            if (this.disabled || this.trigger !== 'hover') {
                return;
            }
            clearTimeout(this.mouseTimer);
            this.mouseTimer = null;
            this.open = true;
        },
        handleMouseout() {
            let self = this;
            if (self.trigger !== 'hover') {
                return;
            }
            self.mouseTimer && clearTimeout(self.mouseTimer);
            self.mouseTimer = setTimeout(() => {
                self.open = false;
            }, 200);
        },
        selectItem(item) {
            let self = this;
            let currentItem = self.currentItem;
            if(currentItem != item){
                self.$emit('change', item);
                self.$emit('input', item.value); //实现v-model
            }
            self.currentItem = item;
            self.filterLabel = '';
            self.open = false;
        },
        close(e, data) {
            if (data === this.uuid) {
                return;
            }
            this.open = false;
        },
        getCurrentItem() {
            let value = this.value;
            let options = this.options;
            let res = options.filter((option) => {
                if(option.value === value) {
                    return option.label;
                }
            });
            return (res[0] ? res[0] : null);
        },
    },

    created() {
        let self = this;
        self.uuid = Util.getUUID();
        $(document).on('click', self.close).on('select-click',  self.close);
    },
    destroyed() {
        let self = this;
        $(document).off('click', self.close).off('select-click',  self.close);
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.ks-select-dropdown
    display: inline-block
    .ks-dropdown
        box-shadow: none
        margin-left: 0
        margin-right: 0
        .ks-dropdown-text
            white-space: normal
            word-break: break-all
            text-align: left
            margin: 0
        .ks-dropdown-menu
            display: none
            overflow-y: hidden
            max-height: none
            padding-bottom: 0
            ul
                list-style: none
                padding: 0
                margin-bottom: 0
                overflow-x: hidden
                overflow-y: auto
                max-height: 150px
            & > ul > li > a,
            & > ul > li > span,
            & > li > label
                display: block
                padding: 5px 10px 5px 10px
                clear: both
                font-weight: 400
                line-height: 1.42857143
                color: #333
                white-space: nowrap
            & > ul > li > span
                color: #999
                cursor: not-allowed
            .ks-form-search
                display: block
                margin: 0 5px 5px
                overflow: hidden
                height: 30px
                line-height: 30px
                input
                    height: 24px
                    outline: none
                .icon
                    font-size: 16px
                .ks-form-text
                    width: 100%
                    height: 28px
                    padding: 3px 30px 3px 6px

        &.ks-dropdown-open
            .ks-dropdown-menu
                display: block
        .ks-dropdown-disabled
            background: #eee
            cursor: not-allowed
</style>
