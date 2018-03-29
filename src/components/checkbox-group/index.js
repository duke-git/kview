import KSCCheckboxGroup from './checkbox-group.vue';

KSCCheckboxGroup.register = function(Vue) {
  Vue.component(KSCCheckboxGroup.name, KSCCheckboxGroup);
};

export default KSCCheckboxGroup;