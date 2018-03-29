import Vue from 'vue'
import KSCMessage from 'src/components/message/index'

KSCMessage.register(Vue);


describe('KSCMessage', () => {
    let messageVM;

    afterEach(() => {
        messageVM.$destroy();
    });

    //KSCMessage type is info
    it('should render correct info message', () => {
        messageVM = Vue.prototype.$Message.info('信息提示');
        let messageEle = messageVM.$el;
        let messageNode = messageEle.querySelectorAll(".ks-message-content")[0];
        expect(messageNode.classList.contains('ks-message-info')).to.be.true;
    });

    //KSCMessage type is success
    it('should render correct success message', () => {
        messageVM = Vue.prototype.$Message.success('成功提示');
        let messageEle = messageVM.$el;
        let messageNode = messageEle.querySelectorAll(".ks-message-content")[0];
        expect(messageNode.classList.contains('ks-message-success')).to.be.true;
    });

    //KSCMessage type is error
    it('should render correct info error', () => {
        messageVM = Vue.prototype.$Message.error('错误提示');
        let messageEle = messageVM.$el;
        let messageNode = messageEle.querySelectorAll(".ks-message-content")[0];
        expect(messageNode.classList.contains('ks-message-error')).to.be.true;
    });

    //KSCMessage type is warning
    it('should render correct info warning', () => {
        messageVM = Vue.prototype.$Message.warning('错误提示');
        let messageEle = messageVM.$el;
        let messageNode = messageEle.querySelectorAll(".ks-message-content")[0];
        expect(messageNode.classList.contains('ks-message-warning')).to.be.true;
    });

});