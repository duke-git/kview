/**
 * Created by chenshilong on 17/2/21.
 */
import KSCSearchBox from './searchbox.vue';

KSCSearchBox.register = function(Vue) {
    Vue.component(KSCSearchBox.name, KSCSearchBox);
};

export default KSCSearchBox;