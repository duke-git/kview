# Switch开关
* * *
开关组件，用于状态切换。(本组件模拟bootstrap switch组件)

## 示例
 **默认开关:**
<div class='example' id="sample1" ></div>

```jsx
    <KSCSwitch></KSCSwitch>
```
默认开关使用KSCSwitch标签  
   
 **设置开关显示label:**
<div class='example' id="sample2" ></div>

```jsx
    <KSCSwitch labelOn="开" labelOff="关"></KSCSwitch>
```
开关开启状态默认显示label为'ON',关闭状态默认显示label为'OFF'。通过设置属性labelOn和labelOff设置label。<br/><span style="color: red">注：本组件模拟bootstrap switch组件，由margin-left控制状态切换。设置显示label时建议为一个单词。eg. on/off, 开/关, 是/否。否则会引起组件样式混乱</span>

 **禁用开关:**
<div class='example' id="sample3" ></div>

```jsx
    <KSCSwitch :disabled="true" ></KSCSwitch>
```
禁用开关设置disabled为true。

 **设置开关默认状态:**
<div class='example' id="sample4" ></div>

```jsx
    <KSCSwitch default="on"></KSCSwitch>
```
开关默认状态为off, 设置default属性改变默认状态。

 **开关change事件:**
<div class='example' id="sample5" ></div>

```jsx
    <KSCSwitch @change="handleChange"></KSCSwitch>
```
开关change事件, 处理函数参数为状态改变后的boolean值，on为true, off为false。
## API
* ### Switch属性
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
            <td>labelOn</td>
            <td>开关开启状态显示的文本</td>
            <td>String</td>
            <td>ON</td>
        </tr>
        <tr>
            <td>labelOff</td>
            <td>开关关闭状态显示的文本</td>
            <td>String</td>
            <td>OFF</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>设置开关禁用</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>default</td>
            <td>设置开关默认状态，on/off</td>
            <td>String</td>
            <td>off</td>
        </tr>
    </tbody>
</table>

* ### Switch事件
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
            <td>change</td>
            <td>开关改变后的状态, 开启>关闭为false, 关闭>开启为true</td>
            <td>Function</td>
            <td>-</td>
        </tr>
    </tbody>
</table>


