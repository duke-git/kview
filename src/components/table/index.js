import KSCTable from './table.vue';

KSCTable.register = function(Vue) {
  Vue.component(KSCTable.name, KSCTable);
};

export default KSCTable;