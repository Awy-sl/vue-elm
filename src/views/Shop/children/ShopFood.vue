<template>
  <div class="food-content">
    <!-- 侧边导航栏 -->
    <shop-scroll class="scroll left" ref="scrollL">
      <ul class="food-list">
        <left-bar-item
          v-for="(item, i) in leftBars"
          :index="i"
          :key="item.id"
          :name="item.name"
          :class="{ leftSelect: leftBarIndex === i }"
          @click.native="leftBarClick(i)"
        />
      </ul>
    </shop-scroll>
    <!-- 内容区域 -->
    <shop-scroll
      class="scroll right"
      ref="scrollR"
      @onScroll="rightOnScroll"
      :probeType="3"
    >
      <div class="content">
        <div
          ref="rightContent"
          class="right-content"
          v-for="(item, i) in foodList"
          :key="item.id"
        >
          <!-- 内容title -->
          <right-food-title :item="item"></right-food-title>
          <!-- 内容主体 -->
          <right-food-item
            @reduction="reduction"
            @addGoods="addGoods"
            @showfoodDialog="showfoodDialog"
            class="right-centent"
            :foodIndex="i"
            :item="item"
          ></right-food-item>
        </div>
      </div>
    </shop-scroll>
    <!--  -->
    <food-dialog :isDialog="isDialog" @exitDialog="isDialog = false"
      ><select-food
        @quitDialog="isDialog = false"
        :food="food"
        @addCart="addGoods"
    /></food-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ShopScroll from "components/Scroll";

import LeftBarItem from "./LeftBarItem.vue";

import RightFoodTitle from "./RightFoodTitle.vue";
import RightFoodItem from "./RightFoodItem.vue";
import SelectFood from "./SelectFood.vue";

import FoodDialog from "components/Dialog";

export default {
  name: "food-content",
  components: {
    ShopScroll,
    LeftBarItem,
    RightFoodTitle,
    RightFoodItem,
    SelectFood,
    FoodDialog,
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
      // 侧tab选择索引
      leftBarIndex: 0,
      //
      isDialog: false,
      // 当前规格的商品
      food: {},
      // 当前规格商品的索引
      foodIndex: 0,
    };
  },

  computed: {
    // 格式化侧边选择栏数据
    leftBars() {
      const newLeftBars = this.foodList.map((item) => {
        const { name, id } = item;
        const newItem = {
          name,
          id,
        };
        return newItem;
      });
      return newLeftBars;
    },
  },
  methods: {
    // actions
    ...mapActions(["addCarList", "reduceCartList"]),
    // 食品内容滚动使事件
    rightOnScroll({ y }) {
      const { rightContent } = this.$refs;
      y = parseInt(-y);
      // 判断滚动范围
      for (let i = 0; i < rightContent.length; i++) {
        try {
          if (y <= 0) {
            this.leftBarIndex = 0;
          } else {
            if (
              y >= rightContent[i].offsetTop &&
              y <= rightContent[i + 1].offsetTop
            ) {
              this.leftBarIndex = i;
            }
          }
        } catch (error) {
          return (this.leftBarIndex = i);
        }
      }
    },
    // lefttab点击事件
    leftBarClick(index) {
      this.leftBarIndex = index;
      const { scrollTo } = this.$refs.scrollR;
      const y = this.$refs.rightContent[index].offsetTop;
      scrollTo(0, -y);
    },
    // 减少选择商品
    reduction(foodIndex, food) {
      return this.reduceCartList({ foodIndex, food });
    },
    // 增加选择商品
    addGoods(foodIndex, food) {
      // 增选规格商品
      if (!food) {
        const { foodIndex, food } = this;
        return this.addCarList({ foodIndex, food });
      }
      // 增加默认商品
      return this.addCarList({ foodIndex, food });
    },
    // 显示选择商品其他规格框
    showfoodDialog(foodIndex, food) {
      console.log(foodIndex, food);
      this.isDialog = true;
      this.food = food;
      this.foodIndex = foodIndex;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.food-content {
  display: flex;
  height: 100%;
}
.leftSelect {
  border-left: 3px solid #3190e8;
  background: #fff;
}
.left {
  width: 100px;
  height: 100%;
  .food-list {
    display: block;
    padding-bottom: 69px;
    width: 100%;
    height: 100%;
  }
}
.right {
  display: block;
  width: calc(100% - 100px);
  height: 100%;
  background: #fff;
}
.content {
  width: 100%;
  height: 100%;
  padding-bottom: 369px;
}
</style>
