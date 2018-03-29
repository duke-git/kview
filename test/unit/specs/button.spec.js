import Vue from 'vue'
import KSCButton from 'src/components/button/button'

function createTestButton(option) {
  let {props, value} = option;
  const Button = Vue.extend({
      components: {
          KSCButton
      },
      template: `<KSCButton ${props}="${value}">测试button</KSCButton>`
  });

  let vm = new Button().$mount();
  return vm;//
}

describe('KSCButton', () => {
  let vm;
  afterEach(() => {
      vm.$destroy();
  });
  //测试Button属性type
  it('should render correct default type button', () => {
    vm = createTestButton({props: "type", value: "default"});
    let buttonEle = vm.$el;
    expect(buttonEle.getAttribute("type")).to.equal("default");
  })

  //测试Button属性disabled
  it('should render correct disabled button', () => {
    vm = createTestButton({props: ":disabled", value: "true"});
    let buttonEle = vm.$el;
    expect(buttonEle.classList.contains('data-btn-disabled')).to.be.true;
  })

  //测试Button属性loading
  it('should render correct loading button', () => {
    vm = createTestButton({props: ":loading", value: "true"});
    let buttonEle = vm.$el;
    expect(buttonEle.classList.contains('ks-btn-loading')).to.be.true;
  })

})
//也可以采用如下方式测试组件props
// /**
//  * @desc 获取生成的vm
//  * @param {Object} Component 组件
//  * @param {Object} propsData props数据
//  * @return {Object} vue实例
//  */
// function getRenderedVm (Component, propsData) {
//     const Ctor = Vue.extend(Component)
//     const vm = new Ctor({ propsData }).$mount()
//     return vm
// }

// describe('test button.vue', () => {
//     it('组件加载后，button组件的type应该是「default」', () => {
//         let buttonVM = getRenderedVm(KSCButton, {
//             type: 'default'
//         });
//         expect(buttonVM.type).toEqual('default');
//     });
// });