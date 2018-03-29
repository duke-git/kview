import KSCIcon from './icon.vue';

KSCIcon.register = function(Vue) {
  Vue.component(KSCIcon.name, KSCIcon);
};

export default KSCIcon;