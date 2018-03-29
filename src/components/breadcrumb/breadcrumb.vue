<template>
    <div class="ks-breadcrumb">
        <slot></slot>
        <a v-if="backPath" :href="backPath" class="ks-btn ks-breadcrumb-backbtn">返回</a>
    </div>
</template>
<script>
    export default {
        name: 'KSCBreadcrumb',
        props: {
            separator: {
                type: String,
                default: '/'
            },
            backPath: {
                type: String,
                default: ''
            }
        },
       
        methods: {
            updateBreadcrumbItem() {
                this.$children.forEach((child) => {
                    child.separator = this.separator;
                });
            }
        },
        watch: {
            separator() {
                this.updateBreadcrumbItem();
            }
        },
        mounted() {
            this.updateBreadcrumbItem();
        },
        updated() {
            this.$nextTick(() => {
                this.updateBreadcrumbItem();
            });
        },

    };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ks-breadcrumb
        display: block    
            
    .ks-breadcrumb-backbtn
        vertical-align: middle
        font-size: 12px
        background-color: #fff
        border: 1px solid #d9d9d9
        line-height: 15px
        padding: 3px 10px
</style>