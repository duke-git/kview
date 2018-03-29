import Vue from 'vue'
import KSCEditable from 'src/components/editable/editable'

/**
 * @desc 获取生成的vm
 * @param {Object} Component 组件
 * @param {Object} propsData props数据
 * @return {Object} vue实例
 */
function getRenderedVm (Component, propsData) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor({ propsData }).$mount()
    return vm
}

describe('KSCEditable', () => {
    let editableVM;

    afterEach(() => {
        editableVM.$destroy();
    });

    //测试默认editable
    it('should render correct text state of editable', () => {
        let text = '可编辑文字';
        editableVM = getRenderedVm(KSCEditable, {
            text: text
        });
        let editableEle = editableVM.$el;
        let textNode = editableEle.querySelectorAll(".ks-editable-text")[0];
        expect($(textNode).text().trim()).to.equal(text);
    });

    //测试disabled
    it('should render correct disabled state of editable', () => {
        editableVM = getRenderedVm(KSCEditable, {
            disabled: true
        });
        let editableEle = editableVM.$el;
        let contentNode = editableEle.querySelectorAll(".ks-editable-content")[0];
        expect(contentNode.classList.contains('ks-editable-disabled')).to.be.true;
    });

    //测试isEditing
    it('should render correct editing state of editable', () => {
        editableVM = getRenderedVm(KSCEditable, {
            isEditing: true
        });
        let editableEle = editableVM.$el;
        let inputNode = editableEle.querySelectorAll("input")[0];
        expect(inputNode.classList.contains('ks-editable-input')).to.be.true;
    });
});