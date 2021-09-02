<template>
  <div class="food-detail">
    <top-bar>
      <go-back slot="left" />
      <div style="text-align: center;" slot="center">{{ foodDetail.name }}</div>
    </top-bar>
    <img class="img" :src="basImage(foodDetail.image_path)" alt="" />
    <div class="detail-container">
      <p>{{ foodDetail.description }}</p>
      <p class="title">{{ foodDetail.name }}</p>
      <p>
        评分
        <star :star="foodDetail.rating * 1" />
        <span class="color">{{ foodDetail.rating }}</span>
      </p>
      <p>
        月售 {{ foodDetail.month_sales }}单
        <span class="color">售价￥{{ foodDetail.specfoods[0].price }}起</span>
      </p>
      <p>
        评论数 {{ foodDetail.rating_count }} 好评率
        {{ foodDetail.satisfy_rate }}%
      </p>
    </div>
  </div>
</template>

<script>
import { foarmImgMinxin } from "@/mixins";
import Star from "components/Star";

export default {
  name: "food-detail",
  mixins: [foarmImgMinxin],
  components: {
    Star,
  },
  computed: {
    // foodDetail
    foodDetail() {
      return this.$route.query;
    },
    // 格式化图片
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";
.food-detail {
  .main-box();
  z-index: 2;
  background: #fff;
  .img {
    height: 375px;
    object-fit: cover;
  }
  .detail-container {
    padding: 12px;
    font-size: 16px;
    p {
      margin-bottom: 5px;
    }
  }
  .color {
    color: #ff6600;
  }
}
</style>
