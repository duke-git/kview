# Tooltip提示
* * *
文字提示，可代替系统的title提示。

## 示例
 **默认提示:**
<div class='example' id="sample1" ></div>

```jsx
    <KSCTooltip content="这是提示文字"></KSCTooltip>
```
默认文字提示 

 **禁用提示:**
<div class='example' id="sample2" ></div>

```jsx
    <KSCTooltip content="这是提示文字" :disabled="true"></KSCTooltip>
```
禁用提示设置属性disabled为true 

**复杂结构提示:**
<div class='example' id="sample3" ></div>

```jsx
    <KSCTooltip>
        <div slot="content">
            <p>这是复杂信息提示</p>
            <p style="color: red"><i>显示多行</i></p>
        </div>
    </KSCTooltip>
```
如果提示结构复杂，可以用自定义slot

**设置延迟提示:**
<div class='example' id="sample4" ></div>

```jsx
    <KSCTooltip content="1秒后出现提示信息" :delay="1000"></KSCTooltip>
```
延迟提示设置delay, 单位为毫秒。 内部用setTimout处理

**监听open和close事件:**
<div class='example' id="sample5" ></div>

```jsx
    <KSCTooltip content="处理open事件" @open="handleOpen"></KSCTooltip>
    <KSCTooltip content="处理close事件" @close="handleClose"></KSCTooltip>
```
tooltip在打开后可以监听open事件，在关闭后监听close事件

## API
* ### Tooltip属性
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
            <td>label</td>
            <td>显示文本</td>
            <td>String</td>
            <td>?</td>
        </tr>
        <tr>
            <td>content</td>
            <td>提示文本，提示结构复杂时可以用自定义slot</td>
            <td>String</td>
            <td>-</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>设置禁用</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>delay</td>
            <td>设置延迟打开提示，单位：毫秒</td>
            <td>Number</td>
            <td>0</td>
        </tr>
    </tbody>
</table>

* ### Tooltip事件
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
            <td>show</td>
            <td>打开后的事件</td>
            <td>Function</td>
            <td>-</td>
        </tr>
        <tr>
            <td>hide</td>
            <td>关闭后的事件</td>
            <td>Function</td>
            <td>-</td>
        </tr>
    </tbody>
</table>


