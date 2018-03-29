# Step步骤条
* * *
作为流程引导的分步导航条， 可以依照使用场景设定生成步骤

## 示例
<div class='example' id="sample1" ></div>

```jsx

    <KSCSteps :steps="steps" :active="active" center='center'></KSCSteps>
    <KSCButton type="primary" @click="previousStep">上一步</KSCButton>
    <KSCButton type="primary" @click="nextStep">下一步</KSCButton>
```

步骤条用于引导流程， 可以设置相应的引导文字，并依照实际需要设置步骤数,可以配合按钮等其他组件进行使用

## API
* ### Steps属性
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
            <td>steps</td>
            <td>步骤条所含步骤数以及步骤说明,每个步骤作为一个包含属性`text`的对象，其中`text`的值即为步骤说明
            <td>Array</td>
            <td>
                [
                    {text: 'text1'},
                    {text: 'text2'},
                    {text: 'text3'}
                ]
            </td>
        </tr>
        <tr>
            <td>active</td>
            <td>表示当前步骤</td>
            <td>Number</td>
            <td>-</td>
        </tr>
        <tr>
            <td>center</td>
            <td>设置步骤条是否在页面居中</td>
            <td>Boolean</td>
            <td>true</td>
        </tr>
    </tbody>
</table>


