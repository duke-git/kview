import Vue from 'vue'
import KSCBreadcrumb from 'src/components/breadcrumb/breadcrumb'

let KSCBreadcrumbItem  = KSCBreadcrumb.item;

/**
 * @desc 获取生成的vm
 * @param {Object} Component 组件
 * @param {Object} propsData props数据
 * @return {Object} vue实例
 */
function createVue(Compo, mounted = false) {
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = { template: Compo };
  }
  return new Vue(Compo).$mount();
}

describe('KSCBreadcrumb', () => {
    let breadcrumbVM;

    afterEach(() => {
        breadcrumbVM.$destroy();
    });

    //测试KSCBreadcrumb
    it('should render correct length sublink of breadcrumb', () => {
        breadcrumbVM = createVue(`
            <KSCBreadcrumb>
                <KSCBreadcrumbItem href="/">Home4</KSCBreadcrumbItem>
                <KSCBreadcrumbItem href="/components/breadcrumb">Components</KSCBreadcrumbItem>
                <KSCBreadcrumbItem>Breadcrumb</KSCBreadcrumbItem>
            </KSCBreadcrumb>
        `);
        let breadcrumbEle = breadcrumbVM.$el;
        let linkNode = breadcrumbEle.querySelectorAll(".ks-breadcrumb-item-link");
        expect(linkNode.length).to.equal(3);
    });

});