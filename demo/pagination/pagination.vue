<template>
    <div class="example-container" v-html="content"></div>
</template>

<script>
	import Vue from 'vue'
	import Utils from '../utils.js'
    import KSCPagination from 'src/components/pagination/index'

    KSCPagination.register(Vue);

	export default {
		mixins: [Utils],
        name: 'pagination-demo',
        data() {
			return {
				total: 80,
                page: 1,
				content: {}
            }
        },
        methods: {
	        changePage(page) {
	        	alert(page);
            },
	        changePageSize(pageSize) {
		        alert(pageSize);
            }
        }
    }
</script>

<style lang='stylus' rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
    // .example-container
    //     .example
    //         padding 20px
    //         overflow auto
    //         button
    //             margin 0
    // .api
    //     clear both

</style>
