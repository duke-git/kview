<template>
    <div class="example-container">
      <div class="example-title-container">
          <h1>Checkbox复选框</h1>
          <p>基础Checkbox复选框组件</p>
      </div>
      <div class="example-body-container">
        <h2 class="demo-title">示例</h2>
        <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
              <KSCCheckbox label="默认checkbox"></KSCCheckbox>
              <KSCCheckbox label="checked为true" :checked="true"></KSCCheckbox>
            </div>
            <div class="components-comment">
                <p>默认checkbox：设置label属性</p>
                <p>默认选中checkbox：设置checked属性为true</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
               &lt;KSCCheckbox label="默认checkbox" &gt;&lt;/KSCCheckbox&gt;
               &lt;KSCCheckbox label="checked为true" :checked="true"&gt;
               &lt;/KSCCheckbox&gt;
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
              <KSCCheckbox label="禁用checkbox"
              :disabled=true></KSCCheckbox>
              <KSCCheckbox label="禁用选择checkbox"
              :disabled=true :checked="true"></KSCCheckbox>
            </div>
            <div class="components-comment">
                <p>禁用checkbox：设置disabled属性为true</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
               &lt;KSCCheckbox label="默认checkbox"  :disabled=true &gt;&lt;/KSCCheckbox&gt;
               &lt;KSCCheckbox label="checked为true" :disabled=true :checked="true"&gt;
               &lt;/KSCCheckbox&gt;
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
              <KSCCheckbox label="checkbox name属性"
              name="testname"></KSCCheckbox>
              <KSCCheckbox label="checkbox value属性"
              value="testvalue"></KSCCheckbox>
            </div>
            <div class="components-comment">
                <p>checkbox name: name属性设置为原生input name</p>
                <p>checkbox value: value属性设置为原生input value。value属性默认值为空</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
               &lt;KSCCheckbox label="checkbox name属性" name="testname"&gt;
               &lt;/KSCCheckbox&gt;
               &lt;KSCCheckbox label="checkbox value属性" value="testvalue"&gt;
               &lt;/KSCCheckbox&gt;
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
              <KSCCheckbox label="checkbox change事件"
                value="testvalue" @change="handleChange">
              </KSCCheckbox>
            </div>
            <div class="components-comment">
                <p>checkbox change事件: 设置change事件处理函数，函数参数为input change event对象</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
               &lt;KSCCheckbox label="checkbox name属性" name="testname"&gt;
               value="testvalue" @change="handleChange"&lt;/KSCCheckbox&gt;
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
              <KSCCheckboxGroup v-model="interest">
                <KSCCheckbox label="打篮球" value="basketball"></KSCCheckbox>
                <KSCCheckbox label="看书" value="read"></KSCCheckbox>
                <KSCCheckbox label="压马路" value="road"></KSCCheckbox>
              </KSCCheckboxGroup>
            </div>
            <div class="components-comment">
                <p>checkbox group: 使用KSCCheckboxGroup，可以指定v-model</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
               &lt;KSCCheckboxGroup v-model="interest"&gt;
                &lt;KSCCheckbox label="打篮球" value="basketball"&gt;&lt;/KSCCheckbox&gt;
                &lt;KSCCheckbox label="看书" value="read"&gt;&lt;/KSCCheckbox&gt;
                &lt;KSCCheckbox label="压马路" value="road"&gt;&lt;/KSCCheckbox&gt;
               &lt;/KSCCheckbox&gt;
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>

        <h2 class="demo-title">API</h2>
        <h3 class="demo-component-props">Checkbox属性：</h3>
        <table class="component-api-list">
          <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead>
         <tbody>
            <tr>
              <td>label</td>
              <td>设置checkbox显示文字</td>
              <td>String</td>
              <td>复选框</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>设置checkbox为禁用状态</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>checked</td>
              <td>设置checkbox默认选中状态</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>value</td>
              <td>设置checkbox value</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>name</td>
              <td>设置checkbox原生input name</td>
              <td>String</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <h3 class="demo-component-props">Checkbox事件：</h3>
        <table class="component-api-list">
          <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead>
         <tbody>
            <tr>
              <td>change</td>
              <td>checkbox选择状态改变事件 input原生change事件，参数是event对象</td>
              <td>Sring->function</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import KSCCheckbox from 'src/components/checkbox/index';
import KSCCheckboxGroup from 'src/components/checkbox-group/index';

export default {
  name: 'checkbox-demo',
  components: {
    KSCCheckbox
  },
  data() {
    return {
      interest: []
    }
  },
  methods: {
    handleChange(e) {
      let value = e.target.value;
      alert('选中的值为: '+value);
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../styles/demo-common.styl"
</style>
