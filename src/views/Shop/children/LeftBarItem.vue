<template>
  <li class="left-item">
    <p>{{ name }}</p>
    <span class="number" v-show="classNum(index)">{{ classNum(index) }}</span>
  </li>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "food-list",
  props: {
    name: {
      type: String,
      default() {
        return {};
      },
  },
    index: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  created() {
    console.log(this.classNum(this.index));
  },
  computed: {
    ...mapGetters({
      classNum: "getCartListFoodNum",
    }),
  },
  watch: {
    classNum(to, from) {
      console.log(to, from);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.left-item {
  position: relative;
  width: 100px;
  height: 64px;
  font-size: 15px;
  padding: 0 10px;
  line-height: 64px;
  border-bottom: 1px solid #ececec;
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .number {
    .fx-center();
    position: absolute;
    top: 0;
    right: 0;
    width: 14px;
    height: 14px;
    color: #fff;
    border-radius: 100%;
    background: red;
    font-size: 10px;
  }
}
</style>
