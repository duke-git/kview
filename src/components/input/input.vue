<template>
    <div class = "ks-input" v-if="type !== 'textarea'"> 
        <label for="">{{label}}</label>
        <input class= "ks-form-text" 
            ref="input"
            :type="type" 
            :disabled = "disabled"
            :placeholder = "placeholder" 
            :class='{disabled:disabled}'
            :icon="icon"
            @keyup.enter="handleEnter"
            @blur="handleBlur"
            @change="handleChange"
            @input="handleInput" 
            :value="value"
        />
        <a class="input-button" @click="handleIconClick" :class='{iconNoActive:!icon}'>
            <KSCIcon :type="IconType" class="input-icon" ></KSCIcon>            
        </a>
    </div>
    <textarea 
        v-else
        ref="textarea"
        class='input-textarea'
        :rows="rows"
        :disabled = "disabled"
        :placeholder = "placeholder" 
        :class='{disabled:disabled}'
        :icon="icon"
        @keyup.enter="handleEnter"
        @blur="handleBlur"
        @change="handleChange"
        @input="handleInput" 
        :value="value"
    >
    </textarea>
</template>
<script>
    import KSCIcon from '../icon/icon'

    export default {
        name: 'KSCInput',
        props:{
            label:{
                type:String,
                required:false,
                default:''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder:{
                type: String,
                default:''
            },
            icon:{
                type:Boolean,
                default: false
            },
            IconType:{
                type: String,
                default:'search-20'
            },
            type:{
                type: String,
                default: 'text'
            },
            rows:{
                type:Number,
                default:2
            },
            value:{
                type:String
            }
        },
        data (){
            return {
              
            }
        },
        computed: {
            
        },
        mounted(){
            
        },
        methods: {
            handleEnter(event){
                this.$emit('on-enter', event);
            },
            handleBlur(event){
                this.$emit('on-blur',event);
            },
            handleChange(event){
                this.$emit('on-change',event);
                this.$emit('input', event.target.value)
            },
            handleInput(event){
                this.$emit('on-input',event);
                this.$emit('input', event.target.value)
            },
            handleIconClick(event){
                this.$emit('on-click',event);
            }
            
        },
        components: {
			KSCIcon
		}
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ks-input
        display inline-block
        .disabled
            cursor not-allowed
            color #ccc
            opacity 1
            background-color #f3f3f3
            &:hover
                border #ccc 1px solid
        label
            font-weight 400
            margin-right 10px 
            float left
            margin-top 5px
    .input-icon
        float right
        padding 7px 
        font-size 13px !important
        border-radius 0 3px 3px 0
        border-left-width 0px
        background #eee
        border 1px solid #ccc
        border-left-width 0px
        &:hover 
            cursor pointer
    .iconNoActive
        display none
    .input-textarea
        border 1px solid #ccc    
        max-width 100%
        width 100%
        padding 7px 4px
        font-size 14px
</style>