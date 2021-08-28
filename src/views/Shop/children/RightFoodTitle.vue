<template>
  <div class="right-food-title">
    <div class="title">
      <div class="l">
        <h4>{{ item.name }}</h4>
        <span>{{ item.description }}</span>
      </div>
      <div class="r">
        <span @click="showInfo = !showInfo" class="iconfont">&#xe6d3;</span>
      </div>
      <div class="detail" v-show="showInfo">
        {{ item.description }}
        <span class="iconfont">
          &#xe622;
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { foodContentMixin } from "@/mixins";

export default {
  name: "right-food-title",
  mixins: [foodContentMixin],
  data() {
    return {
      // 显示商品公告
      showInfo: false,
    };
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.title {
  position: relative;
  .fx-sb-center();
  padding: 10px;
  background: #ececec;
  height: 40px;
  color: #686868;
  .l {
    .fx-center();
    h4 {
      margin-right: 10px;
      font-size: 16px;
    }
    span {
      opacity: 0.6;
      font-size: 12px;
    }
  }
  .detail {
    position: absolute;
    padding: 10px 10px;
    right: 5px;
    bottom: -40px;
    width: 200px;
    background: #676767;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    opacity: 0.9;
    span {
      position: absolute;
      right: 8px;
      top: -12px;
      color: #676767;
      font-size: 12px;
      transform: rotateZ(180deg);
    }
  }
}
</style>
