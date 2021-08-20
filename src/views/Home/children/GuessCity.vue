<template>
  <div class="guess-city">
    <div class="top">
      <span class="l">
        当前定位城市：
      </span>
      <span class="r">
        定位不准时，请在城市列表中选择
      </span>
    </div>
    <div class="bottom" @click="$router.push(`/city/${guessCity.id}`)">
      <div class="l">{{ guessCity.name }}</div>
      <span class="iconfont">
        &#xe621;
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "guess-city",
  props: {
    guessCity: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";
.bottom,
.top {
  .fx-sb-center();
  padding: 12px;
  border-bottom: 1px solid #e4e4e4;
}
.top {
  font-size: 14px;
  .l {
    color: @text-color;
  }
  .r {
    color: #9f9f9f;
  }
}
.bottom {
  font-size: 18px;
  color: #3190e8;
  .iconfont {
    color: @text-color;
  }
}
</style>
