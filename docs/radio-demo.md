# Radio单选框
* * *
用于在多个可选项中进行单项选择

## 示例
 **单选框**
<div class='example' id="sample1" ></div>

```jsx

    <KSCRadio :disabled="disabled" :name="name" v-model="radio" :label="value" @change="getValue"></KSCRadio>
    <KSCRadio :disabled="disabled" :name="name" v-model="radio" label="11" @change="getValue"></KSCRadio>
    <KSCRadio :disabled="disabledTrue" :name="name" v-model="radio"
              :label="secvalue" @change="getValue">testSlot</KSCRadio>
```

单选框默认非选中状态，如果需要默认选中状态，需要设置v-model关联的属性初始值与组件的label属性值相同即可；同时，KSCRadio组件提供了单选按钮的禁用状态，设置组件的disabled属性值为true即可对组件进行禁用

 **单选框组**
<div class='example' id="sample2" ></div>

```jsx

    <KSCRadioGroup v-model="test" @change="getValue" :disabled="disabled" >
        <KSCRadio :name="name" label="1" ></KSCRadio>
        <KSCRadio :name="name" label="2" ></KSCRadio>
    </KSCRadioGroup>
    <KSCRadioGroup v-model="test1" @change="getValue(val)" :disabled="disabledTrue" >
        <KSCRadio :name="name" label="test1" ></KSCRadio>
        <KSCRadio :name="name" label="test2" ></KSCRadio>
    </KSCRadioGroup>
```

用于提供多个互斥选项时进行单选,单选框组也提供禁用功能，使用方法与KSCRadio组件类似
## API
* ### Radio属性
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
            <td>disabled</td>
            <td>设置组件是否禁用</td>
            <td>Boolean</td>
            <td>-</td>
        </tr>
        <tr>
            <td>label</td>
            <td>组件radio的值，相当于原生属性value</td>
            <td>String, Number, Boolean</td>
            <td>-</td>
        </tr>
        <tr>
            <td>name</td>
            <td>radio原生属性name</td>
            <td>String</td>
            <td>-</td>
        </tr>
    </tbody>
</table>


* ### Radio事件
<table class="api-table">
    <thead>
        <tr>
            <th>事件</th>
            <th>说明</th>
            <th>回调参数</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>change</td>
            <td>绑定值发生变化时触发事件</td>
            <td>-</td>
        </tr>
    </tbody>
</table>


 * ### RadioGroup属性
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
            <td>disabled</td>
            <td>设置组件是否禁用</td>
            <td>Boolean</td>
            <td>-</td>
        </tr>
    </tbody>
</table>


* ### RadioGroup事件
<table class="api-table">
    <thead>
        <tr>
            <th>事件</th>
            <th>说明</th>
            <th>回调参数</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>change</td>
            <td>绑定值发生变化时触发事件</td>
            <td>选中的radio的label属性值</td>
        </tr>
    </tbody>
</table>
