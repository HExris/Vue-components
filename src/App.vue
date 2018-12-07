<template>
  <div id="app">
    <HomeLayout />
  </div>
</template>

<script>
import "./utils/normalize.css";
import HomeLayout from "./layouts/Home.vue";
export default {
  name: "App",
  components: {
    HomeLayout
  },
  beforeRouteUpdate(to, from, next){
    document.body.title = to.name
  }
};
</script>

<style>
@import url('./utils/iconfont.css');
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  cursor: pointer;
  color: #2c3e50;
  text-decoration: none;
}
a:visited {
  color: #2c3e50;
}
</style>
