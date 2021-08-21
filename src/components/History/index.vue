<template>
  <div class="history">
    <div class="title">
      搜索历史
    </div>
    <div class="content"></div>
    <div class="clear">
       清空所有
    </div>
  </div>
</template>

<script>
export default {
  name: "history",
  props: {
    historyList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
