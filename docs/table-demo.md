# Table表格
* * *
Table表格, 用于显示列表

## 示例
 **表格示例:**
<div class='example' id="sample1" ></div>

```jsx
    <KSCTable :columns="columns1" :data="data1" @on-select="onSelect" 
    @on-select-all="onSelectAll"></KSCTable>
    <KSCPagination :totalCount="total" :curPage="currentPage" @on-change-page-size="changePageSize"
    @on-change-page="changePage"></KSCPagination>
```
表格代码是在iView表格的基础上修改的，参考<a href="https://www.iviewui.com/components/table" target="_blank" style="color: blue; font-weight: bold;">iView</a>

## API
* ### Table属性
Table所有用法，请参考<a href="https://www.iviewui.com/components/table" target="_blank" style="color: blue; font-weight: bold;">iView</a>!!!