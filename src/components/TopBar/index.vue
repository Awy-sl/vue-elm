<template>
  <div class="top-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <router-link v-if="value === 'city'" class="right" to="/home">
        切换城市
      </router-link>
      <router-link v-else-if="value === 'login'" to="/login" class="right">
        <span>登录|注册</span>
        <span></span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-bar",
  props: {
    value: {
      type: String,
      default() {
        return "";
      },
    },
  },
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
    text-align: center;
    color: #fff;
  }
  .center {
    width: 160px;
    overflow: hidden;
  }
}
</style>
