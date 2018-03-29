import KSCDialog from './dialog.vue';

KSCDialog.register = function(Vue) {
  Vue.component(KSCDialog.name, KSCDialog);
};

export default KSCDialog;