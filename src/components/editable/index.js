import KSCEditable from './editable.vue';

KSCEditable.register = function(Vue) {
  Vue.component(KSCEditable.name, KSCEditable);
};

export default KSCEditable;