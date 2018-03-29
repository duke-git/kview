<template>
    <div class="ks-btns-page no-wrap">
        <div class="pager">
            <a href="javascript:void(0);" class="prev" @click.prevent="toFrontPage"
               :class="{disabled: page == 1 }"><span class="prev-caret"></span></a>
            <a href="javascript:void(0);"
               v-for="(item, index) in newPageAry"
               :class="{active: item == page}"
               @click.prevent="changePage(item, index)"
            >{{ item }}</a>
            <a href="javascript:void(0);" class="next" @click.prevent="toNextPage"
               :class="{disabled: page == pages}"><span class="next-caret"></span></a>
        </div>
        <span class="text">每页</span>
        <div class="ks-dropdown">
            <KSCSelect
                    width="100px"
                    :options="pagination"
                    :currentitem="curPageSize"
                    trigger="hover"
                    @change="changePageCount"
            ></KSCSelect>
        </div>
        <span class="text">共 {{ totalCount }} 条</span>
    </div>
</template>
<script>
	import KSCSelect from '../select/select'

	export default {
		name: 'KSCPagination',
		props: {
			totalCount: {
				type: Number,
				default: 0
			},
			pagination: {
				type: Array,
				default: function() {
					let pageSize = [10, 20, 50, 100];
					return pageSize.map(function(item) {
						return {label: item + '行', value: item}
					});
				}
			},
			pageSize: {
				type: Object,
				default: function() {
					return {label: '10行', value: 10}
				}
			},
			curPage: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				curPageSize: this.pageSize,
				page: (Math.ceil(this.totalCount / this.pageSize.value) >= 1) && Math.max(this.curPage, 1),
				total: Math.max(this.totalCount || 0, 0)
			}
		},
		computed: {
            /*page() {
             let pages = Math.ceil(this.totalCount / this.curPageSize.value);
             return this.curPage > pages  ? pages : this.curPage < 1 ? 1 : this.curPage;
             },*/
			pages() {
				return Math.ceil(this.totalCount / this.curPageSize.value);
			},
			newPageAry() {
				let pages = Math.ceil(this.totalCount / this.curPageSize.value);
				let ary = [];
				if (pages <= 7) {
					for (let n = 1; n <= pages; n++) {
						ary.push(n);
					}
				} else {
					if (this.page >= 5 && this.page < pages - 3) {
						ary = [1, '...', this.page - 1, this.page, this.page + 1, '...', pages];
					} else if (this.page <= 4) {
						ary = [1, 2, 3, 4, 5, '...', pages];
					} else if (this.page >= pages - 4) {
						ary = [1, '...', pages - 4, pages - 3, pages - 2, pages - 1, pages];
					}
				}
				return ary;
			}
		},
		methods: {
			// 修改单页显示数量
			changePageCount(val) {
				this.curPageSize = val;
				this.page = 1;
				this.$emit('on-change-page-size', val.value);
			},
			// 获取当前分页大小
			getCurPageSize() {
				return this.curPageSize.value;
			},
			//切换页码
			changePage(val, index) {
				if (val == '...' && index) {
					val = index == 1 ? 2 : this.pages - 1;
				}
				this.page = val;
				this.$emit('on-change-page', val);
			},

			getCurPage() {
				return this.page;
			},

			toFrontPage() {
				if (this.page <= 1) {
					return;
				}
				this.page--;
				this.$emit('on-change-page', this.page);
			},

			toNextPage() {
				if (this.page >= this.pages) {
					return;
				}
				this.page++;
				this.$emit('on-change-page', this.page);
			}
		},
		components: {
			KSCSelect
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .disabled:hover
        cursor not-allowed
        border-color #d9d9d9
        z-index 0

    .next-caret, .prev-caret
        margin-top 3px !important

    .no-wrap
        white-space nowrap

</style>
