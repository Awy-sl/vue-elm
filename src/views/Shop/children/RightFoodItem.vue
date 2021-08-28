<template>
  <div class="right-food-item">
    <div class="content" v-for="food in item.foods" :key="food.itemid">
      <div class="item">
        <img class="img" :src="foodImage(food.image_path)" />
        <div class="food-info">
          <div class="food-title">
            <h4>{{ food.name }}</h4>
            <span
              class="tag"
              v-for="(t, key) in restAttributes(food.attributes)"
              :key="key"
              :style="{
                border: `1px solid #${t.icon_color}`,
                color: `#${t.icon_color}`,
              }"
            >
              {{ t.icon_name }}
            </span>
          </div>
          <p class="brief">{{food.description}}</p>
          <p>月售{{ food.month_sales }}份 好评率{{ food.satisfy_rate }}%</p>
          <span class="tag" :style="tagSty(food.activity)">{{
            tagText(food.activity)
          }}</span>
          <div class="bottom">
            <div class="piec">
              <span>￥</span><span>20</span><span>起</span>
            </div>
            <div class="number">
              <span class="reduce"> 一 </span>
              1
              <!-- <span class="select  plus">选规格</span> -->
              <span class="add plus">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { foodContentMixin } from "@/mixins";
import { resFood, resfoodImage } from "@/utils/format.js";
export default {
  name: "right-food-item",
  mixins: [foodContentMixin],
  computed: {
    // 处理商品列表对象
    formatFood() {
      return (food) => {
        resFood(food);
        return "";
      };
    },
    // 食品标签样式
    tagSty() {
      return (activity) => {
        try {
          return {
            border: `1px solid #${activity.icon_color}`,
            color: `#${activity.image_text_color}`,
          };
        } catch (error) {
          return {};
        }
      };
    },
    // 食品标签内容
    tagText() {
      return (activity) => {
        try {
          return activity.image_text;
        } catch (error) {
          return "";
        }
      };
    },
    // 格式化 attributes
    restAttributes() {
      return (attributes) => {
        if (attributes && attributes[0]) {
          return attributes;
        } else {
          return [];
        }
      };
    },
    // 食品图片地址
    foodImage() {
      return (img_url) => {
        // eslint-disable-next-line
        return resfoodImage(img_url);
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.right-food-item {
  width: 100%;
  height: 100%;
}

.content {
  .item {
    flex-grow: 1;
    display: flex;
    padding: 10px;
    height: 140px;
    border-bottom: 1px solid #ececec;
    .img {
      margin-right: 10px;
      width: 47px;
      height: 47px;
      background: pink;
    }
    .food-info {
      font-size: 10px;
      flex-grow: 1;
      .food-title {
        flex-grow: 1;
        width: 100%;
        .fx-sb-center();
        h4 {
          .text-dot();
          width: 140px;
        }
      }
      p {
        margin: 8px 0;
      }
      .tag {
        font-size: 10px;
        padding: 0 2px;
        margin: right 4px;
        border-radius: 6px;
      }
    }
  }
}
.bottom {
  .fx-sb-center();
  margin: 8px 0;
  .piec {
    span {
      color: #ff6600;
    }
    span:nth-child(2) {
      font-size: 16px;
      font-weight: 550;
    }
    span:nth-child(3) {
      margin-left: 4px;
      color: #676767;
    }
  }
  .number {
    .fx-center();
    span {
      .fx-center();
    }
    .reduce {
      margin-right: 10px;
      color: #3190e8;
    }
    .add,
    .reduce {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      border: 1px solid #3190e8;
    }
    .plus {
      margin-left: 10px;
      .fx-center();
      color: #fff;
      background: #3190e8;
    }
    .select {
      border-radius: 5px;
      padding: 5px;
    }
    .add {
    }
  }
}
</style>
