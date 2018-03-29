import Vue from 'vue';
import KSCIcon from 'src/components/icon/icon';
import {Util} from 'src/utils/index';

function createTestIcon(option) {
  let {props, value} = option;
  const Icon = Vue.extend({
      components: {
          KSCIcon
      },
      template: `<KSCIcon ${props}="${value}"></KSCIcon>`
  });

  let vm = new Icon().$mount();
  return vm;
}
describe('KSCIcon', () => {
  let vm;
  afterEach(() => {
      vm.$destroy();
  });

  //测试Icon属性type
  it('should render correct logo-32 type icon', () => {
    vm = createTestIcon({props: "type", value: "logo-32"});
    let iconEle = vm.$el;
    expect(iconEle.classList.contains('icon-logo-32')).to.be.true;
  })

  //测试Icon属性size
  it('should render correct size(40px) icon', () => {
    vm = createTestIcon({props: "size", value: "40"});
    let iconEle = vm.$el;
    expect(iconEle.style.fontSize).to.equal("40px");
  })

  //测试Icon属性color
  it('should render correct color(#ffffff) icon', () => {
    vm = createTestIcon({props: "color", value: "#ffffff"});
    let iconEle = vm.$el;
    expect(Util.colorHex(iconEle.style.color)).to.equal("#ffffff");
  })

})
