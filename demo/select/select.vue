<template>
    <div class="example-container">
      <div class="example-title-container">
          <h1>Select下拉列表</h1>
          <p>Select下拉列表, 用于展示菜单和选择内容</p>
      </div>
      <div class="example-body-container">
        <h2 class="demo-title">示例</h2>
        <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
              <KSCSelect :options="selectOptions1"></KSCSelect>
            </div>
            <div class="components-comment">
                <p>设置数据源：设置select数据源，需要设置属性options。</p>
                <p>options属性值为数组，item结构=>label是要显示的字段，value是选择后的值。</p>
                <p>eg. {label: '北京', value:'beijing'}</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
               &lt;KSCSelect :options="selectOptions" &gt;&lt;/KSCSelect&gt;
                data() {
                    return selectOptions: [
                        {label: '北京', value: 'beijing'},
                        {label: '上海', value: 'shanghai'}
                    ]
                }
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>
       <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
              <KSCSelect :options="selectOptions1" trigger="hover"></KSCSelect>
            </div>
            <div class="components-comment">
                <p>设置触发模式：select有两种打开方式，鼠标click和鼠标hover, 默认click</p>
                <p>通过设置trigger属性打开select. 本例设置trigger属性值为hover</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
               &lt;KSCSelect :options="selectOptions" trigger="hover" &gt;&lt;/KSCSelect&gt;
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
              <KSCSelect :options="selectOptions1" :searchable="true"></KSCSelect>
            </div>
            <div class="components-comment">
                <p>设置搜索数据源：select可以搜索数据源，设置属性:searchable="true"，可以支持搜索</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
               &lt;KSCSelect :options="selectOptions" :searchable="true" &gt;&lt;/KSCSelect&gt;
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
              <KSCSelect :options="selectOptions1" :value="selectOptions1[0].value"></KSCSelect>
            </div>
            <div class="components-comment">
                <p>设置当前选中条目：设置属性:value="item.value"</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
               &lt;KSCSelect :options="selectOptions" :value="selectOptions1[0].value" &gt;&lt;/KSCSelect&gt;
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="example-body-item">
            <div class="example-demo-container">
                <div class="component-container">
                    <div>
                        <KSCSelect :options="selectOptions1" :disabled="true"></KSCSelect>
                        <KSCSelect :options="selectOptions2"></KSCSelect>
                    </div>
                </div>
                <div class="components-comment">
                    <p>设置禁用select：禁用select分两种：1，禁用整个select。 2，禁用select中的某个option。</p>
                    <p>禁用整个select，设置属性select:disabled="true"。禁用select中的某个option，设置options中的item属性disabled:true</p>
                </div>
            </div>
            <div class="example-code-container">
                <pre>
                &lt;KSCSelect :options="selectOptions" :disabled="true" &gt;&lt;/KSCSelect&gt;
                &lt;KSCSelect :options="selectOptions" &gt;&lt;/KSCSelect&gt;
                    data() {
                        return selectOptions: [
                            {label: '北京', value: 'beijing'},
                            {label: '上海', value: 'shanghai'},
                            {label: '天津', value: 'tianjin', disabled: true}
                        ]
                    }
                </pre>
            </div>
            <div style="clear: both"></div>
        </div>
        <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
              <KSCSelect :options="selectOptions1" @change="handleSelectChange"></KSCSelect>
            </div>
            <div class="components-comment">
                <p>处理select change事件：当select选择item改变时，触发change事件，调用方可以处理。
                    change事件处理函数的参数是当前选择的item({label: XXX, value:XXX})</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
               &lt;KSCSelect :options="selectOptions" @change="handleSelectChange" &gt;
               &lt;/KSCSelect&gt;
               handleSelectChange(item) {
                    alert('当前label：' + item.label + '，当前选择value：' + item.value);
               }
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>

        <h2 class="demo-title">API</h2>
        <h3 class="demo-component-props">Select属性：</h3>
        <table class="component-api-list">
          <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead>
         <tbody>
            <tr>
              <td>options</td>
              <td>select数据源,值为数组。格式：[{label: '北京', value: 'beijing'},
            {label: '上海', value: 'shanghai', disabled: true}]</td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>value</td>
              <td>设置select当前选中的item，传入的值为item的value属性</td>
              <td>任何类型</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>设置select为禁用状态</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>trigger</td>
              <td>设置select打开方式: click, hover</td>
              <td>String</td>
              <td>click</td>
            </tr>
            <tr>
              <td>searchable</td>
              <td>设置select可以搜索数据源</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>width</td>
              <td>设置select长度</td>
              <td>String</td>
              <td>200px</td>
            </tr>
          </tbody>
        </table>
        <h3 class="demo-component-props">Select事件：</h3>
        <table class="component-api-list">
          <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead>
         <tbody>
            <tr>
              <td>change</td>
              <td>处理select选择事件，处理函数的参数是选择的item</td>
              <td>Sring->function</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import KSCSelect from 'src/components/select/select';

export default {
  name: 'select-demo',
  components: {
    KSCSelect
  },
  data() {
      return {
        selectOptions1: [
            {label: '北京', value: 'beijing'},
            {label: '上海', value: 'shanghai'}
        ],
        selectOptions2: [
            {label: '北京', value: 'beijing'},
            {label: '上海', value: 'shanghai'},
            {label: '天津', value: 'tianjin', disabled: true}
        ]
      }
      
  },
  methods: {
    handleSelectChange(item) {
      alert('当前label：' + item.label + '，当前选择value：' + item.value);
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../styles/demo-common.styl"
</style>
