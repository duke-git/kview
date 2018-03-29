<template>
    <div class="example-container" v-html="content"></div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../styles/demo-md-common.styl"
</style>
<script>
    import KSCForm from 'src/components/form/index'
    import KSCButton from 'src/components/button/index'
    import KSCMessage from 'src/components/message/index'
    import KSCCheckbox from 'src/components/checkbox/index'
    import KSCCheckboxGroup from 'src/components/checkbox-group/index'
    import KSCRadio from 'src/components/radio/index'
    import KSCRadioGroup from 'src/components/radio-group/index'
    import KSCSelect from 'src/components/select/index'
    import KSCDatetimepicker from 'src/components/datetimepicker/index'
    import Utils from '../utils.js'
    import Vue from 'vue'

    let KSCFormItem = KSCForm.item;
    KSCForm.register(Vue)
    KSCFormItem.register(Vue)

    KSCButton.register(Vue)
    KSCCheckbox.register(Vue)
    KSCCheckboxGroup.register(Vue)
    KSCRadio.register(Vue)
    KSCRadioGroup.register(Vue)
    KSCSelect.register(Vue)
    KSCMessage.register(Vue)
    KSCDatetimepicker.register(Vue)

    export default {
        name: 'form-demo',
        mixins: [Utils],
        data() {
          return {
              formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'string', message: '请选择日期', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                    ]
                },
                citys: [
                    {label: '北京', value: 'beijing'},
                    {label: '上海', value: 'shanghai'},
                    {label: '天津', value: 'tianjin'}
                ],
                content: {}
          }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                        console.log(this.formValidate.interest);
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
