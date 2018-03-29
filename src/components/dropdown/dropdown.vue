<template>
    <div class="ks-select-dropdown">
        <div class="ks-dropdown"
                :class="{'ks-dropdown-open': open}"
                @click.stop='handleClick($event)'
                @mouseover='handleMouseover()'
                @mouseout='handleMouseout()'
            >   
                <slot name="header"></slot>
                <div class="ks-dropdown-body">
                    <slot name="list"></slot>
                </div>
            </div>
    </div>
</template>
<script>
import {Util} from '../../utils/index';

export default {
    name: 'KSCDropdown',
    props: {
        trigger: {
            type: String,
            required: false,
            default: 'hover'
        }
    },
    data() {
        return {
            open: false,
            mouseTimer: null,
            uuid: '',
        }
    },

    methods: {
        handleClick(e) {
            if(this.trigger !== 'click'){
                return;
            }
            this.open = !this.open;

            this.$nextTick(() => {
                $(document).trigger('select-click', [this.uuid]);
            });
        },
        handleMouseover() {
            if (this.trigger !== 'hover') {
                return;
            }
            clearTimeout(this.mouseTimer);
            this.mouseTimer = null;
            this.open = true;
        },
        handleMouseout() {
            let self = this;
            if (self.trigger !== 'hover') {
                return;
            }
            self.mouseTimer && clearTimeout(self.mouseTimer);
            self.mouseTimer = setTimeout(() => {
                self.open = false;
            }, 200);
        },

        close(e, data) {
            if (data === this.uuid) {
                return;
            }
            this.open = false;
        }
      
    },

    created() {
        let self = this;
        self.uuid = Util.getUUID();
        $(document).on('click', self.close).on('select-click',  self.close);
    },
    destroyed() {
        let self = this;
        $(document).off('click', self.close).off('select-click',  self.close);
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.ks-select-dropdown
    display: inline-block
    .ks-dropdown
        box-shadow: none
        margin-left: 0
        margin-right: 0
        .ks-dropdown-body
            display: none
            overflow-y: hidden
            max-height: none
            padding-bottom: 0
        &.ks-dropdown-open
            .ks-dropdown-body
                display: block
        .ks-dropdown-menu
            width: 100px
        > a
            color: #2283d0
            cursor: pointer
            outline: 0
            text-decoration: none
        .ks-caret
            margin: 6px 0 0 6px
            border-top: 5px solid #3288e9
   
</style>