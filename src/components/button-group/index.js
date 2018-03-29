import KSCButtonGroup from './button-group.vue';

KSCButtonGroup.register = function(Vue) {
  Vue.component(KSCButtonGroup.name, KSCButtonGroup);
};

export default KSCButtonGroup;