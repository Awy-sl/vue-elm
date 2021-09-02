<template>
  <div class="shop">
    <router-view></router-view>
    <!-- 商家活动 -->
    <shop-show-activity
      class="show-activity"
      v-show="showActivity"
      @quitActivity="showActivity = false"
    />
    <!-- 商家公告 -->
    <shop-title @showActivityClick="showActivity = true" />
    <!-- 商品 和 评价切换栏 -->
    <shop-tab-bar />
    <!-- 底部操作栏 -->
    <shop-bottom-bar @showShopping="showShopping" />
    <!-- 购物车列表 -->
    <shop-shopping v-show="isShopping" @noneShopping="isShopping = false" />
  </div>
</template>

<script>
import { requestJoinCart } from "api";

import ShopTitle from "./children/ShopTitle.vue";
import ShopShowActivity from "./children/ShopShowActivity.vue";
import ShopTabBar from "./children/ShopTabBar.vue";
import ShopBottomBar from "./children/ShopBottomBar.vue";
import ShopShopping from "./children/ShopShopping.vue";

export default {
  name: "shop",
  components: {
    ShopTitle,
    ShopShowActivity,
    ShopTabBar,
    ShopBottomBar,
    ShopShopping,
  },
  data() {
    return {
      // 显示活动信息
      showActivity: false,
      // 显示购物车列表
      isShopping: false,
    };
  },
  created() {
    this.getCartList();
  },
  methods: {
    // 显示购物车列表
    showShopping() {
      this.isShopping = !this.isShopping;
    },
    // getCartList
    async getCartList() {
      const result = await requestJoinCart();
      console.log(result);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.shop {
  .main-box();
  z-index: 2;
}
.show-activity {
  .main-box();
  z-index: 3;
  background: #262626;
}
</style>
