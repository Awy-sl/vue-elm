<template>
  <div class="msite-nav-bar">
    <!-- Nav bar -->
    <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in foods"
        :key="index"
      >
        <msite-swiper-item :foodItems="item" @gofood="gofood" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { IMAGE_URL } from "@/constant";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import MsiteSwiperItem from "./MsiteSwiperItem.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MsiteSwiperItem,
  },
  props: {
    foodList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        centeredSlides: true,
        initialSlide: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  computed: {
    // 返回新的 fooods
    foods() {
      const { foodList } = this;
      // 格式化图片地址
      const newfootList = foodList.map((item) => {
        item.image_url = IMAGE_URL + item.image_url;
        return item;
      });

      // 重新设计食品导航栏数组
      return this.restFoodList(newfootList);
    },
  },
  methods: {
    // 重新设计食品导航栏数组
    restFoodList(foodList) {
      let newFoods = [];
      foodList.forEach((item, index) => {
        //   let len = Math.round();
        let len = parseInt(index / 8);
        if (newFoods[len] instanceof Array) {
          newFoods[len] = [...newFoods[len], item];
        } else {
          newFoods[len] = [item];
        }
      });

      return newFoods;
    },
    // 跳转 分类 商品列表
    gofood({ title, id }) {
      const { geohash } = this.$route.query;
      this.$router.push({
        path: "/food",
        query: {
          geohash,
          title,
          restaurant_category_id: id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-pagination {
  padding-bottom: 10px;
}
</style>
