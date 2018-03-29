import KSCForm from './form.vue';
import KSCFormItem from './form-item.vue';

KSCForm.register = function(Vue) {
  Vue.component(KSCForm.name, KSCForm);
};

KSCFormItem.register = function(Vue) {
  Vue.component(KSCFormItem.name, KSCFormItem);
};

KSCForm.item = KSCFormItem;
export default KSCForm;