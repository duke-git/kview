<template>
    <span class="ks-breadcrumb-item">
        <a v-if="href" :href="href" class="ks-breadcrumb-item-link">
            <slot></slot>
        </a>
        <span v-else class="ks-breadcrumb-item-link">
            <slot></slot>
        </span>
        <span class="ks-breadcrumb-item-separator">
            <slot name="separator">{{separator}}</slot>
        </span>
    </span>
</template>
<script>
    export default {
        name: 'KSCBreadcrumbItem',
        props: {
            href: {
                type: String
            }
        },
        data () {
            return {
                separator: '',
            };
        },
    };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.ks-breadcrumb
    display: block    
    .ks-breadcrumb-item:last-child
        .ks-breadcrumb-item-separator:last-child
            display none
.ks-breadcrumb-item-link
    display: inline
    font-weight: 700
    font-size: 14px
    color: #898989
.ks-breadcrumb-item-separator
    margin: 0 2px
    color: #898989
    font-weight: 700
    font-size: 14px
</style>