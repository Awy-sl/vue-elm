<template>
  <div class="comment-classify">
    <div
      class="classity-item"
      :style="bgColor(item.unsatisfied)"
      v-for="(item, index) in classify"
      @click="selectIndex = index"
      :key="item.id"
      :class="{ select: selectIndex === index }"
    >
      {{ `${item.name}(${item.count})` }}
    </div>
  </div>
</template>

<script>
import { requestCommentClassity } from "@/api";

export default {
  name: "comment-classify",
  data() {
    return {
      classify: [],
      selectIndex: 0,
    };
  },
  created() {
    this.getCommtClassity();
  },
  methods: {
    // 获取评价分类
    async getCommtClassity() {
      const { id } = this.$route.query;
      const res = await requestCommentClassity(id);
      console.log(res);
      this.classify = res;
    },
  },
  computed: {
    bgColor() {
      return (unsatisfied) => {
        return unsatisfied
          ? {
              backgroundColor: "#F5F5F5",
            }
          : {
              backgroundColor: "#ebf5ff",
            };
      };
    },
  },
};
</script>

<style lang="less" scoped>
.comment-classify {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  border-bottom: 1px solid #ececec;
  background: #fff;
  .classity-item {
    color: #6d7885;
    font-size: 14px;
    margin: 4px 5px;
    border-radius: 4px;
    padding: 10px 5px;
  }
}
.select {
  color: #fff !important;
  background: #3190e8 !important;
}
</style>
