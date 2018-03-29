import KSCMessage from './message.vue';
import Vue from 'vue';
import {Util} from '../../utils/index';

function createMessageVm(Compo) {
  if (Object.prototype.toString.call(Compo) === '[object String]') {
      const div = document.createElement('div');
      div.id = Util.getUUID();
      document.body.appendChild(div);
      Compo = { template: Compo, el: div };
  }
  return new Vue(Compo).$mount();
}

function showMessage(options) {
    let messageVM = createMessageVm(`
        <KSCMessage type=${options.type} 
            :timeout=${options.timeout}
            text=${options.text}
            :closable=${options.closable}
            :loading=${options.loading}
            :onClose=${options.onClose}
        >
        </KSCMessage>
    `);

    return messageVM;
}

function info (text, timeout=2000, onClose=null, closable=false) {
    let options = {
        text,
        timeout,
        onClose,
        closable,
        type: 'info',
        loading: false
    }
    return showMessage(options);
}

function success (text, timeout=2000, onClose=null, closable=false) {
    let options = {
        text,
        timeout,
        onClose,
        closable,
        type: 'success',
        loading: false
    }
    return showMessage(options);
}

function warning (text, timeout=2000, onClose=null, closable=false) {
    let options = {
        text,
        timeout,
        onClose,
        closable,
        type: 'warning',
        loading: false
    }
    return showMessage(options);
}

function error (text, timeout=2000, onClose=null, closable=false) {
    let options = {
        text,
        timeout,
        onClose,
        closable,
        type: 'error',
        loading: false
    }
    return showMessage(options);
}

function loading (text, timeout=2000, onClose=null, closable=false) {
    let options = {
        text,
        timeout,
        onClose,
        closable,
        type: 'info',
        loading: true
    }
    return showMessage(options);
}

KSCMessage.register = function(Vue) {
    Vue.prototype.$Message = {};
    Vue.prototype.$Message.info = info;
    Vue.prototype.$Message.success = success;
    Vue.prototype.$Message.warning = warning;
    Vue.prototype.$Message.error = error;
    Vue.prototype.$Message.loading = loading;
    Vue.component(KSCMessage.name, KSCMessage);
};

export default KSCMessage;
