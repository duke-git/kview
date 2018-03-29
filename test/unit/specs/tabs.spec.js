import Vue from 'vue'
import KSCTabs from 'src/components/tabs/tabs'

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

describe('KSCTabs', () => {
    let tabsVM;

    let tabsProps =  {
        tabs: {
            tabHeaders: [
                {show: true, active: true, label: 'tab0', value: 'tab0', closable: true}, 
                {show: true, active: false, label: 'tab1', value: 'tab1', closable: true},
                {show: true, active: false, label: 'tab2', value: 'tab2'},
                {show: true, active: false, label: 'tab3', value: 'tab3', disabled: true}
            ],
            tabPanels: {
                tab0: Vue.extend({
                            template: '<p style="margin-bottom: 30px;">tab00000000000000000</p>'
                        }),
                tab1: Vue.extend({
                            template: '<p style="margin-bottom: 30px;">tab11111111111111111</p>'
                        }),
                tab2: Vue.extend({
                            template: '<p style="margin-bottom: 30px;">tab22222222222222222</p>'
                        }),
                tab3: Vue.extend({
                    template: '<p style="margin-bottom: 30px;">tab3333333333333333</p>'
                })
            }
        }
    };

    //测试active tab数量，始终为1
    it('should render correct number of active tab', () => {
        tabsVM = getRenderedVm(KSCTabs, tabsProps);
        tabsVM.$nextTick(() => {
            let tabsEle = tabsVM.$el;
            let activeEle = tabsEle.querySelectorAll(".active");
            expect(activeEle.length).to.be.equal(1);
            tabsVM.$destroy();
        });
    });

    //测试disabled tab。数量 1
    it('should render correct number of disabled tab', () => {
        tabsVM = getRenderedVm(KSCTabs, tabsProps);
        tabsVM.$nextTick(() => {
            let tabsEle = tabsVM.$el;
            let disabedEle = tabsEle.querySelectorAll(".tab-btn-disabed");
            expect(disabedEle.length).to.be.equal(1);
            tabsVM.$destroy();
        });
    });

    //测试点击tabs
    it('should render correct state when click tab', () => {
        tabsVM = getRenderedVm(KSCTabs, tabsProps);
        tabsVM.$nextTick(() => {
            let tabsEle = tabsVM.$el.querySelectorAll('.tab-btn');
            $(tabsEle[1]).trigger('click');
            tabsVM.$nextTick(() => {
                expect(tabsVM.tabs.tabHeaders[1].active).toBe(true);
                expect(tabsVM.tabs.tabHeaders[0].active).toBe(false);
                tabsVM.$destroy();
            });
        });
    });

});