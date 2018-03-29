import Vue from 'vue'
import KSCSelect from 'src/components/select/select'

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

describe('KSCSelect', () => {
    let selectVM;

    let options = [
        {label: '北京市', value: 'beijing'},
        {label: '上海市', value: 'shanghai'},
        {label: '天津市', value: 'tianjin'},
        {label: '重庆市', value: 'chongqing', disabled: true}
    ];

    afterEach(() => {
        selectVM.$destroy();
    });

    //测试Select渲染成功
    it('should render correct number of options', () => {
        selectVM = getRenderedVm(KSCSelect, {
            options: options
        });
        let selectEle = selectVM.$el;
        let optionsNum = selectEle.querySelectorAll("li").length;
        expect(optionsNum).to.equal(options.length);
    });

    //测试Select属性disabled
    it('should render correct disabled select', () => {
        selectVM = getRenderedVm(KSCSelect, {
            options: options,
            disabled: true
        });
        let buttonEle = selectVM.$el.getElementsByTagName('button')[0];
        expect(buttonEle.classList.contains('ks-dropdown-disabled')).to.be.true;
    })

    //测试Select属性disabled
    it('should render correct searchable select', () => {
        selectVM = getRenderedVm(KSCSelect, {
            options: options,
            searchable: true
        });
        let inputEle = selectVM.$el.getElementsByTagName('input');
        expect(inputEle.length).to.be.equal(1);
    })

    //测试Select属性disabled option item
    it('should render correct one disabled item in options', () => {
        selectVM = getRenderedVm(KSCSelect, {
            options: options
        });
        let spanEles = selectVM.$el.querySelectorAll('span');
        expect(spanEles.length).to.be.equal(2);
    })
});