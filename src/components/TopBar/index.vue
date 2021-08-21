<template>
  <div class="top-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-bar",
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/index.less";

.top-bar {
  position: relative;
  z-index: 4;
  .fx-sb-center();
  height: 45px;
  color: @font-color;
  background: @main-color;
  .left,
  .right {
    width: 80px;
    font-size: 15px;
  }
  .left {
    padding-left: 10px;
  }
  .right {
    padding-right: 10px;
    text-align: right;
  }
  .center {
    width: 160px;
    overflow: hidden;
  }
}
</style>
