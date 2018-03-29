<template>
  <div class="main-container">
    <Sidebar></Sidebar>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar/sidebar';

export default {
  name: 'app',
  components: {
    Sidebar
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
body
  background #ffffff
.main-container
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  background #fff

.main-content
  padding 15px 15px 15px 165px

</style>
