import KSCSwitch from './switch.vue';

KSCSwitch.register = function(Vue) {
  Vue.component(KSCSwitch.name, KSCSwitch);
};

export default KSCSwitch;