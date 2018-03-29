import Vue from 'vue'
import KSCDialog from 'src/components/dialog/dialog'

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

describe('KSCDialog', () => {
    let dialogVM;

    afterEach(() => {
        dialogVM.$destroy();
    });

    //测试KSCDialog
    it('should render correct title of dialog', () => {
        dialogVM = createVue(`
            <KSCDialog title="对话框标题">
                <p>对话框内容</p>
                <p>对话框内容</p>
                <p>对话框内容</p>
            </KSCDialog>
        `);
        let dialogEle = dialogVM.$el;
        let titleNode = dialogEle.querySelectorAll(".ks-dialog-title")[0];
        expect(titleNode.innerHTML.trim()).to.equal("对话框标题");
    });

});
