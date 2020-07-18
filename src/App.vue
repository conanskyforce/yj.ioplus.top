<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>
<script>
import Home from "./views/Home.vue";
import Header from "./views/Header.vue";
export default {
  components: {
    Home,
    Header
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
