<template>
  <div class="list">
    <div class="item" @click="goMsite(siteInfo)">
      <p class="item-title">{{ siteInfo.name }}</p>
      <p class="site">{{ siteInfo.address }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    siteInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // 跳转 /msite 路由
    goMsite(siteInfo) {
      const { geohash } = siteInfo;
      this.$store.dispatch("setRecords", siteInfo);
      this.$router.push({
        path: "/msite",
        query: {
          geohash,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  background: #fff;
}
.item {
  padding: 12px 14px;
  border-bottom: 1px solid #ccc;
  .item-title {
    font-size: 16px;
    margin-bottom: 4px;
  }
  .site {
    font-size: 14px;
    color: #ccc;
  }
}
</style>
