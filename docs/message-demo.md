# Messsage提示框
* * *
信息提示，在顶部居中显示，并自动消失。

## 示例
 **提示信息:**
<div class='example' id="sample1" ></div>

```jsx
    <KSCButton type="default" @click="showMessage('info')">信息提示</KSCButton>
    <KSCButton type="default" @click="showMessage('success')">成功提示</KSCButton>
    <KSCButton type="default" @click="showMessage('warning')">警告提示</KSCButton>
    <KSCButton type="default" @click="showMessage('error')">错误提示</KSCButton>
```
提示信息调用全局方法：this.$Message.messageType(text, timeout, onClose, closable)。
<p>其中messageType为提示消息的类型，eg. info, success, warning, error, loading</p>

 **提示信息:**
<div class='example' id="sample2" ></div>

```jsx
    <KSCButton type="default" @click="showLoadingMessage('loading')">
        提示加载中
    </KSCButton>
    <KSCButton type="default" @click="showClosableMessage('info')">
        可以关闭提示
    </KSCButton>
    <KSCButton type="default" @click="showLongMessage('info')">
        10秒后关闭
    </KSCButton>
```
提示加载中信息调用全局方法：this.$Message.loading(text, timeout, onClose, closable)。
<p>提示信息可以关闭设置closable参数为true：this.$Message.info(text, timeout, onClose, true)。</p>
<p>提示关闭时间设置timeout参数，单位毫秒：this.$Message.info(text, 10000, onClose, true)。</p>

## API
* ### Message组件通过调用以下全局方法:
<div style="color: blue; padding: 10px 15px;">
    <p>this.$Message.info(text, timeout, onClose, closable)</p>
    <p>this.$Message.success(text, timeout, onClose, closable)</p>
    <p>this.$Message.error(text, timeout, onClose, closable)</p>
    <p>this.$Message.loading(text, timeout, onClose, closable)</p>
</div>
### 参数说明如下:
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
            <td>提示内容</td>
            <td>String</td>
            <td>''</td>
        </tr>
        <tr>
            <td>timeout</td>
            <td>组件关闭时间，单位毫秒。默认2000</td>
            <td>Number</td>
            <td>2000</td>
        </tr>
        <tr>
            <td>onClose</td>
            <td>组件关闭后的回调函数</td>
            <td>Function</td>
            <td>-</td>
        </tr>
        <tr>
            <td>closable</td>
            <td>是否可以关闭</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
    </tbody>
</table>



