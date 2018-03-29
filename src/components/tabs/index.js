import KSCTabs from './tabs.vue';

KSCTabs.register = function(Vue) {
  Vue.component(KSCTabs.name, KSCTabs);
};

export default KSCTabs;