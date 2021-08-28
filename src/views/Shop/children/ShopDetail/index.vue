<template>
  <div class="shop-detail">
    <top-bar class="top-bar">
      <go-back slot="left" />
      <div class="title" slot="center">
        商家详情
      </div>
    </top-bar>
  </div>
</template>

<script>
export default {
  name: "shop-detail",
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.shop-detail {
  .main-box();
  z-index: 3;
}
.title {
  text-align: center;
  font-size: 20px;
  font-weight: 550;
}
</style>
