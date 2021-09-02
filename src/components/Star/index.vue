<template>
  <span class="star">
    <span class="iconfont default">
      &#xe638;&#xe638;&#xe638;&#xe638;&#xe638;
    </span>
    <span class="iconfont show" v-html="showStar"></span>
  </span>
</template>

<script>
export default {
  name: "star",
  props: {
    star: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    showStar() {
      let starStr = "";
      for (let i = 0; i < parseInt(this.star); i++) {
        starStr += "&#xe638;";
      }
      return starStr;
    },
  },
};
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 10px;
}

.star {
  position: relative;
  margin: 0px 2px;
  .default {
    color: #d1d1d1;
  }
  .show {
    position: absolute;
    left: 0;
    top: 22%;
    color: #ff9a0d;
  }
}
</style>
