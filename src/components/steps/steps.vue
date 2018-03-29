<template>
    <div class="ks-steps" :class="{'is-center': center}">
        <ul class="ksc-steps ks-stepper">
          <li v-for="(item, index) in steps"
              :class="{
                        active: index == active,
                        completed: index < active
                        }">
            <span v-if="index < active"><i class="icon icon-right2-9"></i></span>
            <span v-else>{{ index + 1 }}</span>
            {{ item.text }}
          </li>
          <div style="clear: both"></div>
        </ul>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ksc-steps
        overflow hidden
        zoom 1
        display: inline-block
    .completed
        span
            border-color #40a54a
            background #40a54a
            color #666
        .icon
            font-size 10px
            color #fff
    .ks-stepper li
        color #333
    .ks-stepper li .active
        span
            color #666
    .is-center
        text-align center
</style>
<script>
    export default {
        name: 'KSCSteps',
        props: {
            steps: {
                type: Array,
                default:() => [
                  {text: 'text1'},
                  {text: 'text2'},
                  {text: 'text3'}
                ]
            },
            active: Number,
            center: {
                type: Boolean,
                default: true
            }
        }
    }
</script>
