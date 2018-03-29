<template>
    <div>
        <div class="sidebar-main-container">
            <ul class="sidebar-wrap">
                <li class="sidebar-item" v-for="(item, index) in navs">
                    <div class="ksc-logo" v-if="index == 0"></div>
                    <router-link :to="{ path: item.path }" active-class="sidebar-item-active">
                        <span class="sidebar-item-text">{{ item.text }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        data: () => {
            return {
                navs: [
                        {path: '/demo/home', text: '首页'},
                        {path: '/demo/start', text: '快速上手'},
                        {path: '/demo/button', text: 'Button 按钮'},
                        {path: '/demo/icon', text: 'Icon 图标'},
                        {path: '/demo/steps', text: 'Steps 步骤条'},
                        {path: '/demo/spinner', text: 'Spinner 微调器'},
                        {path: '/demo/searchbox', text: 'SearchBox 搜索框'},
                        {path: '/demo/select', text: 'Select 下拉列表'},
                        {path: '/demo/radio', text: 'Radio 单选框'},
                        {path: '/demo/slider', text:'Slider滑动条'},
                        {path: '/demo/checkbox', text: 'Checkbox 复选框'},
                        {path: '/demo/switch', text: 'Switch 开关'},
                        {path: '/demo/tooltip', text: 'Tooltip 提示'},
                        {path: '/demo/tabs', text: 'Tabs 标签'},
                        {path: '/demo/editable', text: 'Editable 编辑框'},
                        {path: '/demo/datetimepicker', text: 'Datetimepicker 日期选择'},
                        {path: '/demo/breadcrumb', text: 'Breadcrumb 面包屑'},
                        {path: '/demo/dialog', text: 'Dialog 对话框'},
                        {path: '/demo/message', text: 'Message 提示'},
                        {path: '/demo/dropdown', text: 'Dropdown 下拉菜单'},
                        {path: '/demo/pagination', text: 'Pagination 分页'},
                        {path: '/demo/form', text: 'Form 表单'},
                        {path: '/demo/table', text: 'Table 表格'},
                        {path: '/demo/input',text:'Input 输入框'},
                        {path: '/demo/btnOpt', text:'Option 按钮'}
                ],
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .sidebar-main-container
        display flex
        -webkit-flex 1
        -webkit-box-flex 1
        -moz-box-flex 1
        -ms-flex 1
        flex 1

    .sidebar-wrap
        position fixed
        width 180px
        height 100%
        border-right 1px solid #d9d9d9
        background #f5f7fa
        white-space nowrap
        overflow hidden
        z-index 99
        list-style none
        overflow-y scroll
        padding-left 0
        a
            display inline-block
            width 100%
            height 100%
            text-align left
            padding-left 25px

    .ksc-logo
        width 50px
        height 50px
        margin 0 auto
        background url('../assets/images/ksc-logo.png')

    .sidebar-item
        position relative
        cursor pointer
        line-height 40px
        &:hover
            background #eee

    .sidebar-item-text
        color #333
        height 30px
        font-size 14px

    .sidebar-item-active
        background #d9d9d9
        .sidebar-item-text
            color blue

</style>
