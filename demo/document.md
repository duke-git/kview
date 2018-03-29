demo文档书写规范
1.对于每一个组件而言，在其template中需要包含一个div元素然后包含属性"v-html='content'"来渲染markdown文档中的内容，组件的data中出了组件需要传入的元素之外，还需要包含{content：{}}；
2.在组件中需要对component进行全局注册，以便mounted方法中能够访问到component
3.一些demo公用的样式放在demo-md-common.styl中，可以参照step文档，demo中特有的样式可以在单个文件的style中进行定义
4.文档渲染方法通过mixin引入每个组件demo中，因此在每个组件demo中需要先引入utils文件，然后通过mixin将mounted方法引入
5.md文档在编写过程中，如果要采用公用样式，则需要定义多个<div class='example' id='{indentifier}'>，可以参照steps文档的写法
6.md文档命名时需要与routers中定义的name一致
