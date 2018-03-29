<template>
    <div class="example-container">
      <div class="example-title-container">
          <h1>Button按钮</h1>
          <p>基础按钮组件</p>
      </div>
      <div class="example-body-container">
        <h2 class="demo-title">示例</h2>
        <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
              <KSCButton type="default">默认按钮</KSCButton>
              <KSCButton type="primary">主要按钮</KSCButton>
              <KSCButton type="warnning">警告按钮</KSCButton>
              <KSCButton type="operation">操作按钮</KSCButton>
              <KSCButton type="option">选项按钮</KSCButton>
            </div>
            <div class="components-comment">
                <p>按钮类型有：默认按钮、主按钮、警告按钮、操作按钮、选项按钮。</p>
                <p>设置type为default, primary、warnning、operation、option创建不同样式的按钮，不设置为默认样式。</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
               &lt;KSCButton type="default" &gt;主要按钮&lt;/KSCButton&gt;
               &lt;KSCButton type="primary"&gt;默认按钮&lt;/KSCButton&gt;
               &lt;KSCButton type="warnning"&gt;警告按钮&lt;/KSCButton&gt;
               &lt;KSCButton type="operation"&gt;操作按钮&lt;/KSCButton&gt;
               &lt;KSCButton type="option"&gt;选项按钮&lt;/KSCButton&gt;
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>

        <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
              <KSCButton type="default" :disabled="true">禁用按钮</KSCButton>
              <KSCButton type="default" :loading="true"></KSCButton>
              <KSCButton type="default" title="title提示按钮">title提示按钮</KSCButton>
              <KSCButton type="default" @click="handleBtnClick">click事件</KSCButton>
            </div>
            <div class="components-comment">
                <p>禁用按钮：设置:disabled="true"。</p>
                <p>loading按钮：设置type="default", :loading="true"。</p>
                <p>title提示按钮：设置title="提示文字"。</p>
                <p>按钮click事件：设置@click="handleBtnClick"。</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
               &lt;KSCButton type="default"&gt;主要按钮&lt;/KSCButton&gt;
               &lt;KSCButton type="default" :loading="true"&gt;&lt;/KSCButton&gt;
               &lt;KSCButton type="default" title="title提示按钮"&gt;主要按钮&lt;/KSCButton&gt;
               &lt;KSCButton type="default" @click="handleBtnClick"&gt;
                  click事件
               &lt;/KSCButton&gt;
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>

        <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
              <KSCButtonGroup>
                <KSCButton type="option">选项1</KSCButton>
                <KSCButton type="option">选项2</KSCButton>
                <KSCButton type="option">选项3</KSCButton>
                <KSCButton type="option">选项4</KSCButton>
              </KSCButtonGroup>
            </div>
            <div class="components-comment">
                <p>按钮组合使用KSCButtonGroup, 内部嵌套KSCButton。</p>
                <p>按钮竖向排列设置KSCButtonGroup属性:vertical="true"。</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
               &lt;KSCButtonGroup&gt;
                  &lt;KSCButton type="option"&gt;选项1&lt;/KSCButton&gt;
                  &lt;KSCButton type="option"&gt;选项2&lt;/KSCButton&gt;
                  &lt;KSCButton type="option"&gt;选项3&lt;/KSCButton&gt;
                  &lt;KSCButton type="option"&gt;选项4&lt;/KSCButton&gt;
              &lt;/KSCButtonGroup&gt;
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>

        <div class="example-body-item">
          <div class="example-demo-container">
            <div class="component-container">
                <KSCButton type="operation" icon="start-20">开启</KSCButton>
                <KSCButton type="operation" icon="pause-20">关闭</KSCButton>
                <KSCButton type="operation" icon="restart-20">重启</KSCButton>
                <KSCButton type="operation" icon="cart-20">续费</KSCButton>
            </div>
            <div class="components-comment">
                <p>按钮组合使用KSCButtonGroup, 内部嵌套KSCButton。</p>
                <p>按钮竖向排列设置KSCButtonGroup属性:vertical="true"。</p>
            </div>
          </div>
          <div class="example-code-container">
            <pre>
                &lt;KSCButton type="operation" icon="start-20"&gt;开启&lt;/KSCButton&gt;
                &lt;KSCButton type="operation" icon="pause-20"&gt;关闭&lt;/KSCButton&gt;
                &lt;KSCButton type="operation" icon="restart-20"&gt;重启&lt;/KSCButton&gt;
                &lt;KSCButton type="operation" icon="cart-20"&gt;续费&lt;/KSCButton&gt;
            </pre>
          </div>
          <div style="clear: both"></div>
        </div>

        <h2 class="demo-title">API</h2>
        <h3 class="demo-component-props">Button属性：</h3>
        <table class="component-api-list">
          <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead>
         <tbody>
            <tr>
              <td>type</td>
              <td>按钮类型，可选值为
                <code>default</code>、
                <code>primary</code>、
                <code>option</code>、
                <code>operation</code>、
                <code>warning</code>、
              <td>String</td>
              <td>default</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>设置按钮为禁用状态</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>设置按钮为加载中状态</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>title</td>
              <td>设置按钮提示文字</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>click</td>
              <td>设置按钮点击事件</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>设置按钮的图标类型，取值为icon组件的type属性</td>
              <td>String</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3 class="demo-component-props">ButtonGroup属性：</h3>
        <table class="component-api-list">
          <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead>
         <tbody>
            <tr>
              <td>vertical</td>
              <td>设置按钮是否为竖向排列</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import KSCButton from 'src/components/button/index';
import KSCButtonGroup from 'src/components/button-group/index';


export default {
  name: 'button-demo',
  components: {
    KSCButton,
    KSCButtonGroup
  },

  methods: {
    handleBtnClick(event) {
      console.log('click KSCButton event: ', event);
      alert('点击按钮！！！');
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../styles/demo-common.styl"
</style>
