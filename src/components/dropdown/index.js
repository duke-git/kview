import KSCDropdown from './dropdown.vue';

KSCDropdown.register = function(Vue) {
  Vue.component(KSCDropdown.name, KSCDropdown);
};

export default KSCDropdown;