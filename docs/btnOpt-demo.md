# 按钮选项
* * *
选择按钮

##示例
**默认**
<div class='example' id="sample1" ></div>

```jsx
<KSCBtnOpt :data=data1 v-model="value1"></KSCBtnOpt>
<div style="margin:0px 0px 10px 30px;color:#d9d9d9;">{{value1}}</div>
```
value1为Object,为默认选中的元素,如{ "text": "Tar", "value": "tar-value"},为默认选中的选项
默认选项的属性:status:'checked',为选中的状态
- - -
##示例
**禁止**
<div class='example' id="sample2" ></div>

```jsx
<KSCBtnOpt :data=data2 v-model="value2"></KSCBtnOpt>
```

在data2或者value2对象中添加disabled:true属性。`注意！！value2不可以加disabled属性,不可在data2中同时加disabled和checked属性`
需要禁止的属性:disabled:true,为禁止状态
- - -

**函数**
<div class='example' id="sample2" ></div>

```jsx
<KSCBtnOpt :data=data3 v-model="value3" @on-option="onClick"></KSCBtnOpt>
```

在data3或者value3对象中添加disabled:true属性。`注意！！value3不可以加disabled属性,不可在data3中同时加disabled和checked属性`
- - -
- - -
## API
* ### option 属性
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
            <td>data</td>
            <td>操作的数组text value必填项,status和disabled为非必填项	</td>
            <td>Array</td>
            <td>[](必填，如[{ text: 'Bar', value: 'bar-value'}]</td>
        </tr>
        <tr>
            <td>v-model</td>
            <td>数据绑定</td>
            <td>Object</td>
            <td>{}</td>
        </tr>
    </tbody>
</table>
* ### option 事件
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
            <td>on-option</td>
            <td>点击触发自定义函数</td>
            <td>返回被选中的Object</td>
        </tr>
    </tbody>
</table>