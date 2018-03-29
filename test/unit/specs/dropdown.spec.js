import Vue from 'vue'
import KSCDropdown from 'src/components/dropdown/dropdown'


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

describe('KSCDropdown', () => {
    let dropdownVM;

    afterEach(() => {
        dropdownVM.$destroy();
    });

    //测试KSCDropdown
    it('should render correct length menu item of KSCDropdown', () => {
        dropdownVM = createVue(`
            <KSCDropdown>
                <a slot="header">更多<i class="ks-caret"></i></a>
                <ul class="ks-dropdown-menu" slot="list">
                    <li><a>压马路1</a></li>
                    <li><a>压马路2</a></li>
                    <li><a>压马路3</a></li>
                </ul>
            </KSCDropdown>
        `);
        let dropdownEle = dropdownVM.$el;
        let itemNodes = dropdownEle.querySelectorAll("li");
        expect(itemNodes.length).to.equal(3);
    });

});