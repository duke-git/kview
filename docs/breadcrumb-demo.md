# Breadcrumb 面包屑
* * *
面包屑，用于页面内容导航。

## 示例
 **默认面包屑:**
<div class='example' id="sample1" ></div>

```jsx
    <KSCBreadcrumb>
        <KSCBreadcrumbItem href="/">计算资源</KSCBreadcrumbItem>
        <KSCBreadcrumbItem href="#demo/icon">云服务器</KSCBreadcrumbItem>
        <KSCBreadcrumbItem>实例</KSCBreadcrumbItem>
    </KSCBreadcrumb>
```
默认面包屑使用KSCBreadcrumb和KSCBreadcrumbItem

 **设置分隔符:**
<div class='example' id="sample2" ></div>

```jsx
    <KSCBreadcrumb separator=">">
        <KSCBreadcrumbItem href="/">计算资源</KSCBreadcrumbItem>
        <KSCBreadcrumbItem href="#demo/button">云服务器</KSCBreadcrumbItem>
        <KSCBreadcrumbItem>实例</KSCBreadcrumbItem>
    </KSCBreadcrumb>
```
设置分隔符，设置属性separator

 **设置返回按钮:**
<div class='example' id="sample3" ></div>

```jsx
    <KSCBreadcrumb backPath="#demo/home">
        <KSCBreadcrumbItem href="/">计算资源</KSCBreadcrumbItem>
        <KSCBreadcrumbItem href="#demo/button">云服务器</KSCBreadcrumbItem>
        <KSCBreadcrumbItem>实例</KSCBreadcrumbItem>
    </KSCBreadcrumb>
```
返回按钮，设置属性backPath。

## API
* ### Breadcrumb属性
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
            <td>separator</td>
            <td>分隔符</td>
            <td>String</td>
            <td>/</td>
        </tr>
        <tr>
            <td>backPath</td>
            <td>返回按钮href</td>
            <td>String</td>
            <td>''</td>
        </tr>
    </tbody>
</table>

* ### BreadcrumbItem属性
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
            <td>href</td>
            <td>跳转链接</td>
            <td>String</td>
            <td>-</td>
        </tr>
    </tbody>
</table>


