/**
 * Created by LIJIA8 on 2017/3/9.
 */
import axios from 'axios';
import marked from 'marked';
import Vue from 'vue';

export default {
    mounted: function() {
      let url = '/docs/' + this.$route.name + '.md';
      axios.get(url).then((res) => {
        this.content = marked(res.data);
      }).then(() => {
        var $container = this.$el.querySelectorAll('.example');
         Array.from($container).forEach((container) => {
          var code = container.nextElementSibling.innerText.trim();
          var data = Object.assign({}, this.$data);
          var vm = new Vue({
            el: "#" + container.getAttribute('id'),
            data: function() { return data },
            template: '<div class="example"> ' + code + '</div>',
            methods: {
              ...this.$options.methods
            }
          });
          console.log('aa',"#" + container.getAttribute('id'))
         });

      });

  },
}
