<template>
    <div class="example-container" v-html="content"></div>
</template>
<script>
    import Vue from 'vue'
    import Utils from '../utils.js'
    import KSCBtnOpt from 'src/components/btnOpt/index'
    
    KSCBtnOpt.register(Vue);
    export default {
        name: 'btnOpt-demo',
        mixins: [Utils],
        data() {
            return {
                data1:[
                    { text: 'Bar', value: 'bar-value', status: ''},
                    { text: 'Foo', value: 'foo-value'},
                    { text: 'Tar', value: 'tar-value', status: ''},
                    { text: 'Car', value: 'Carr-value', status: ''}
                ],
                data2:[
                    { text: 'Bar', value: 'bar-value', status: ''},
                    { text: 'Foo', value: 'foo-value', status: '',disabled:true},
                    { text: 'Tar', value: 'tar-value', status: ''},
                    { text: 'Car', value: 'Carr-value', status: ''}
                ],
                 data3:[
                    { text: 'Bar', value: 'bar-value', status: ''},
                    { text: 'Foo', value: 'foo-value', status: ''},
                    { text: 'Tar', value: 'tar-value', status: ''},
                    { text: 'Car', value: 'Carr-value', status: ''}
                ],
                value1:{ "text": "Tar", "value": "tar-value"},
                value2:{},
                value3:{},
                content: {}
            }
        },
        methods:{
            onClick(item) {
                console.log(item)
            }
        },
        mounted(){
            
        }
    }
</script>
