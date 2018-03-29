import Vue from 'vue'
import KSCTooltip from 'src/components/tooltip/tooltip'

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

describe('KSCTooltip', () => {
    let tooltipVM;

    afterEach(() => {
        tooltipVM.$destroy();
    });

    //测试默认tooltip
    it('should render correct disabled state of tooltip', () => {
        tooltipVM = getRenderedVm(KSCTooltip, {
            disabled: true
        });
        let tooltipEle = tooltipVM.$el;
        //此处disNode为undefined 
        //tooltipEle.querySelectorAll是选择tooltipEle下面的子元素 不包tooltipEle括本身
        // let disNode = tooltipEle.querySelectorAll(".ks-tooltip")[0];
        // console.log('disNode: ', disNode);
        expect(tooltipEle.classList.contains('ks-tooltip-disabled')).to.be.true;
    });
});