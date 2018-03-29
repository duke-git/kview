# Editable编辑框
* * *
编辑框，用于编辑字段。

## 示例
 **text属性:**
<div class='example' id="sample1" style="margin-bottom: 30px;"></div>

```jsx
    <KSCEditable text="可编辑文字"></KSCEditable>
```
text属性：需要编辑的文本，类型string,必填。

 **required属性:**
<div class='example' id="sample2" style="margin-bottom: 30px;"></div>

```jsx
    <KSCEditable text="required属性" :required="false"></KSCEditable>
```
required属性：是否必须输入，不能为空，默认不能空。当可以为空时，输入空值，输入框不会消失， 因为目前交互是鼠标hover后出现编辑按钮，当文本为空时，将不能触发hover效果，导致不能编辑。

 **isEditing属性:**
<div class='example' id="sample3" style="margin-bottom: 30px;"></div>

```jsx
    <KSCEditable text="isEditing属性" :isEditing="true"></KSCEditable>
```
isEditing属性：是否处于编辑状态，默认不处于。

 **validate属性:**
<div class='example' id="sample4" style="margin-bottom: 30px;"></div>

```jsx
    <KSCEditable text="必须输入正整数" :validate="/^\d+$/"></KSCEditable>
```
validate属性：验证输入合法性。可以为函数，正则表达式或者可以传递给正则构造函数new RegExp(validate)的字符串。 若为函数，则参数为当前编辑后的文本text。

 **onError属性:**
<div class='example' id="sample5" style="margin-bottom: 30px;"></div>

```jsx
    <KSCEditable text="必须输入正整数" :validate="/^\d+$/" :onError="handleOnError">
    </KSCEditable>
```
onError属性：当输入不合法时，执行的回调函数，默认弹出输入不合法的提示。

 **disabled属性:**
<div class='example' id="sample6" style="margin-bottom: 30px;"></div>

```jsx
    <KSCEditable text="disabled属性" :disabled="true"></KSCEditable>
```
disabled属性：默认为false, 为true时编辑框不可编辑。

 **changed事件:**
<div class='example' id="sample7" style="margin-bottom: 30px;"></div>

```jsx
    <KSCEditable text="changed事件" @changed="handleChanged"></KSCEditable>
```
changed事件：当文本改变时触发。@param text {String} 编辑后的文本 @param oldText {String} 编辑前的文本

 **error事件:**
<div class='example' id="sample8" style="margin-bottom: 30px;"></div>

```jsx
    <KSCEditable text="error事件" :validate="/^\d+$/" @error="handleError"></KSCEditable>
```
error事件：当输入不合法时触发。@param text {String} 导致错误的文本

## API
* ### Editable属性
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
            <td>text</td>
            <td>需要编辑的文本,必填项</td>
            <td>String</td>
            <td>'可编辑文字'</td>
        </tr>
        <tr>
            <td>required</td>
            <td>是否必须输入，不能为空，true或false, 默认为true</td>
            <td>Boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>isEditing</td>
            <td>是否处于编辑状态，默认不处于</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>validate</td>
            <td>验证输入合法性。可以为函数，正则表达式或者可以传递给正则构造函数new RegExp(validate)的字符串</td>
            <td>String|RegEpx|Function</td>
            <td>-</td>
        </tr>
        <tr>
            <td>onError</td>
            <td>是否必须输入，不能为空，true或false, 默认为true</td>
            <td>Function</td>
            <td>function(){alert('输入不合法');}</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>禁用编辑框</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
    </tbody>
</table>

* ### Editable事件
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
            <td>changed</td>
            <td>当文本改变时触发</td>
            <td>Function，@param text {String} 编辑后的文本 @param oldText {String} 编辑前的文本</td>
            <td>-</td>
        </tr>
        <tr>
            <td>error</td>
            <td>当输入不合法时触发</td>
            <td>Function，@param text {String} 导致错误的文本</td>
            <td>-</td>
        </tr>
    </tbody>
</table>


