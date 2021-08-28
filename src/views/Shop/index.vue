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
    <shop-bottom-bar />
  </div>
</template>

<script>
import ShopTitle from "./children/ShopTitle.vue";
import ShopShowActivity from "./children/ShopShowActivity.vue";
import ShopTabBar from "./children/ShopTabBar.vue";
import ShopBottomBar from "./children/ShopBottomBar.vue";

export default {
  name: "shop",
  components: {
    ShopTitle,
    ShopShowActivity,
    ShopTabBar,
    ShopBottomBar,
  },
  data() {
    return {
      // 显示活动信息
      showActivity: false,
    };
  },
  created() {},
  methods: {},
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
