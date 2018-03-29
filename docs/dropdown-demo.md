# Dropdown下拉菜单
* * *
Dropdown下拉菜单。

## 示例
 **Dropdown示例:**
<div class='example' id="sample1" style="margin-bottom: 30px;"></div>

```jsx
    <KSCDropdown>
        <a slot="header">更多<i class="ks-caret"></i></a>
        <ul class="ks-dropdown-menu" slot="list">
            <li><a>压马路1</a></li>
            <li><a>压马路2</a></li>
            <li><a>压马路3</a></li>
        </ul>
    </KSCDropdown>
    <KSCDropdown>
        <KSCButton type="operation" icon="more-20" slot="header">更多</KSCButton>
        <ul class="ks-dropdown-menu" slot="list">
            <li><a>操作1</a></li>
            <li><a>操作2</a></li>
            <li><a>操作3</a></li>
        </ul>
    </KSCDropdown>
```
Dropdown使用说明：Dropdown由两部分构成，1. 触发对象，具名slot为"header",可以使用链接，按钮等。
<br/>2.菜单列表， 具名slot为"list". 可以是任何元素。

 **Dropdown click触发示例:**
<div class='example' id="sample2" style="margin-bottom: 30px;"></div>

```jsx
    <KSCDropdown trigger="click">
        <a slot="header">click触发<i class="ks-caret"></i></a>
        <ul class="ks-dropdown-menu" slot="list">
            <li><a>压马路1</a></li>
            <li><a>压马路2</a></li>
            <li><a>压马路3</a></li>
        </ul>
    </KSCDropdown>
```
Dropdown默认触发方式为hover, 设置trigger属性为click，会点击触发。

## API
* ### Dropdown属性
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
            <td>trigger</td>
            <td>dropdown触发方式，默认为hover, 设置为click是点击触发</td>
            <td>String</td>
            <td>hover | click</td>
        </tr>
    </tbody>
</table>

