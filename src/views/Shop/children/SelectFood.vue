<template>
  <div class="select-food">
    <div class="title">
      {{ food.name }}
      <span class="iconfont" @click="handClick">
        &#xe61a;
      </span>
    </div>
    <div class="container">
      <p>规格</p>
      <ul>
        <li
          v-for="(item, i) in food.specfoods"
          :key="item.food_id"
          :class="{ select: i === index }"
          @click="index = i"
          v-show="item.specs_name"
        >
          {{ item.specs_name }}
        </li>
      </ul>
    </div>

    <div class="bottom">
      <div class="price">￥<span>20</span></div>
      <div class="add-cart" @click="addCart">
        加入购物车
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "select-food",
  props: {
    food: {
      tyle: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      index: 0,
    };
  },
  computed: {},
  methods: {
    handClick() {
      this.$emit("quitDialog");
    },
    addCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.select-food {
  padding: 10px;
  padding-bottom: 0px;
  width: 264px;
  background: #fff;
  border-radius: 6px;
  font-size: 16px;
  .title {
    position: relative;
    padding: 2px 0px;
    width: 100%;
    text-align: center;
    span {
      position: absolute;
      top: 4px;
      right: 4px;
    }
  }
  .container {
    p {
      margin-top: 20px;
      margin-bottom: 10px;
    }
    ul {
      margin: 10px 0px;
      li {
        display: inline-block;
        padding: 6px;
        margin: 6px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }
  }
  .bottom {
    padding: 10px 0px;
    background: #f9f9f9;
    .fx-sb-center();
    .add-cart {
      padding: 6px 10px;
      color: #fff;
      background: #3199e8;
      border-radius: 4px;
    }
    .price {
      color: #ff6000;
      span {
        font-weight: 550;
      }
    }
  }
}
.select {
  border-color: #3199e8;
  color: #3199e8;
}
</style>
