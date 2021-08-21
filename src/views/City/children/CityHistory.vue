<template>
  <div class="city-history">
    <!-- 搜索历史 -->
    <history class="history">
      <div slot="title" class="title">
        搜索历史
      </div>
      <div v-show="isHistory" slot="content">
        <site-list
          v-for="item in getRecords"
          :key="item.geohash"
          :siteInfo="item"
        />
        <div slot="clear" @click="clearClick" class="clear">清空所有</div>
      </div>
    </history>
  </div>
</template>

<script>
import History from "components/History";
import SiteList from "./SiteList.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    SiteList,
    History,
  },
  computed: {
    ...mapGetters(["getRecords"]),
  },
  data() {
    return {
      isHistory: true,
    };
  },
  created() {
    this.showHistoryContent();
  },
  methods: {
    // 清空历史
    clearClick() {
      this.$store.dispatch("removeRecords");
      this.isHistory = false;
    },
    showHistoryContent() {
      if (this.getRecords.length === 0) {
        this.isHistory = false;
      } else {
        this.isHistory = true;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.history {
  .clear,
  .item {
    background: #fff;
  }
  .title {
    padding: 0px 10px;
    height: 26px;
    font-size: 12px;
    line-height: 26px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  .clear {
    height: 42px;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
  }
}
</style>
