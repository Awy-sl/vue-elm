<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "btn",
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";
.login-btn {
  .fx-center();
  height: 40px;
  border-radius: 4px;
  background: #4cd964;
  color: #fff;
  font-size: 18px;
}
</style>
