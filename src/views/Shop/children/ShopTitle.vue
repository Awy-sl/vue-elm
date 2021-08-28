<template>
  <div class="shop-title" :style="titleBg">
    <div class="bg"></div>
    <go-back class="shop-back" />
    <div class="main" @click="goShopDetail">
      <img :src="shopInfo.img" />
      <div class="content">
        <h4>{{ shopInfo.name }}</h4>
        <p class="center">
          商家配送 / 分钟达 / {{ shopInfo.tips }}
          <span class="iconfont">&#xe621;</span>
        </p>
        <p class="bottom">公告：{{ shopInfo.announcement }}</p>
      </div>
    </div>
    <div
      class="activity"
      v-if="shopInfo.activity.length > 0"
      @click="handClick"
    >
      <div class="l">
        <span class="decrease">{{ shopInfo.activity[0].icon_name }}</span>
        {{ shopInfo.activity[0].description }} 专享
      </div>
      <div class="r">
        {{ shopInfo.activity.length }}个活动
        <span class="iconfont">&#xe621;</span>
      </div>
    </div>
  </div>
</template>

<script>
import { shopInfoMixin } from "@/mixins";

export default {
  name: "shop-title",
  mixins: [shopInfoMixin],
  components: {},
  computed: {
    titleBg() {
      return {
        backgroundImage: `url(${this.shopInfo.img})`,
      };
    },
  },
  methods: {
    //   跳转到商品详情页
    goShopDetail() {
      this.$router.push("/shop/shopDetail");
    },
    //  显活动详情
    handClick() {
      this.$emit("showActivityClick");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.shop-back {
  color: #fff;
  position: fixed;
  left: 10px;
  top: 0px;
  z-index: 2;
  font-weight: 900;
}

.shop-title {
  position: relative;
  background-size: 100% 100%;
  z-index: 1;
}
.main {
  height: 90px;
  position: relative;
  z-index: 1;
  display: flex;
  padding: 10px;
  img {
    margin-right: 10px;
    width: 70px;
    height: 70px;
  }
  .content {
    color: #fff;
    .center {
      .fx-sb-center();
    }
    .bottom {
      .text-dot();
      display: inline-block;
      width: 275px;
    }
    h4 {
      font-size: 20px;
      margin-bottom: 5px;
    }
    p {
      margin-bottom: 5px;
      font-size: 14px !important;
    }
  }
}
.activity {
  .fx-sb-center();
  position: relative;
  padding: 0px 10px 10px 10px;
  color: #fff;
  font-size: 12px;
  z-index: 1;
  .l {
    .decrease {
      background: #f07373;
      padding: 2px 4px;
      border-radius: 4px;
    }
  }
  .r {
    .fx-center();
  }
}
.bg {
  position: absolute;
  z-index: 0;
  filter: blur(1px);
  background: rgba(138, 138, 138, 0.4);
  width: 100%;
  height: 100%;
  backdrop-filter: saturate(180%) blur(20px);
}
</style>
