<template>
  <div class="msite">
    <top-bar :value="'login'">
      <router-link class="left" slot="left" to="/search/geohash">
        <span class="iconfont">
          &#xe604;
        </span>
      </router-link>
      <div class="center" slot="center">
        {{ siteInfo.address }}
      </div>
    </top-bar>
    <scroll class="scroll" ref="scroll">
      <msite-nav-bar :foodList="foodList" />
      <div class="shop-title">
        <span class="iconfont">
          &#xe629;
        </span>
        附近商家
      </div>
      <shop-list :shopList="shopList" @goShopDetail="goShopDetail" />
    </scroll>
  </div>
</template>

<script>
import { requestPositioning, requestFoodList, requestShops } from "@/api";
import { SET_SHOPINFO } from "@/store/mutations-type";

import TopBar from "components/TopBar";
import ShopList from "components/ShopList";
import Scroll from "components/Scroll";

import MsiteNavBar from "./children/MsiteNavBar.vue";

export default {
  name: "msite",
  components: {
    TopBar,
    ShopList,
    Scroll,
    MsiteNavBar,
  },
  data() {
    return {
      //  地址详细信息
      siteInfo: {},
      // 食品导航列表
      foodList: [],
      // 商铺列表
      shopList: [],
    };
  },
  created() {
    this.getPositioningInfo();
    this.getFoodList();
    this.getShops();
    this.$nextTick(() => {
      this.refresh();
    });
  },
  methods: {
    // 根据经纬获取地址信息
    async getPositioningInfo() {
      const { geohash } = this.$route.query;
      const result = await requestPositioning(geohash);
      this.siteInfo = result;
    },
    //  获取食品导航列表
    async getFoodList() {
      const result = await requestFoodList();
      this.foodList = result;
    },
    //  获取商铺列表
    async getShops() {
      const { latitude, longitude } = this.siteInfo;
      const result = await requestShops(latitude, longitude);
      this.shopList = result;
    },
    // 重新计算滚动高度
    refresh() {
      const { $scroll } = this.$refs.scroll;
      $scroll.refresh();
    },
    // 跳转到店铺信息
    goShopDetail(item) {
      const { geohash } = this.$route.query;
      this.$store.commit(SET_SHOPINFO, item);
      this.$router.push({
        path: "/shop",
        query: {
          geohash,
          id: item.id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.msite {
  .main-box();
}
.scroll {
  height: calc(100% - 45px - 51px);
}
.left {
  span {
    color: #fff;
    font-size: 26px;
  }
}
.center {
  .text-dot();
}
.shop-title {
  display: flex;
  align-items: center;
  padding: 10px 10px;
  font-size: 14px;
  background: #fff;
  color: rgb(89, 89, 89);
  border-bottom: 1px solid #e4e4e4;
  span {
    margin-right: 5px;
  }
}
</style>
