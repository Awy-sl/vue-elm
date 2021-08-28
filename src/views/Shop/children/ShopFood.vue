<template>
  <div class="food-content">
    <!-- 侧边导航栏 -->
    <scroll class="scroll left" ref="scrollL">
      <ul class="food-list">
        <left-bar-item
          v-for="(item, i) in leftBars"
          :key="item.id"
          :name="item.name"
          :class="{ leftSelect: leftBarIndex === i }"
          @click.native="leftBarClick(i)"
        />
      </ul>
    </scroll>
    <!-- 内容区域 -->
    <scroll
      class="scroll right"
      ref="scrollR"
      @onScroll="rightOnScroll"
      :probeType="3"
    >
      <div class="content">
        <div
          ref="rightContent"
          class="right-content"
          v-for="item in foodList"
          :key="item.id"
        >
          <!-- 内容title -->
          <right-food-title :item="item"></right-food-title>
          <!-- 内容主体 -->
          <right-food-item class="right-centent" :item="item"></right-food-item>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/Scroll";

import LeftBarItem from "./LeftBarItem.vue";

import RightFoodTitle from "./RightFoodTitle.vue";
import RightFoodItem from "./RightFoodItem.vue";

export default {
  name: "food-content",
  components: {
    Scroll,
    LeftBarItem,
    RightFoodTitle,
    RightFoodItem,
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
  mounted() {},
  methods: {
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
  padding-bottom: 360px;
}
</style>
