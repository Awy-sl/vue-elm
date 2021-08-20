<template>
  <div class="hot-city">
    <city-list :title="hot" :cityLists="hotCity" :textColor="true" />
  </div>
</template>

<script>
import CityList from "./CityList.vue";
export default {
  name: "hot-city",
  components: {
    CityList,
  },
  data() {
    return {
      hot: "热门城市",
    };
  },
  props: {
    hotCity: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    console.log(this.hotCity);
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.title {
  font-size: 14px;
  padding: 12px;
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
}
.content {
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  .item {
    .fx-center();
    width: 93.5px;
    height: 36px;
    border-right: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  .item:nth-child(4n) {
    border-right: none;
  }
}
</style>
