<template>
  <div class="comp-dialog" @click="handClick" v-show="isDialog">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "comp-dialog",
  props: {
    isDialog: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    //   隐藏对话框
    handClick(e) {
      const { className } = e.target;
      console.log(className);
      if (className === "dialog") {
        this.$emit("exitDialog");
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.comp-dialog {
  position: fixed;
  top: 0;
  left: 0;
  .fx-center();
  width: 100vw;
  height: 100vh;
  z-index: 9;
  background: rgba(0, 0, 0, 0.5);
}
</style>
