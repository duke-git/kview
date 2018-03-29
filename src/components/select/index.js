import KSCSelect from './select.vue';

KSCSelect.register = function(Vue) {
  Vue.component(KSCSelect.name, KSCSelect);
};

export default KSCSelect;