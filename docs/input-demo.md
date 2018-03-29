# input 输入框
* * *
用于输入信息
## 示例
 **普通的input**
<div class='example' id="sample1"></div>

```jsx
    <KSCInput placeholder='请输入...' ></KSCInput>
```
placeholder 占位文本
 
- - -
**带有label的input**
<div class='example' id="sample2"></div>

```jsx
    <KSCInput label="标题" placeholder='请输入...'></KSCInput>
``` 
label表头属性

**密码类型的input**
<div class='example' id="sample2"></div>

```jsx
    <KSCInput placeholder='请输入密码' type='password'></KSCInput>
``` 
type属性为password

- - -
**禁用的input**
<div class='example' id="sample2"></div>

```jsx
    <KSCInput disabled placeholder='不可以输入'></KSCInput>
``` 
disabled禁止输入属性
- - -
**触发函数的input**
<div class='example' id="sample2" ></div>

```jsx
    <KSCInput placeholder='按enter触发' @on-enter="onEnter" ></KSCInput>
``` 
回车触发`on-enter`事件，需在methods中自定义`onEnter`函数
- - -
**触发函数的input**
<div class='example' id="sample2" ></div>

```jsx
    <KSCInput placeholder='失焦触发' @on-blur="onBlur" ></KSCInput>
``` 
失去焦点时触发`on-blur`事件，需在methods中自定义`onBlur`函数

**触发函数的input**
<div class='example' id="sample2" ></div>

```jsx
    <KSCInput placeholder='change事件' @on-change="onChange" ></KSCInput>
``` 
数据改变时触发`on-change`事件，需在methods中自定义`onChange`函数

**触发函数的input**
<div class='example' id="sample2" ></div>

```jsx
    <KSCInput placeholder='输入时触发' @on-input="onInput" ></KSCInput>
``` 
输入时触发`on-Input`事件，需在methods中自定义`onInput`函数

**触发函数的input**
<div class='example' id="sample2" ></div>

```jsx
    <KSCInput icon placeholder='点击图标时触发'  @on-click="onClick"  v-model="value1" IconType="search-20" ></KSCInput>
    <div>{{value1}}</div>
``` 
点击按钮时触发`on-Click`事件返回input中的值，需在methods中自定义`OnClick`函数,data()中初始化value1为'haha'

- - -
# textarea 输入框
* * *
用于多行输入
**textarea**
<div class='example' id="sample2" ></div>

```jsx
<div style="width:300px;margin-left:30px">
    <KSCInput type="textarea" :rows=3 placeholder="请填入信息..." ></KSCInput>
</div>
    
```
textarea的宽度是组件外部设置固定宽度,支持以上函数方法，用法同input

- - -
## API
* ### input 属性
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
            <td>placeholder</td>
            <td>占位文本	</td>
            <td>String</td>
            <td>'可编辑文字'</td>
        </tr>
         <tr>
            <td>label</td>
            <td>用于input输入前的提示</td>
            <td>String</td>
            <td>空</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>是否允许输入</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>type</td>
            <td>输入框类型，可选值为 text、password 或 textarea</td>
            <td>String</td>
            <td>text</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>图标显示</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>IconType</td>
            <td>图标类型</td>
            <td>String</td>
            <td>'search-20' 详情见<a href="#/demo/icon">Icon介绍</a></td>
        </tr>
    </tbody>
</table>

* ### input & textarea事件
<table class="api-table">
    <thead>
        <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>返回值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>on-enter</td>
            <td>回车(enter)触发事件</td>
            <td>修改后的分页大小</td>
        </tr>
        <tr>
            <td>on-blur</td>
            <td>失去焦点触发</td>
            <td>返回Function 输入参数event 可以获取input中的值</td>
        </tr>
        <tr>
            <td>on-change</td>
            <td>数据改变时触发</td>
            <td>返回Function 输入参数event 可以获取input中的值</td>
        </tr>
        <tr>
            <td>on-input</td>
            <td>输入数据时触发</td>
            <td>返回Function 输入参数event 可以获取input中的值</td>
        </tr>
        <tr>
            <td>on-click</td>
            <td>点击图标时触发</td>
            <td>返回Function 输入参数event 可以获取input中的值</td>
        </tr>
    </tbody>
</table>

