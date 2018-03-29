<template>
    <div class="example-container" v-html="content"></div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
</style>
<script>
    import KSCTable from 'src/components/table/index'
    import KSCButton from 'src/components/button/index'
    import KSCPagination from 'src/components/pagination/index'
    import Utils from '../utils.js'
    import Vue from 'vue'

    KSCButton.register(Vue)
    KSCTable.register(Vue)
    KSCPagination.register(Vue)

    export default {
        name: 'table-demo',
        mixins: [Utils],
        data () {
            return {
                columns1: [
                    {
                        type: 'selection',
                        width: 50,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        width: 80,
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        width: 70,
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: '地址',
                        width: 150,
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                // h('KSCButton', {
                                //     props: {
                                //         type: 'default',
                                //     },
                                //     style: {
                                //         marginRight: '5px'
                                //     },
                                //     on: {
                                //         click: () => {
                                //             this.show(params._index)
                                //         }
                                //     }
                                // }, '查看'),
                                h('KSCButton', {
                                    props: {
                                        type: 'warnning',
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params._index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ],
                total: 20,
                currentPage: 1,
                //pageSize: 5,
                content: {}
            }
        },
        methods: {
            show (index) {
                var info = '姓名：' + this.data1[index].name+ ',年龄：'+ this.data1[index].age + ',地址：' + this.data1[index].address;
                this.$Message.success(info);
            },
            remove (index) {
                this.data1.splice(index, 1);
            },
            onSelect(selection, row) {
                var info = '姓名：' + row.name+ ',年龄：'+ row.age + ',地址：' + row.address;
                this.$Message.success(info);
            },
            onSelectAll(selection) {
                this.$Message.success('共选择'+ selection.length + '条数据');
            },
            changePage(page) {
	        	let items = this.fetchData({currentPage: page, pageSize: 10});
                this.data1 = items;
            },
	        changePageSize(pageSize) {
                let items = this.fetchData({currentPage: this.page, pageSize: pageSize});
                this.data1 = items;
            },
            fetchData(opts) {
                let {state, currentPage, pageSize} = opts;
                let data = this.allData();
                let res = [];
                if(currentPage==1) {
                    res = data.slice(0, pageSize+1);
                }else if(currentPage == 2) {
                    res = data.slice(pageSize, data.length);
                }
                return res;
            },
            allData() {
                let items = [
                    {name: '王小明',age: 18,address: '北京市朝阳区芍药居'},
                    {name: '张小刚',age: 25,address: '北京市海淀区西二旗'},
                    {name: '李小红',age: 30,address: '上海市浦东新区世纪大道'},
                    {name: '周小伟',age: 26,address: '深圳市南山区深南大道'},
                    {name: '王明',age: 8,address: '北京市朝阳区芍药居'},
                    {name: '张刚',age: 5,address: '北京市海淀区西二旗'},
                    {name: '李红',age: 3,address: '上海市浦东新区世纪大道'},
                    {name: '周伟',age: 2,address: '深圳市南山区深南大道'},
                    {name: '王',age: 8,address: '北京市朝阳区芍药居'},
                    {name: '张',age: 5,address: '北京市海淀区西二旗'},
                    {name: '李',age: 3,address: '上海市浦东新区世纪大道'},
                    {name: '周',age: 2,address: '深圳市南山区深南大道'},
                    {name: '王小',age: 18,address: '北京市朝阳区芍药居'},
                    {name: '张小',age: 25,address: '北京市海淀区西二旗'},
                    {name: '李小',age: 30,address: '上海市浦东新区世纪大道'},
                    {name: '周小',age: 26,address: '深圳市南山区深南大道'},
                    {name: '小明',age: 18,address: '北京市朝阳区芍药居'},
                    {name: '小刚',age: 25,address: '北京市海淀区西二旗'},
                    {name: '小红',age: 30,address: '上海市浦东新区世纪大道'},
                    {name: '小伟',age: 26,address: '深圳市南山区深南大道'}
                ];
                return items;
            }
        }
    }
</script>
