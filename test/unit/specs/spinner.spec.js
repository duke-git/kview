import Vue from 'vue';
import KSCSpinner from 'src/components/spinner/spinner';

function createTestSpinner (option) {
    let {props, value} = option;
    const SpinnerTest = Vue.extend({
        components: {
            KSCSpinner
        },
        template: `<KSCSpinner ${props}="${value}">测试spinner</KSCSpinner>`
    });

    return new SpinnerTest().$mount();
}

describe('KSCSpinner', () => {
    let vm;
    afterEach(() => {
        vm.$destroy();
    });

    //测试Spinner value 属性
    it('should value be setted', () => {
        vm = createTestSpinner({
            props: ":value",
            value: 0
        });
        let input = vm.$el.getElementsByTagName('input')[0];
        expect(parseInt(input.value)).to.equal(0);
    });

    //测试Spinner max 属性
    it('should max be setted', () => {
        vm = createTestSpinner({
            props: ":max",
            value: 6
        });
        let input = vm.$el.getElementsByTagName('input')[0];
        expect(parseInt(input.getAttribute('max'))).to.equal(6);
    });

    //测试Spinner min 属性
    it('should min be setted', () => {
        vm = createTestSpinner({
            props: ":min",
            value: -3
        });
        let input = vm.$el.getElementsByTagName('input')[0];
        expect(parseInt(input.getAttribute('min'))).to.equal(-3);
    });

    //测试Spinner disabled 属性
    it('should disabled be setted', () => {
        vm = createTestSpinner({
            props: ":disabled",
            value: true
        });
        let input = vm.$el.getElementsByTagName('input')[0];
        expect(Boolean(input.getAttribute('disabled'))).to.equal(true);
    });

    //测试Spinner step 属性
    it('should step be setted', () => {
        vm = createTestSpinner({
            props: ":step",
            value: 3
        });
        let input = vm.$el.getElementsByTagName('input')[0];
        expect(parseInt(input.getAttribute('step'))).to.equal(3);
    });
});
