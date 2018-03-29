# Dialog对话框
* * *
模态对话框。

## 示例
 **普通对话框:**
<div class='example' id="sample1" ></div>

```jsx
    <KSCButton type="default" @click="showDialog('dialog1')">显示对话框</KSCButton>
    <KSCDialog v-model="dialog1" title="对话框标题" 
    @ok="ok('dialog1')" @cancel="cancel('dialog1')">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </KSCDialog>
```
普通对话框

 **异步对话框:**
<div class='example' id="sample2" ></div>

```jsx
    <KSCButton type="default" @click="showLoadingDialog('dialog2')">显示对话框</KSCButton>
    <KSCDialog v-model="dialog2" title="对话框标题" :isBtnLoading="loading"
    @ok="asyncOk" @cancel="cancel('dialog2')">
        <p>异步对话框，点击确定后2秒关闭对话框。</p>
    </KSCDialog>
```
异步对话框, 需要在打开对话框前设置isBtnLoading为true, 在关闭后设置为false。

 **复杂对话框:**
<div class='example' id="sample2" ></div>

```jsx
    <KSCButton type="default" @click="showLoadingDialog('dialog3')">显示对话框</KSCButton>
    <KSCDialog v-model="dialog3" title="对话框标题" :isBtnLoading="loading"
    @ok="dialog3Ok" @cancel="cancel('dialog3')">
        <form>
            <div style="width: 100%;height: 50px;text-align: left;">
                <label style="float:left;line-height: 30px">姓名：</label><input class="ks-form-text" v-model="name" />
            </div>
            <div style="width: 100%;height: 50px;text-align: left;">
                <label style="line-height: 30px">性别：</label>
                <KSCRadioGroup v-model="sex" style="display: inline-block;">
                    <KSCRadio label="0">男</KSCRadio>
                    <KSCRadio label="1">女</KSCRadio>
                </KSCRadioGroup>
            </div>
            <div style="width: 100%;height: 50px;text-align: left;">
                <label style="line-height: 30px">籍贯：</label>
                <KSCSelect :options="selectOptions" v-model="location" @change="selectLocation"></KSCSelect>
            </div>
            <div style="width: 100%;height: 50px;text-align: left;">
                <label style="line-height: 30px">爱好：</label>
                <KSCCheckbox v-for="item in checkboxOptions" :label="item.label" :value="item.value" @change="selectHobby"></KSCCheckbox>
            </div>
        </form>
    </KSCDialog>
```
复杂对话框, 在对话框内放置table, form组件



## API
* ### Dialog属性
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
            <td>value</td>
            <td>是否显示对话框，可以用v-model做双向绑定</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>title</td>
            <td>对话框标题</td>
            <td>String</td>
            <td>提示</td>
        </tr>
        <tr>
            <td>maskClosable</td>
            <td>点击遮罩层是否可以关闭对话框，true可关闭，false不可关闭</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>escClosable</td>
            <td>按下Esc键是否可以关闭对话框，true可关闭，false不可关闭</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>footerVisible</td>
            <td>是否显示对话框底部结构</td>
            <td>Boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>okBtnText</td>
            <td>确定按钮文本</td>
            <td>String</td>
            <td>确定</td>
        </tr>
        <tr>
            <td>cancelBtnText</td>
            <td>取消按钮文本</td>
            <td>String</td>
            <td>取消</td>
        </tr>
        <tr>
            <td>okBtnVisible</td>
            <td>是否显示ok按钮</td>
            <td>Boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>cancelBtnVisible</td>
            <td>是否显示cancel按钮</td>
            <td>Boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>isBtnLoading</td>
            <td>点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置visible来关闭对话框</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>modal</td>
            <td>是否开启模态框</td>
            <td>Boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>width</td>
            <td>对话框的宽度，单位：px</td>
            <td>Number | String</td>
            <td>520</td>
        </tr>
    </tbody>
</table>

* ### Dialog事件
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
            <td>ok</td>
            <td>点击确定的回调</td>
            <td>Function</td>
            <td>-</td>
        </tr>
        <tr>
            <td>cancel</td>
            <td>点击取消的回调</td>
            <td>Function</td>
            <td>-</td>
        </tr>
    </tbody>
</table>


