import KSCSteps from './steps.vue'

KSCSteps.register = function(Vue) {
    Vue.component(KSCSteps.name, KSCSteps);
};

export default KSCSteps;
