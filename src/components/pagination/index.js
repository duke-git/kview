/**
 * Created by SHENLISHA on 2017/5/23.
 */
import KSCPagination from './pagination.vue'

KSCPagination.register = function(Vue) {
	Vue.component(KSCPagination.name, KSCPagination);
};
export default KSCPagination;
