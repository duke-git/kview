<template>
    <div class="example-container" v-html="content"></div>
</template>
<style lang='stylus' rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
</style>
<script>
	import KSCRadio from 'src/components/radio/index'
	import KSCRadioGroup from 'src/components/radio-group/index'
	import Vue from 'vue'
	import Utils from '../utils.js'

	//将组件进行全局注册
	KSCRadio.register(Vue);
	KSCRadioGroup.register(Vue);

	export default {
		mixins: [Utils],
		name: 'radio-demo',
		data() {
			return {
				disabled: false,
				disabledTrue: true,
				name: 'test',
				value: '1',
				secvalue: 'test',
				radio: '11',
				test: '1',
				test1: 'test1',
				content: {}
			}
		},
		methods: {
			getValue(val) {
				console.log(val);
			}
		}
	}
</script>
