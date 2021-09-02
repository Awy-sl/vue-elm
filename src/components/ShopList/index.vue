<template>
  <div class="shop-list">
    <div
      class="shop-item"
      @click="handClick(item)"
      v-for="item in shopList"
      :key="item.id"
    >
      <img :src="`${BASE_URL}/img/${item.image_path}`" alt="" />
      <div class="item-content">
        <div class="title">
          <h4 class="l">
            <h4 class="icon">品牌</h4>
            <div class="h4">
              {{ item.name }}
            </div>
          </h4>
          <div class="r">
            <span v-for="support in item.supports" :key="support.id">
              {{ support.icon_name }}
            </span>
          </div>
        </div>
        <div class="center">
          <div class="l">
            <div class="star">
              <div class="show">
                <span class="iconfont" v-html="star(item.rating)"> </span>
              </div>
              <div class="default">
                <span class="iconfont">
                  &#xe638;&#xe638;&#xe638;&#xe638;&#xe638;
                </span>
              </div>
            </div>
            <span class="score">{{ item.rating }}</span>
            <span class="sales">月销售{{ item.recent_order_num }}单</span>
          </div>
          <div class="r">
            <span>{{ item.delivery_mode.text }}</span>
            <span>准时达</span>
          </div>
        </div>
        <div class="bottom">
          <div class="l">
            ￥{{ item.float_minimum_order_amount }}起送 /
            {{ item.piecewise_agent_fee.tips }}
          </div>
          <div class="r">
            <span>{{ item.distance }}</span
            >/<span>{{ item.order_lead_time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "@/constant";
export default {
  name: "shop-list",

  props: {
    shopList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      BASE_URL,
    };
  },
  methods: {
    // 路由跳转
    handClick(item) {
      this.$emit("goShopDetail", item);
    },
    resStart(index) {
      let star = ``;
      for (let i = 0; i < index; i++) {
        star += "&#xe638;";
      }
      // eslint-disable-next-line
      return star;
    },
  },
  computed: {
    star() {
      return (rating) => {
        if (rating === 5) {
          return this.resStart(rating);
        } else {
          rating = Math.floor(rating);
          return this.resStart(rating);
        }
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.shop-item {
  display: flex;
  height: 100px;
  padding: 10px 6px 10px 10px;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  img {
    margin-right: 10px;
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
}
.item-content {
  flex-grow: 1;
  font-size: 10px;
  .title,
  .center,
  .bottom {
    .fx-sb-center();
  }
  .center,
  .bottom {
    margin-top: 12px;
  }
  .title {
    .l {
      display: flex;
      width: 200px;
      font-size: 16px;
      .h4 {
        flex-grow: 1;
        .text-dot();
      }
      .icon {
        width: 36px;
        text-align: center;
        justify-content: center;
      }
      h4 {
        position: relative;
        display: flex;
        align-items: center;
        font-size: 12px;
        margin-right: 5px;
        background: #ffd930;
      }
    }
  }
  .center {
    .l {
      display: flex;
    }
    .score {
      margin: 0 5px;
      color: #ff9a0d;
    }
    .r {
      font-size: 8px;
      span {
        border-radius: 4px;
      }
      span:nth-child(1) {
        padding: 1px 4px;
        color: #fff;
        background: #5a9fe0;
      }
      span:nth-child(2) {
        margin-left: 2px;
        padding: 0px 4px;
        color: #5a9fe0;
        border: 1px solid #5a9fe0;
      }
    }
  }
  .bottom {
    .r {
      span:nth-child(1) {
        margin-right: 2px;
      }
      span:nth-child(2) {
        margin-left: 2px;
        color: #5a9fe0;
      }
    }
  }
}
.star {
  position: relative;
  .show {
    position: absolute;
    .iconfont {
      color: #ff9a0d;
    }
  }
  .iconfont {
    color: #ccc;
    font-size: 8px;
  }
}
</style>
