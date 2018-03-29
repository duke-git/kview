<template>
    <div class="ks-tab">
        <div class="tab-head">
            <div v-for='item in tabHeaders'
                 v-if='item.show'
                 v-bind:key="item.value"
                 class="tab-btn"
                 :class="tabBtnClass(item)"
                 @click="handleClickTab(item)"
            >
                <i v-if='item.closable' class="icon icon-close-20" @click.stop="handleCloseTab(item)"></i>
                {{item.label}}
            </div>
        </div>
        <div class="tab-body">
            <component :is='currentTab' keep-alive></component>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    name: 'KSCTabs',
    props: {
        tabs: {
            type: Object,
            default: {}
        }
    },
    components: this.tabPanels,
    data() {
        return {
            currentTab: "",
            tabHeaders:　[],
            tabPanels: {}
        }
    },
    watch: {
        tabs: {
            handler: function (val, oldVal) {
                let tabHeaders = this.tabs.tabHeaders;
                let tabPanels = this.tabs.tabPanels;

                tabHeaders.forEach((item, index) => {
                    if(item.active) {
                        this.currentTab = tabPanels[item.value];
                    }
                });
                
                this.tabHeaders = tabHeaders;
                this.tabPanels = tabPanels;
            },
            deep: true
        }
    },
    methods: {
        tabBtnClass(item){
            const disabled = item.disabled;
            const active = item.active;
            return [
                {
                    'tab-btn-disabled': disabled,
                    'active': active
                }
            ]
        },

        handleClickTab(tab) {
            if (tab.disabled) {
                return;
            }
            let tabHeaders = this.tabHeaders;
            tabHeaders.forEach((item, index) => {
                item.active = tab.value === item.value;
            });
            this.currentTab = this.tabPanels[tab.value];
            this.$emit('click', tab.value);
        },

        handleCloseTab(tab) {
            if (tab.disabled) {
                return;
            }
            let tabHeaders = this.tabHeaders;
            let tabPanels = this.tabPanels;

            let index = tabHeaders.indexOf(tab);
            this.$set(tabHeaders, index, Object.assign(tabHeaders[index], {show: false}));
            this.$delete(tabPanels, tab.value);

            if(tab.active) {
                let nextTab = null;
                tabHeaders.forEach((item, index) => {
                    if(item.show && !item.disabled) {
                        nextTab = item;
                    }
                });
                if(nextTab){
                    this.$set(tabHeaders, index, Object.assign(tabHeaders[index], {active: false}));
                    this.$set(tabHeaders, index+1, Object.assign(tabHeaders[index+1], {active: true}));
                }
            }
            
            tabHeaders.forEach((item, index) => {
                if(item.active) {
                    this.currentTab = tabPanels[item.value];
                }
            });

            let headers = tabHeaders.filter((item, index) => {
                return !item.show || !item.disabled;
            });
            if(headers.length === 0) {
                this.currentTab = Vue.extend({template: '<span></span>'});
            }

            this.$emit('close', tab.value);
        }
    },
    mounted: function () {
        let tabHeaders = this.tabs.tabHeaders;
        let tabPanels = this.tabs.tabPanels;

        tabHeaders.forEach((item, index) => {
            if(item.active) {
                this.currentTab = tabPanels[item.value];
            }
        });
        this.tabHeaders = Object.assign([], tabHeaders);
        this.tabPanels = Object.assign({}, tabPanels);
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ks-tab
        .tab-btn-disabled
            background: #efefef
            cursor: not-allowed
        .icon-close-20
            position: absolute
            font-size: 12px
            top: 5px
            right: 5px
            display: inline-block

        .tab-body
           display: block
</style>