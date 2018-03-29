import KSCBreadcrumb from './breadcrumb.vue';
import KSCBreadcrumbItem from './breadcrumb-item.vue';

KSCBreadcrumb.register = function(Vue) {
  Vue.component(KSCBreadcrumb.name, KSCBreadcrumb);
};

KSCBreadcrumbItem.register = function(Vue) {
  Vue.component(KSCBreadcrumbItem.name, KSCBreadcrumbItem);
};

KSCBreadcrumb.item = KSCBreadcrumbItem;
export default KSCBreadcrumb;