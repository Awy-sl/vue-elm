<template>
  <div class="go-back" @click="goBack">
    <span class="iconfont">
      &#xe633;
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 18px;
}
</style>
