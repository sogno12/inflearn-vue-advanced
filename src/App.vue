<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
.header {
  color : white;
  background-color : #42b883;
  display: flex;
  padding: 8px;
}
.header .router-link-exact-active {
  color: #35495e;
}
.header a {
  color: white;
}

</style>
