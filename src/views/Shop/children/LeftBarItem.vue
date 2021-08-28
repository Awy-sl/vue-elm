<template>
  <li class="left-item">
    <p>{{ name }}</p>
  </li>
</template>

<script>
export default {
  name: "food-list",
  props: {
    name: {
      type: String,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.left-item {
  width: 100px;
  height: 64px;
  font-size: 15px;
  padding: 0 10px;
  line-height: 64px;
  border-bottom: 1px solid #ececec;
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
