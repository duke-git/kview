# Form表单
* * *
Form表单, 用户注册提交信息

## 示例
 **带验证信息表单:**
<div class='example' id="sample1" ></div>

```jsx
    <KSCForm ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <KSCFormItem label="姓名" prop="name">
            <input v-model="formValidate.name" placeholder="请输入姓名" class="ks-form-text"></input>
        </KSCFormItem>
        <KSCFormItem label="性别" prop="gender">
            <KSCRadioGroup v-model="formValidate.gender" style="display: inline-block;">
                <KSCRadio label="male">男</KSCRadio>
                <KSCRadio label="female">女</KSCRadio>
            </KSCRadioGroup>
        </KSCFormItem>
        <KSCFormItem label="城市" prop="city">
            <KSCSelect :options="citys" v-model="formValidate.city"></KSCSelect>
        </KSCFormItem>
        <KSCFormItem label="生日" prop="date">
            <KSCDatetimepicker v-model="formValidate.date" placeholder="选择日期"></KSCDatetimepicker>
        </KSCFormItem>
        <KSCFormItem label="爱好" prop="interest">
            <KSCCheckboxGroup v-model="formValidate.interest">
                <KSCCheckbox label="打篮球" value="basketball"></KSCCheckbox>
                <KSCCheckbox label="看书" value="read"></KSCCheckbox>
                <KSCCheckbox label="压马路" value="road"></KSCCheckbox>
            </KSCCheckboxGroup>
        </KSCFormItem>
        <KSCFormItem label="邮箱" prop="mail">
            <input v-model="formValidate.mail" placeholder="请输入邮箱" class="ks-form-text"></input>
        </KSCFormItem>
        <KSCFormItem>
            <KSCButton type="primary" @click="handleSubmit('formValidate')">提交</KSCButton>
            <KSCButton type="default" @click="handleReset('formValidate')">重置</KSCButton>
        </KSCFormItem>
    </KSCForm>
```
Form 组件基于<a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a> 实现的数据验证，
给 Form 设置属性 rules，同时给需要验证的 Form-item 设置属性 prop 指向对应字段即可。
<br/> 完整的验证规则请参照开源项目 async-validator。



## API
* ### Form属性
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
            <td>model</td>
            <td>表单数据对象</td>
            <td>Object</td>
            <td>-</td>
        </tr>
        <tr>
            <td>rules</td>
            <td>表单验证规则，具体配置查看async-validator</td>
            <td>Object</td>
            <td>-</td>
        </tr>
        <tr>
            <td>inline</td>
            <td>是否开启行内表单模式</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>label-position</td>
            <td>表单域标签的位置，可选值为 left、right、top</td>
            <td>String</td>
            <td>right</td>
        </tr>
        <tr>
            <td>label-width</td>
            <td>表单域标签的宽度，所有的 Form-item 都会继承 Form 组件的 label-width 的值</td>
            <td>Number</td>
            <td>-</td>
        </tr>
        <tr>
            <td>show-message</td>
            <td>是否显示校验错误信息</td>
            <td>Boolean</td>
            <td>true</td>
        </tr>
    </tbody>
</table>

* ### Form方法
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
            <td>validate</td>
            <td>对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败</td>
            <td>Function</td>
            <td>-</td>
        </tr>
        <tr>
            <td>validateField</td>
            <td>对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息</td>
            <td>Function</td>
            <td>-</td>
        </tr>
        <tr>
            <td>resetFields</td>
            <td>对整个表单进行重置，将所有字段值重置为空并移除校验结果</td>
            <td>Function</td>
            <td>-</td>
        </tr>
    </tbody>
</table>
* ### FormItem属性
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
            <td>prop</td>
            <td>对应表单域 model 里的字段</td>
            <td>String</td>
            <td>-</td>
        </tr>
        <tr>
            <td>label</td>
            <td>标签文本</td>
            <td>String</td>
            <td>-</td>
        </tr>
        <tr>
            <td>label-width</td>
            <td>表单域标签的的宽度</td>
            <td>Number</td>
            <td>-</td>
        </tr>
        <tr>
            <td>required</td>
            <td>是否必填，如不设置，则会根据校验规则自动生成</td>
            <td>Boolean</td>
            <td>-</td>
        </tr>
        <tr>
            <td>rules</td>
            <td>表单验证规则</td>
            <td>Number</td>
            <td>-</td>
        </tr>
        <tr>
            <td>error</td>
            <td>表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息</td>
            <td>String</td>
            <td>-</td>
        </tr>
        <tr>
            <td>show-message</td>
            <td>表单域标签的的宽度</td>
            <td>Boolean</td>
            <td>true</td>
        </tr>
    </tbody>
</table>
* ### FormItem slot
<table class="api-table">
    <thead>
        <tr>
            <th>名称</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>label</td>
            <td>label 内容</td>
        </tr>
    </tbody>
</table>
