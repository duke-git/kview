# Pagination 分页
* * *

### 页面用到分页时，传入数据总数和分页数据大小即可自动计算出所需分页

> 1.点击最右侧和最左侧的按钮实现页码的增减。
>
> 2.分页数量<=7页时， 可完整展示所有页码，点击页码可切换到指定页码页面;
>
> 3.分页数量>7页时， 页码会有部分隐藏，点击省略号的页码将跳转至相应一侧的相邻页面。
>

## 示例
<div class='example' id="sample1" ></div>

```jsx
    <KSCPagination></KSCPagination>
    <KSCPagination :totalCount.num="50" :curPage.num="2"></KSCPagination>
    <KSCPagination :totalCount="total" :curPage="page"></KSCPagination>
    <KSCPagination :totalCount="total" :curPage="page" @on-change-page="changePage"></KSCPagination>
    <KSCPagination :totalCount="total" :curPage="page" @on-change-page-size="changePageSize"></KSCPagination>
```



## <div class='api'>API</div>
* ### Pagination属性
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
            <td>totalCount</td>
            <td>用于分页的数据总量</td>
            <td>Number</td>
            <td>0</td>
        </tr>
        <tr>
            <td>curPage</td>
            <td>当前页码</td>
            <td>Number</td>
            <td>0</td>
        </tr>
        <tr>
            <td>pagination</td>
            <td>页面组</td>
            <td>Array</td>
            <td>[{label: '10 行', value: 10， {label: '20 行', value: 20}}]</td>
        </tr>
        <tr>
            <td>pageSize</td>
            <td>当前分页大小</td>
            <td>Object</td>
            <td>{label: '10行', value: 10}</td>
        </tr>
    </tbody>
</table>

* ### Pagination事件
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
            <td>on-change-page-size</td>
            <td>修改分页大小</td>
            <td>修改后的分页大小</td>
        </tr>
        <tr>
            <td>on-change-page</td>
            <td>修改当前页码</td>
            <td>修改后的当前页</td>
        </tr>
    </tbody>
</table>

