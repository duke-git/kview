<template>
    <div class= "btn-opt-container">
        <span v-for="(item, index) in items"  
            class="ks-btn ks-btns-operation ks-btns-option "
            :class= "{active: item.status== 'checked',disabled: item.disabled}"
            @click= "handleclick(index,item)"
            :value= "value"
        >{{ item.text}}</span>
    </div>
</template>
<script>
    export default {
        name: 'KSCBtnOpt',
        props: {
            data:{ 
                type: Array,
                default: [],  
                required: true
            },
            value:{
                type:Object
            },

        },
        data() {
            return {
                items: this.data,
                
            }
        },
        computed: {

        },
        mounted(){
            var self = this;
            if(JSON.stringify(this.value)!= '{}'){ 
                //用户传默认value时
                this.status= 'checked';
                _.map(this.data,function(item,index){
                    if(item.value == self.value.value){
                        self.data[index].status= 'checked';
                        self.$emit('input',self.data[index]);
                    }else{
                        self.data[index].status= '';
                    }
                })
                return 
            }
            
            var checked= _.find(this.data,function(item){
                return item.status == 'checked';
            });
            
            if(!checked){ //没有传status= ‘checked’时
                if(this.data[0].disabled){
                    this.data[1].status= 'checked';
                    this.$emit('input', this.data[1]);
                }else{
                    this.data[0].status= 'checked';
                    this.$emit('input', this.data[0]);
                }
            }else{
                var obj = _.find(this.data,function(item){
                    return item.status == 'checked';
                });
                this.$emit('input',obj);
            }
        },
        methods: {
            handleclick(index,item) {
                if(item.disabled){
                    return 
                }
                _.map(this.data, (item,position)=>{
                    if(index == position){
                        item.status = 'checked';
                        this.$emit('on-option',item);
                        this.$emit('input',item);
                    }else{
                        item.status = '';
                    }
                })
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .btn-opt-container
        span 
            margin-left -1px
            border-radius 0px
            cursor pointer
            position relative
            &:fisrt-child
                margin-left 0px
        .active 
            background #eaf6fd
            border-color #35a1f4
            color #35a1f4
            border-right 1px solid 
            z-index 2
        .disabled
            cursor not-allowed
            background #efefef
            color #898989
            &:hover
              color #898989
    

</style>