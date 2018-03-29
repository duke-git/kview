# Slider滑动条
* * *

## 示例
<div class='example' id="sample1" ></div>

```jsx
    <KSCSlider :showRange="showRange"
               :unit="unit"
               :step="step"
               :min="min"
               :max="max"
               :value="value"
               :width="width"
               @change='handleChange'
               @stop="stopHandle"></KSCSlider>
    <div class="float-left">当前选中的值为{{this.value}}</div>
```
通过拖动滑动条滑块，可以在某一个固定的范围区间内选定某一个值

**滑动结束触发回调**
<div class='example' id="sample2" ></div>

```jsx
   <KSCSlider :showRange="showRange"
              :unit="unit"
              :step="step"
              :min="min"
              :max="max"
              :value="value"
              :width="width"
              @stop="stopHandle"></KSCSlider>
    <div class="float-left">当前选中的值为{{this.value}}</div>
```

通过stop事件，可以在拖拽滑块结束时获取对应的值

**滑动条禁用**
<div class='example' id="sample3" ></div>

```jsx

   <KSCSlider :showRange="showRange"
              :disabled="disabled"
              :value="value"></KSCSlider>
```

设置disabled属性，可以对滑动条进行禁用

## API
* ### Slider属性
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
            <td>showRange</td>
            <td>是否在滑动条下方展示数值范围</td>
            <td>Boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>max</td>
            <td>表示当前滑动条范围最大值</td>
            <td>Number</td>
            <td>100</td>
        </tr>
        <tr>
            <td>min</td>
            <td>表示当前滑动条范围最小值</td>
            <td>Number</td>
            <td>0</td>
        </tr>
        <tr>
            <td>value</td>
            <td>设置滑动条初始选中值</td>
            <td>Number</td>
            <td>this.min</td>
        </tr>
        <tr>
            <td>step</td>
            <td>设置滑动条滑动步长</td>
            <td>Number</td>
            <td>1</td>
        </tr>
        <tr>
            <td>unit</td>
            <td>设置数值单位</td>
            <td>String</td>
            <td>-</td>
        </tr>
        <tr>
            <td>width</td>
            <td>设置滑动条长度</td>
            <td>Number</td>
            <td>-</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>设置滑动条是否禁用</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
    </tbody>
</table>

* ### Slider事件
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
            <td>值发生变化时触发事件</td>
            <td>改变后的值</td>
        </tr>
        <tr>
            <td>stop</td>
            <td>拖动滑块停止时触发事件</td>
            <td>滑块停止时的对应值</td>
        </tr>
    </tbody>
</table>



