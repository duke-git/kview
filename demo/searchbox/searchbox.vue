<template>
    <div class="example-container">
        <div class="example-title-container">
            <h1>搜索框</h1>
            <p>用来搜索列表</p>
        </div>
        <div class="example-body-container">
            <h2 class="demo-title">示例</h2>
            <div class="example-body-item">
                <div class="example-demo-container">
                    <div class="component-container">
                        <KSCSearchBox
                            @input="testInput($event.target.value)"
                        ></KSCSearchBox>
                        <div class='s-list'>
                            <span v-for="name in nData">
                                {{ name }}
                            </span>
                        </div>
                    </div>
                    <div class="components-comment">
                        <p>输入关键字，用来搜索列表。</p>
                    </div>
                </div>
                <div class="example-code-container">
                    <pre>
                        &lt;KSCSearchBox @input="someFunc($event.target.value)"&gt; &lt;/KSCSearchBox&gt;

                        在method里添加
                        someFunc: function(e){
                            const self = this;
                            this.nData = _.filter(self.names,function(item){
                                return !self.names || item.indexOf(e) >-1
                            })
                        }
                    </pre>
                </div>
            </div>
            <h2 class="demo-title">API</h2>
            <h3 class="demo-component-props">SearchBox属性：</h3>
            <table class="component-api-list">
                <thead>
                    <tr>
                        <th>属性</th>
                        <th>说明</th><th>类型</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>@input</td>
                        <td>传入一个处理input事件的函数</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <h2 class="demo-title">
                <span>说明：</span>
            </h2>
            <h3 class="demo-component-props"><span>使用搜索功能需要复制出一份Data来进行搜索，由于搜索功能的耦合度太高，暂时提供了一个在父组件里的搜索方法。</span></h3>

        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-common.styl"
    .s-list
        span
            display:inline-block;
            width 24px
            height 24px
            border-radius 24px
            line-height 24px
            text-align center
            background #888
            color #fff
            margin 8px

</style>
<script>
import KSCSearchBox from 'src/components/searchbox/index'
export default {
    name: 'searchbox-demo',
    components: {
        KSCSearchBox
    },
    data(){
        return {
            names:["1","cb","ed","ff","h4e","6","32","2","abc","嘎嘎"],
            nData:[]
        }
    },
    created(){
        this.nData = this.names
    },
    methods: {
        testInput: function(e){
            const self = this;
            this.nData = _.filter(self.names,function(item){
                return !self.names || item.indexOf(e) >-1
            })
        }
    }

}

</script>
