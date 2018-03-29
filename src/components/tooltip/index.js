import KSCTooltip from './tooltip.vue';

KSCTooltip.register = function(Vue) {
  Vue.component(KSCTooltip.name, KSCTooltip);
};

export default KSCTooltip;