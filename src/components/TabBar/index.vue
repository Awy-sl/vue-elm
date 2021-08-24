<template>
  <div class="tab-bar">
    <div
      class="item"
      v-for="item in tabBar"
      :key="item.id"
      @click="handBarClick(item)"
    >
      <span
        class="iconfont"
        :class="{ color: !path.indexOf(item.path) }"
        v-html="item.icon"
      ></span>
      <p class="title">{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import { TAB_BAR } from "@/constant";

export default {
  name: "tab-bar",
  data() {
    return {
      path: null,
    };
  },
  created() {
    this.path = this.$route.path;
    console.log(this.$route.path);
  },
  computed: {
    tabBar() {
      return TAB_BAR;
    },
  },
  methods: {
    handBarClick({ name, path }) {
      switch (name) {
        case "外卖":
          this.$router
            .push({
              path,
              query: {
                geohash: "22.624789,110.154175",
              },
            })
            .catch(() => {});
          break;
        case "搜索":
          console.log(path);
          this.$router
            .push({
              path: path + "/" + "22.624789,110.154175",
            })
            .catch(() => {});
          break;
        default:
          this.$router.push(path).catch(() => {});
          break;
      }
    },
  },
  watch: {
    "$route.path"(to) {
      console.log(to);
      this.path = to;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.tab-bar {
  .fx-sb-center();
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 5px 0;
  height: 50px;
  text-align: center;
  background: #fff;
  border-top: 1px solid #e4e4e4;
  .item {
    width: 25%;
    text-align: center;
    color: #6c6c6c;
  }
  .iconfont {
    font-size: 20px;
  }
  .title {
    font-size: 12px;
  }
}
.color {
  color: #3190e8;
}
</style>
