<template>
  <div class="bottom-bar">
    <div class="icon">
      <span class="iconfont" :style="iconBg" @click="handClick">
        &#xe641;
      </span>
      <span class="count" v-show="count">{{ count }}</span>
    </div>
    <div class="settlement">
      <div class="l">
        <div class="price">￥{{ pric }}</div>
        <p class="p">配送费￥{{ shopInfo.float_delivery_fee }}</p>
      </div>
      <div class="start"></div>
      <div class="send show" v-if="pric * 1 >= shopInfo.shipping * 1">
        去结算
      </div>
      <div v-else class="send">还差 ￥{{ shopInfo.shipping }}起送</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "shop-bottom",
  methods: {
    // 显示购物车
    handClick() {
      this.$emit("showShopping");
    },
  },
  computed: {
    ...mapGetters({
      shopInfo: "getShopInfo",
      count: "getCartListNum",
      pric: "getCartListPrice",
    }),
    iconBg() {
      if (this.count > 0) {
        return {
          backgroundColor: "#3190e8",
        };
      } else {
        return {};
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.bottom-bar {
  display: flex;
  position: absolute;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #3d3d3f;
  color: #fff;
  .icon {
    position: relative;
    width: 90px;
    .count {
      position: absolute;
      top: -38%;
      right: 15px;
      .fx-center();
      min-width: 18px;
      height: 18px;
      font-size: 10px;
      background: red;
      color: #fff;
      border-radius: 50%;
    }
  }
  .iconfont {
    .fx-center();
    position: absolute;
    top: -30%;
    left: calc(50% - 25px);
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #3d3d3f;
    font-size: 30px;
    box-shadow: 2px 2px 2px #000;
    border: 5px solid #444444;
  }
  .settlement {
    flex-grow: 1;
    .fx-sb-center();
    font-size: 18px;
    .price,
    .send {
      font-weight: 550;
    }
    .price {
      margin-bottom: 5px;
    }

    .l {
      p {
        font-size: 14px;
      }
    }
    .send {
      .fx-center();
      padding: 8px;
      width: 140px;
      height: 100%;
      background: #535356;
    }
    .show {
      background: #4cd964;
    }
  }
}
.bg {
  background: #3190e8;
}
</style>
