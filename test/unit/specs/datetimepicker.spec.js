import Vue from 'vue'
import KSCDatetimepicker from 'src/components/datetimepicker/datetimepicker'

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

describe('KSCDatetimepicker', () => {
    let datetimepickerVM;

    afterEach(() => {
        datetimepickerVM.$destroy();
    });

    //测试datetimepicker value
    it('should render correct text state of editable', () => {
        let text = '可编辑文字';
        datetimepickerVM = getRenderedVm(KSCDatetimepicker, {
            value: '2012-02-04'
        });
        let datetimepickerEle = datetimepickerVM.$el;
        let inputNode = datetimepickerEle.querySelectorAll("input")[0];
        expect(inputNode.value).to.equal('2012-02-04');
    });

    //测试disabled
    it('should render correct disabled state of editable', () => {
        datetimepickerVM = getRenderedVm(KSCDatetimepicker, {
            disabled: true
        });
        let datetimepickerEle = datetimepickerVM.$el;
        let inputNode = datetimepickerEle.querySelectorAll("input")[0];
        expect(inputNode.classList.contains('ks-datepicker-disabled')).to.be.true;
    });

});