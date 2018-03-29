<template>
<transition-group name="fold">
    <div class="ks-message-wrapper" v-bind:key="wrapper">
        <div class="ks-message-content" :class="typeClass">
            <span :class="textClass">{{ text }}</span>
            <i class="icon-loading" v-if="loading"></i>
            <i class="icon icon-close-20" v-if="closable" @click="close"></i>
        </div>
    </div>
</transition-group>
</template>
<script>
    export default {
        name: 'KSCMessage',
        props: {
            type: {
                type: String,
                required: true,
                default: 'info'
            },
            text: {
                type: String,
                required: false,
                default: ''
            },
            closable: {
                type: Boolean,
                required: false,
                default: false
            },
            loading: {
                type: Boolean,
                required: false,
                default: false
            },
            timeout: {
                type: Number,
                default: 2000
            },
            onClose: {
                type: Function,
                required: false,
                default: function() {}
            }
        },
        data () {
            return {
                wrapper: "wrapper"
            };
        },
        methods: {
            close() {
                document.body.removeChild(document.getElementsByClassName('ks-message-wrapper')[0].parentElement);
                if(this.onClose) {
                    this.onClose();
                }
            }

        },
        computed:　{
            typeClass() {
                const type = this.type;
                let typeClass = `ks-message-${type}`;
                return typeClass;
            },
            textClass() {
                const loading = this.loading;
                return [
                    {
                        'ks-message-text-loading': loading,
                    }
                ]
            }
        },
        mounted () {
            this.timer = setTimeout(() => {
                let messageNode = document.getElementsByClassName('ks-message-wrapper')[0];
                if(messageNode) {
                    document.body.removeChild(messageNode.parentElement);
                }
            }, this.timeout);
        },
        beforeDestroy () {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

.ks-message-wrapper
    position: fixed
    top: 30px
    z-index: 1000
    outline: 0
    left: 50%
    animation: mymove 1s;
    .ks-message-content
        box-sizing: border-box
        height: 35px
        line-height: 35px
        font-size: 14px
        padding: 0px 10px
        border-radius: 4px
        .icon
            cursor: pointer
        .icon-loading
            position: absolute
            margin-left: -5px
            margin-top: -28px
            width 20px
            height 20px
            background url('./../../assets/images/icons/loading-icon.gif')
            background-position center center
            background-repeat no-repeat
        .ks-message-text-loading
            margin-left: 25px

    .ks-message-info
        color: #fff
        background-color: #20a0ff
    .ks-message-success
        color: #fff
        background-color: #13ce66
    .ks-message-warning
        color: #fff
        background-color: #ff9c28
    .ks-message-error
        color: #fff
        background-color: #fe4444

@keyframes mymove {
    from {top:0px;}
    to {top:30px;}
}


</style>
