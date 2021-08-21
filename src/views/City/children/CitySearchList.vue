<template>
  <div class="city-search-list">
    <site-list v-for="item in siteInfos" :key="item.geohash" :siteInfo="item" />
  </div>
</template>

<script>
import SiteList from "./SiteList.vue";

export default {
  components: {
    SiteList,
  },
  props: {
    siteInfos: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

.<style lang="less" scoped></style>
