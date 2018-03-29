import KSCButton from './button.vue';

KSCButton.register = function(Vue) {
  Vue.component(KSCButton.name, KSCButton);
};

export default KSCButton;