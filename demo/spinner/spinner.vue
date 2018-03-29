<template>
    <div class="demo">
        <h1 class="demo-header">微调器</h1>
        <p >实现增减的基础组件</p>
        <hr />
        <div class="demo-wrapper">
            <div class="demo-content">
                <ul class="demo-list">
                    <li>
                        <h2>示例</h2>
                        <div class="wrapper">
                            <KSCSpinner :value="value" :max="5" :min="1" :initDiabled="false" @changed="callback" :step="1" ref="test"></KSCSpinner>
                            <p class="code">
                                < KSCSpinner :value=3 :max="5" :min="1" :initDiabled="false" @changed="callback" :step="1">< /KSCSpinner>
                                <pre>
                                    methods: {
                                        callback: function(value) {
                                            alert(value);
                                        }
                                    }
                                </pre>
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div class="table-wrapper">
                            <h2>属性简介</h2>
                            <table  class="component-api-list">
                                <tr>
                                    <th>属性名</th>
                                    <th>数据类型</th>
                                    <th>默认值</th>
                                    <th>说明</th>
                                </tr>
                                <tr v-for="item in attributes">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.type }}</td>
                                    <td>{{ item.defaultValue }}</td>
                                    <td>{{ item.tips }}</td>
                                </tr>
                            </table>
                        </div>
                    </li>
                    <li>
                        <h2 id="min">属性说明</h2>
                        <div class="wrapper">
                            <h6>min： 设置最小值, 当input框内数字小于设置的最小值时，减少按钮（即左侧按钮）禁用。如果未设置该值，则默认为0</h6>
                            <KSCSpinner :min="-2"></KSCSpinner>
                            <p class="code">
                                code部分： < KSCSpinner :min="-2">< /KSCSpinner>
                            </p>
                            <hr />
                        </div>
                        <div class="wrapper">
                            <h6>max： 设置最大值, 当input框内数字大于设置的最大值时，增加按钮（即右侧按钮）禁用。如果未设置该值，则默认为3</h6>
                            <KSCSpinner :max="5"></KSCSpinner>
                            <p class="code">
                                code部分： < KSCSpinner :max="5">< /KSCSpinner>
                            </p>
                            <hr />
                        </div>
                        <div class="wrapper">
                            <h6>value： 初始值, 当input框内初始显示的数值，如果未设置该值，则默认为1</h6>
                            <KSCSpinner :value="1"></KSCSpinner>
                            <p class="code">
                                code部分： < KSCSpinner :value="2">< /KSCSpinner>
                            </p>
                            <hr />
                        </div>
                        <div class="wrapper">
                            <h6>disabled： 禁用标识，取值为布尔值，true 为禁用，false 为可用</h6>
                            <KSCSpinner :disabled="true"></KSCSpinner>
                            <p class="code">
                                code部分： < KSCSpinner :disabled="true">< /KSCSpinner>
                            </p>
                            <hr />
                        </div>
                        <div class="wrapper">
                            <h6>step：单次操作改变的步长，取值为整型，默认为2</h6>
                            <KSCSpinner :step=1></KSCSpinner>
                            <p class="code">
                                code部分： < KSCSpinner :step=1>< /KSCSpinner>
                            </p>
                            <hr />
                        </div>
                    </li>
                    <li>
                        <h2>事件 changed</h2>
                        <div class="wrapper">
                            <h6>changed: input 框内数据发生改变时触发</h6>
                            <KSCSpinner @changed="callback"></KSCSpinner>
                            <p class="code">
                                code部分：< KSCSpinner @changed="callback">< /KSCSpinner>
                                <code>
                                    methods: {
                                    callback: function(value) {
                                            alert(value);
                                        }
                                    }
                                </code>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import KSCSpinner from 'src/components/spinner/spinner';

    export default {
        name: 'spinner-demo',
        data: () => {
            return {
                attributes: [
                    {name: 'min', type: 'Number', defaultValue: 0, tips: "可编辑的最小值"},
                    {name: 'max', type: 'Number', defaultValue: 3, tips: "可编辑的最大值"},
                    {name: 'value', type: 'Number', defaultValue: 1, tips: "初始默认值"},
                    {name: 'disabled', type: 'Boolean', defaultValue: 'false', tips: "初始编辑状态"},
                    {name: 'step', type: 'Number', defaultValue: 2, tips: "点击一次改变的步长"}
                ],
                value: 3,
                attrExplains: [
                    {
                        states: 'min: 设置最小值, 当input框内数字小于设置的最小值时，减少按钮（即左侧按钮）禁用。如果未设置该值，则默认为0',
                        val: 0,
                        name: 'min',
                        code: '< KSCSpinner :min=0>< /KSCSpinner>'
                    },
                    {
                        states: 'max: 设置最小值, 当input框内数字小于设置的最小值时，减少按钮（即左侧按钮）禁用。如果未设置该值，则默认为0',
                        val: 5,
                        name: 'max',
                        code: '< KSCSpinner :max=5>< /KSCSpinner>'
                    }
                ]
            }
        },
        components: {
            KSCSpinner
        },
        methods: {
            callback: function (value) {
                this.$refs.test.value = value;
                console.log(this.$refs.test.value);
                console.log(value);
                alert(value);
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../styles/demo-common.styl"
    .demo
        text-align left
        margin-left 30px
        p
            padding-left 20px
            margin 10px
    .demo-wrapper
        .table-wrapper
            margin 10px 0 20px
        .demo-list
            list-style  disc
            h6
                margin 10px 0
                font-weight 700
            .wrapper
                margin 20px 10px
            p
                padding 0
                madgin-left 0
            .code
                background #efefef
                padding 10px
                margin 10px 0

    .demo-content
        margin 10px
    hr
        margin-bottom 10px

</style>
