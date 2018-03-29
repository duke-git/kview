/**
 * Created by LIJIA8 on 2017/2/16.
 */
import Vue from 'vue';
import KSCSteps from 'src/components/steps/steps'

// 创建测试步骤条
function createTestSteps (options) {
    let {props, value} = options;
    const Steps = Vue.extend({
        components: {
            KSCSteps
        },
        template: `<KSCSteps ${props}="${value}">测试steps</KSCSteps> `
    });

    let vm = new Steps().$mount();
    return vm;
};

describe('KSCSteps', () => {
    let vm, vmprop;
    vm = createTestSteps({props: ":steps", value: "[{text: 'test1'},{text: 'test2'},{text: 'test3'}]"});
    afterEach(() => {
        vm.$destroy();
    });
    // 测试组件可以按照传入的steps数组返回正确数量的步骤li元素
    it('should render correct quantity of li element', () => {//console.log("length", vm.$el.getElementsByTagName('li').length);
        expect(vm.$el.getElementsByTagName("li").length).to.equal(3);
    });
    // 测试组件返回每一步步骤说明与传入text相同
    it('should render correct step description ', () => {
        expect(vm.$el.getElementsByTagName('li')[0].childNodes[1].textContent.trim()).to.equal("test1");
        expect(vm.$el.getElementsByTagName('li')[1].childNodes[1].textContent.trim()).to.equal("test2");
        expect(vm.$el.getElementsByTagName('li')[2].childNodes[1].textContent.trim()).to.equal("test3");
    });
    // 测试组件返回步骤序列
    it('should render correct step index', () => {
        expect(vm.$el.getElementsByTagName('span')[0].textContent).to.equal('1');
        expect(vm.$el.getElementsByTagName('span')[1].textContent).to.equal('2');
        expect(vm.$el.getElementsByTagName('span')[2].textContent).to.equal('3');
    });
    //测试组件能够根据active渲染在正确step上
    it('should render correct active step', () => {
        vmprop = createTestSteps({props: ':active', value: 0});
        expect(vmprop.$el.getElementsByTagName('li')[0].classList.contains('active')).to.be.true;
    })
});




