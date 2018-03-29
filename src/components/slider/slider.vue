<template>
    <div class="ks-drag c-slider c-clearfix" :showRange="showRange" :unit="unit" :max="max" :min="min" :step="step" :width="width">
        <div class="slider-wrap">
            <div class="ks-drag-box" ref="dragbox" @click="onDragBoxClick" :style="dragboxStyle" :class="{'dragbox-disabled': disabled}">
                <div class="slider" ref="slider" @mousedown="onSliderDown" :style="sliderStyle" :class="{'slider-disabled': disabled}">
                    <div class="line"></div>
                </div>
                <div class="bar" :style="barStyle" :class="{'bar-disabled': disabled}"></div>
            </div>
            <div class="range-box" v-if="showRange">
                <span class="left-text">{{min}} {{unit}}</span>
                <span class="right-text">{{max}} {{unit}}</span>
            </div>
        </div>
        <input type="text" class="ks-form-text val" v-model="inputValue" :disabled="disabled"
               @change="inputChange"
               :class="{'input-disabled': disabled}"
               />
        <span class="text">{{unit}}</span>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ks-drag
        text-align left
        .slider-wrap
            float left
            cursor pointer
        .ks-drag-box
            margin 10px 0
        .slider
            z-index 99
        .range-box
            width:100%
            position relative
        .bar
            height 20px
            position absolute
            background-color #94cdf9
            top 0px
        .bar-disabled
            background-color #bbb
        .left-text
            position absolute
            top 40px
        .right-text
            position absolute
            top 40px
        .input-disabled
            cursor not-allowed
            background-color #efefef
            &:hover
               border 1px solid #ccc
        .dragbox-disabled
            cursor not-allowed
        .slider-disabled
            cursor not-allowed
            background-color #ccc



    .c-clearfix
        &:after
            clear both
            content ''
            display block
            font-size 0
            height 0
            visibility hidden


</style>
<script>
    export default{
        name: 'KSCSlider',
        props: {
            showRange: {
                type:Boolean,
                default: true
            },
            unit: String,
            max:{
                type: Number,
                default: 100
            },
            min: {
                type: Number,
                default: 0
            },
            value: {
                type: Number,
                default: 0
            },
            step: {
                type: Number,
                default: 1
            },
            disabled: {
                type: Boolean,
                default: false
            },
            width: Number,
            stop: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                startX: 0,
                currentX: 0,
                startPosition: 0,
                newPosition: null,
                currentValue: this.value,
                dragging: false,
                inputValue: this.value
            }
        },
        mounted() {
          this.inputChange();
        },

        watch: {
            currentValue(val,oldval) {
                this.$emit('change',val);
            }
        },

        computed: {
            barSize() {
                return ((this.currentValue - this.min) / (this.max - this.min)) * 100 + '%'
            },

            barStyle() {
                return {
                    width: this.barSize
                }
            },

            sliderPosition() {
                return ((this.currentValue - this.min) / (this.max - this.min)) * 100  + '%'
            },

            sliderStyle() {
                return {
                    left: this.sliderPosition
                }
            },
            dragboxStyle() {
                return {
                    width: this.width + 'px'
                }
            }

        },

        methods: {
            onSliderDown(event) {
                if(this.disabled) return;
                event.preventDefault();
                this.onSlideStart(event);
                window.addEventListener('mouseover', this.onSliding);
                window.addEventListener('mouseup', this.onSlideEnd);
            },

            onSlideStart(event) {
                this.dragging = true;
                this.startX = event.clientX;
                this.startPosition = parseFloat((this.currentValue - this.min) / (this.max - this.min));
            },

            onSliding(event) {
                let diff = 0,
                  sliderSize;
                this.currentX = event.clientX;
                sliderSize = this.$refs.dragbox.offsetWidth;
                diff = (this.currentX - this.startX) / sliderSize;
                this.newPosition = this.startPosition + diff;
                this.setSliderPosition(this.newPosition)

            },

            setSliderPosition(position) {
                if(position < 0 ) position = 0;
                if(position > 1)  position = 1;
                this.currentValue = this.min + Math.round((this.max - this.min) * position / this.step) * this.step;
                this.inputValue = this.currentValue;

            },

            onSlideEnd() {
              if(this.dragging) {
                  setTimeout(() => {
                    this.dragging = false;
                    this.setSliderPosition(this.newPosition);
                    this.$emit('stop', this.currentValue);
                  },0);
                  window.removeEventListener('mouseover', this.onSliding);
                  window.removeEventListener('mouseup', this.onSlideEnd);
              }

            },

           onDragBoxClick(event) {
                if(this.disabled || this.dragging) return;
                this.setSliderPosition((event.clientX - this.$refs.dragbox.getBoundingClientRect().left) / this.$refs.dragbox.offsetWidth )
           },

            inputChange() {
                if (this.inputValue < this.min) this.inputValue = this.min;
                if (this.inputValue > this.max) this.inputValue = this.max;
                this.inputValue = Math.round(this.inputValue / this.step) * this.step;
                this.currentValue = this.inputValue;
            },

        }

    }
</script>
