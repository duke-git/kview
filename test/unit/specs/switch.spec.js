import Vue from 'vue'
import KSCSwitch from 'src/components/switch/switch'

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

describe('KSCSwitch', () => {
    let switchVM;

    afterEach(() => {
        switchVM.$destroy();
    });

    //测试默认switch
    it('should render correct off state of switch', () => {
        switchVM = getRenderedVm(KSCSwitch, {});
        let switchEle = switchVM.$el;
        let checked = switchEle.querySelectorAll("input")[0].checked;
        expect(checked).to.be.equal(false);
    });

    //测试switch属性default
    it('should render correct on state of switch', () => {
        switchVM = getRenderedVm(KSCSwitch, {
            default: 'on'
        });
        let switchEle = switchVM.$el;
        let checked = switchEle.querySelectorAll("input")[0].checked;
        expect(checked).to.be.equal(true);
    });

    //测试switch属性disabled
    it('should render correct disabled state of switch', () => {
        switchVM = getRenderedVm(KSCSwitch, {
            disabled: true
        });
        let switchEle = switchVM.$el;
        let switchWrapperEle = switchEle.querySelectorAll(".ks-switch-wrapper")[0];
        expect(switchWrapperEle.classList.contains('ks-switch-disabled')).to.be.true;
    });
});
