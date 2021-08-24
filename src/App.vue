<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar />
  </div>
</template>

<script>
import TabBar from "components/TabBar";
export default {
  name: "app",
  components: {
    TabBar,
  },
};
</script>

<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
