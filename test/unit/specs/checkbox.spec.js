import Vue from 'vue'
import KSCCheckbox from 'src/components/checkbox/checkbox'

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

describe('KSCCheckbox', () => {
    let checkboxVM;

    afterEach(() => {
        checkboxVM.$destroy();
    });

    //测试checkbox属性checked
    it('should render correct checked checkbox', () => {
        checkboxVM = getRenderedVm(KSCCheckbox, {
            label: '测试checkbox',
            checked: true
        });
        let checkboxEle = checkboxVM.$el;
        let checked = checkboxEle.querySelectorAll("input")[0].checked;
        expect(checked).to.be.equal(true);
    });

    //测试checkbox属性disabled
    it('should render correct disabled checkbox', () => {
        checkboxVM = getRenderedVm(KSCCheckbox, {
            label: '测试checkbox',
            disabled: true
        });
        let checkboxEle = checkboxVM.$el;
        let disabled = checkboxEle.querySelectorAll("input")[0].disabled;
        expect(disabled).to.be.equal(true);
    })

    //测试checkbox属性value
    it('should render correct value checkbox', () => {
        checkboxVM = getRenderedVm(KSCCheckbox, {
            label: '测试checkbox',
            value: 'test'
        });
        let checkboxEle = checkboxVM.$el;
        let value = checkboxEle.querySelectorAll("input")[0].value;
        expect(value).to.be.equal('test');
    })
});