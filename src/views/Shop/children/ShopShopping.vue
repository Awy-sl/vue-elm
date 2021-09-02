<template>
  <div class="shopping" @click="handClick">
    <div class="shipping-list">
      <div class="title">
        <div class="name">购物车</div>
        <div class="clear">
          <span class="iconfont">&#xe614;</span>
          清除
        </div>
      </div>
      <div class="item" v-for="(item, index) in cartList" :key="index">
        <div
          style=" width: 100%; display: flex; height: 47px;line-height: 37px; justify-content: space-between;"
          v-for="food in item"
          :key="food.item_id"
        >
          <div class="food">
            <span class="food-title">{{ food.name }}</span>
            <span class="food-description">{{ food.description }}</span>
          </div>
          <div class="r-content">
            <div class="price">￥<span>20</span></div>
            <div class="count">
              <span class="iconfont reduce" @click="reduceCart(index, food)"
                >&#xe643;</span
              >
              {{ count(index, food.item_id) }}
              <span class="iconfont add" @click="addCart(index, food)"
                >&#xe60a;</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "shopping",
  computed: {
    ...mapGetters({
      cartList: "getCartList",
      count: "getCartListClassNum",
    }),
  },
  created() {},
  methods: {
    ...mapActions(["addCarList", "reduceCartList", "clearCarList"]),
    //   退出购物车
    handClick(e) {
      const { className } = e.target;
      switch (className) {
        case "shopping":
          this.$emit("noneShopping");
          break;
        //  清空购物车
        case "clear":
          this.clearCarList();
          break;

        default:
          break;
      }
    },
    addCart(foodIndex, food) {
      this.addCarList({ foodIndex, food });
    },
    reduceCart(foodIndex, food) {
      this.reduceCartList({ foodIndex, food });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";
.shopping {
  position: absolute;
  top: 0;
  z-index: 1;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
}
.shipping-list {
  position: absolute;
  bottom: 52px;
  width: 100%;
  max-height: calc(100% - 170px);
  background: #fff;
  .title {
    .fx-sb-center();
    background: #eceff1;
    padding: 12px;
    .name {
      font-size: 16px;
    }
    .clear {
      font-size: 14px;
    }
  }
  .item {
    .fx-center();
    flex-direction: column;
    width: 100%;
    padding: 14px 10px;
    .food {
      .food-title {
        font-size: 16px;
        font-weight: 550;
      }
      .food-description {
        font-size: 10px;
      }
    }

    .r-content {
      display: flex;
      font-size: 18px;
      .price {
        color: #ff6600;
        margin-right: 30px;
        span {
          font-weight: 550;
        }
      }
      .count {
        .iconfont {
          font-size: 14px;
        }
        span {
          margin: 0px 5px;
          padding: 3px;
          border-radius: 100%;
        }
        .add {
          color: #3190e8;
          border: 1px solid #3190e8;
          background: #fff;
        }
        .reduce {
          color: #fff;
          background: #3190e8;
        }
      }
    }
  }
}
</style>
