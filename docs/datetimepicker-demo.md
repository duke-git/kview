# Datetimepicker日期选择
* * *
日期选择控件，直接封装<a href="https://chmln.github.io/flatpickr/" target="blank" style="color:blue">flatpickr</a>

## 示例
 **option属性:**
<div class='example' id="sample1" style="margin-bottom: 30px;"></div>

```jsx
    <KSCDatetimepicker :options="fpOptions1" v-model="dateStr1" placeholder="选择日期">
    </KSCDatetimepicker>
    <KSCDatetimepicker :options="fpOptions2" v-model="dateStr2" placeholder="选择日期和时间">
    </KSCDatetimepicker>
```
option属性: flatpickr提供的配置,以下为一些常用属性
<br/>&ensp;&ensp;enableTime 是否启用时间选择功能，默认不启用 @type {Boolean} @default false
<br/>&ensp;&ensp;enableSeconds 启用时精确到秒，默认不启用 @type {Boolean} @default false
<br/>&ensp;&ensp;maxDate 能够选择的最大日期 @type {String | Date} @default null
<br/>&ensp;&ensp;minDate 能够选择的最小日期 @type {String | Date} @default null

 **value属性:**
<div class='example' id="sample2" style="margin-bottom: 30px;"></div>

```jsx
    <KSCDatetimepicker :options="fpOptions1" 
        v-model="dateStr1" 
        placeholder="选择日期"
        value="2017-4-16"
    >
    </KSCDatetimepicker>
```
value属性:设置默认日期，@type {String | Date}

 **disabled属性:**
<div class='example' id="sample3" style="margin-bottom: 30px;"></div>

```jsx
    <KSCDatetimepicker :options="fpOptions1" v-model="dateStr1"
        :disabled="true"
    >
    </KSCDatetimepicker>
```
disabled属性:设置组件禁用，@type {Boolean} 默认为false, 不禁用。

 **事件:**
<div class='example' id="sample4" style="margin-bottom: 30px;"></div>

```jsx
    <KSCDatetimepicker :options="fpOptions1" 
        v-model="dateStr1" 
        placeholder="选择日期"
        @change="handleChange"
        @open="handleOpen"
        @close="handleClose"
    >
    </KSCDatetimepicker>
```
本组件提供的事件，都是flatpickr提供的，除input事件外组件本身没有暴露特殊事件。
<a href="https://chmln.github.io/flatpickr/events/#events" target="blank" style="color:blue">flatpickr事件参考</a>
<br/>事件名为flatpickr事件名称去掉前缀‘on’. eg. onChange > change. onOpen > open onClose > close

## API
* ### Datetimepicker属性
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
            <td>option</td>
            <td>flatpickr提供的配置</td>
            <td>Object</td>
            <td>-</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>禁用组件</td>
            <td>Boolean</td>
            <td>false/td>
        </tr>
        <tr>
            <td>value</td>
            <td>默认日期</td>
            <td>String | Date</td>
            <td>''</td>
        </tr>
        <tr>
            <td>placeholder</td>
            <td>组件placeholder</td>
            <td>String</td>
            <td>''</td>
        </tr>
    </tbody>
</table>

* ### Datetimepicker事件
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
            <td>日期改变时触发</td>
            <td>Function，@param selectedDates {Date} 改变后的日期 @param dateStr {String} 改变后的日期（字符串表示）@param instance {Object} Flatpickr实例</td>
            <td>-</td>
        </tr>
        <tr>
            <td>monthChange</td>
            <td>日期改变时触发</td>
            <td>Function，@param selectedDates {Date} 改变后的日期 @param dateStr {String} 改变后的日期（字符串表示）@param instance {Object} Flatpickr实例</td>
            <td>-</td>
        </tr>
        <tr>
            <td>yearChange</td>
            <td>日期改变时触发</td>
            <td>Function，@param selectedDates {Date} 改变后的日期 @param dateStr {String} 改变后的日期（字符串表示）@param instance {Object} Flatpickr实例</td>
            <td>-</td>
        </tr>
        <tr>
            <td>open</td>
            <td>打开时触发</td>
            <td>Function，@param selectedDates {Date} 改变后的日期 @param dateStr {String} 改变后的日期（字符串表示）@param instance {Object} Flatpickr实例</td>
            <td>-</td>
        </tr>
        <tr>
            <td>close</td>
            <td>关闭时触发</td>
            <td>Function，@param text {String} 导致错误的文本</td>
            <td>-</td>
        </tr>
    </tbody>
</table>


