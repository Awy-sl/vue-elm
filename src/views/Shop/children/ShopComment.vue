<template>
  <div class="food-comment">
    <!-- 评分 -->
    <comment-title :eavlInfo="restEvalInfo" />
    <!-- 评价类型 -->
    <comment-classify />
    <!-- 用户评价列表 -->
    <div class="comment-list">
      <comment-item />
      <comment-item />
    </div>
  </div>
</template>

<script>
import { requestUserComments } from "@/api";

import CommentTitle from "./CommentTitle.vue";
import CommentClassify from "./CommentClassify.vue";
import CommentItem from "./CommentItem.vue";

export default {
  name: "food-comment",
  components: {
    CommentTitle,
    CommentClassify,
    CommentItem,
  },
  props: {
    evaluationInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      // 评论页对象
      page: {
        id: this.$route.query.id,
        offset: 0,
        limit: 10,
      },
    };
  },
  created() {
    this.getCommentList();
  },
  computed: {
    // 格式化店铺评价数据
    restEvalInfo() {
      const { evaluationInfo } = this;
      evaluationInfo.compare_rating = (
        evaluationInfo.compare_rating * 100
      ).toFixed(1);
      evaluationInfo.food_score = (evaluationInfo.food_score * 1).toFixed(1);
      evaluationInfo.overall_score = (evaluationInfo.overall_score * 1).toFixed(
        1
      );
      return {
        ...this.evaluationInfo,
      };
    },
  },
  methods: {
    // 获取评论列表
    async getCommentList() {
      const result = await requestUserComments(this.page);
      console.log(result);
    },
  },
};
</script>

<style lang="less" scoped>
.food-comment {
  position: relative;
  background: #f5f5f5;
  height: 100%;
  z-index: 1;
}
.comment-list {
  background: #fff;
  padding: 0px 10px;
}
</style>
