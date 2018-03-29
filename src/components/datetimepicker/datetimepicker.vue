<template>
  <div class='ks-datepicker'>
    <input type="text"
        class="ks-form-text ks-datepicker-input"
        :class="{'ks-datepicker-disabled': disabled}"
        :style="{width: width}"
        :placeholder="placeholder" 
        :value="value" 
        @input="handleInput"
        :disabled="disabled"
    >
    </input>
    <i class='ks-datepicker-icon' 
        :class="{'ks-datepicker-icon-disabled': disabled}"
        @click="handleClickIcon">
    </i>
  </div>
</template>

<script>
import Flatpickr from './lib/flatpickr';
import FlatpickrCss from './lib/flatpickr.css';
import {zh} from './lib/zh';
Flatpickr.localize(zh);

export default {
  name: 'KSCDatetimepicker',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => { return {} }
    },
    value: {
      type: String,
      default: ''
    },
    width: {
        type: String,
        required: false,
        default: '232px'
    },
    disabled: Boolean,
  },
  data () {
    return {
      fpInstance: null
    }
  },
  computed: {
    fpOptions () {
      return JSON.stringify(this.options);
    }
  },
  watch: {
    fpOptions (newOpt) {
      const option = JSON.parse(newOpt);
      for (let o in option) {
        this.fpInstance.set(o, option[o]);
      }
    }
  },
  mounted () {
    const self = this;
    const origOnValUpdate = this.options.onValueUpdate;
    const mountNode = this.$el.getElementsByTagName("input")[0];
    this.fpInstance = new Flatpickr(mountNode, Object.assign(this.options, {
      onValueUpdate: (...args) => {
        self.handleInput(mountNode.value)
        if (typeof origOnValUpdate === 'function') {
          origOnValUpdate();
        }
      },
      onChange: (...args) => {
        this.$emit('change', ...args);
      },
      onMonthChange: (...args) => {
        this.$emit('monthChange', ...args);
      },
      onYearChange: (...args) => {
        this.$emit('yearChange', ...args);
      },
      onOpen: (...args) => {
        this.$emit('open', ...args);
      },
      onClose: (...args) => {
        this.$emit('close', ...args);
      }
    }));
    this.$emit('FlatpickrRef', this.fp);
  },
  destroyed () {
    this.fpInstance.destroy();
    this.fpInstance = null;
  },
  methods: {
    handleInput (e) {
      typeof e === 'string' ? this.$emit('input', e) : this.$emit('input', e.target.value);
    },
    handleClickIcon (e) {
        console.log(this.fpInstance.calendarContainer);
        //此处open 方法无效
        this.fpInstance.open();
        //this.fpInstance.toggle();
        //this.fpInstance.calendarContainer.classList.add("open");
        //this.fpInstance.clear();
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ks-datepicker
        display: inline-block
        position: relative
        > i
            position: absolute
            top: 6px
            right: 10px
            width: 20px
            height: 20px
            background url('./../../assets/images/icons/date-icon.png')
            background-position center center
            background-repeat no-repeat
            background-size: 20px 20px
            cursor: pointer
            display: none
        .ks-datepicker-input
            display: inline-block
            vertical-align: middle
            float: none
            padding: 5px 10px
            //width: 232px
            cursor: pointer

        .ks-datepicker-disabled
            background: #dfdfdf
            cursor: not-allowed
            border: 1px solid #ccc
        .ks-datepicker-icon-disabled
            cursor: not-allowed
</style>