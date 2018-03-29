/**
 * Created by LIJIA8 on 2017/2/27.
 */
import Vue from 'vue';
import KSCRadio from 'src/components/radio/radio';
import KSCRadioGroup from 'src/components/radio-group/radio-group'

//创建测试单选框
function createTestRadio(propsData) {
    const Radio = Vue.extend(KSCRadio);
    let vm = new Radio(propsData).$mount();
    return vm;
}

describe('KSCRadio', () => {
    let vm;
    afterEach(() => {
        vm.$destroy();
    });

    it('the component could be created', () => {
         vm = createTestRadio({
           propsData:{
             label:'test'
           }
         });
        let RadioElement = vm.$el;
        expect(RadioElement.classList.contains('ksc-radio')).to.be.true;
    });

    it('the component could be disabled', () => {
        vm = createTestRadio({
          propsData:{
            disabled: true
          }
        });
        let RadioElement = vm.$el;
        expect(RadioElement.querySelector('.is-disabled')).to.be.ok;
    });

    it('the component should be checked by default', () => {
        let Radio = Vue.extend({
            components:{
                KSCRadio
            },
            template: `<KSCRadio v-model='picked' :label='value'></KSCRadio>`,
            data: function() {
                return {
                    picked: 1,
                    value: 1
                }
            }
        });
      vm = new Radio().$mount();
      let RadioElement = vm.$el;
      expect(RadioElement.querySelector('.is-checked')).to.be.ok;
    })

})
