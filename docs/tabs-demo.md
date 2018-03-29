# Tabs标签
* * *
标签，选项卡切换组件。

## 示例
 **tabs标签示例:**
<div class='example' id="sample1" style="margin-bottom: 30px;"></div>

```jsx
    <KSCTabs :tabs="tabs" @click="handleClick" @close="handleClose">
    </KSCTabs>
    <button @click="changeTabs">改变tabs</button>
```
tab标签使用说明：tabs属性标签唯一属性，包含两个字段.<br>1. tabHeaders: 显示label, 值为数组。eg. {show: true, active: false, label: 'tab0', value: 'tab0', closable: true}。<br/>
item字段：show -> 是否显示，active -> 默认当前选中标签，lebel -> 标签显示文字（必须），value -> 标签值，定位显示内容（必须），closable -> 标签是否可以不关闭 <br/>2. tabPanels: 标签显示内容，值为对象。eg. {tab0 : Vue.extend({template : '<span>This is tab0</span>'})}. 其中key为对应tabHeaders的value. 值为vue组件。

## API
* ### Tabs属性
<table class="api-table">
    <thead>
        <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>tabs</td>
            <td>tabs标签数据源。eg. {tabHeaders: tabHeaders, tabPanels: tabPanels}</td>
            <td>Object</td>
            <td>{}</td>
        </tr>
        <tr>
            <td>tabHeaders</td>
            <td>tabs标签headers。eg. {show: true, active: false, label: 'tab0', value: 'tab0', closable: true}</td>
            <td>Array</td>
            <td>[]</td>
        </tr>
        <tr>
            <td>tabPanels</td>
            <td>标签页面板。 对象，key为对应的tabHeaders value, 职位为vue component</td>
            <td>Object</td>
            <td>{}</td>
        </tr>
    </tbody>
</table>

* ### Tabs事件
<table class="api-table">
    <thead>
        <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>click</td>
            <td>切换tab后的事件, 参数为当前active item的value</td>
            <td>Function</td>
            <td>-</td>
        </tr>
        <tr>
            <td>close</td>
            <td>关闭tab后的事件, 参数为关闭tab item的value</td>
            <td>Function</td>
            <td>-</td>
        </tr>
    </tbody>
</table>


