<template>
  <div class="food-comment">
    <scroll class="scroll" ref="scroll">
      <!-- 评分 -->
      <comment-title :eavlInfo="restEvalInfo" />
      <!-- 评价类型 -->
      <comment-classify :classify="classify" />
      <!-- 用户评价列表 -->
      <div class="comment-list" v-for="item in commentList" :key="item._id">
        <comment-item :comment="item" />
      </div>
      <div class="footer">到底了~╮(╯▽╰)╭</div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/Scroll";

import CommentTitle from "./CommentTitle.vue";
import CommentClassify from "./CommentClassify.vue";
import CommentItem from "./CommentItem.vue";

export default {
  name: "food-comment",
  components: {
    CommentTitle,
    CommentClassify,
    CommentItem,
    Scroll,
  },
  props: {
    evaluationInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    classify: {
      type: Array,
      default() {
        return [];
      },
    },
    commentList: {
      type: Array,
      default() {
        return [];
      },
    },
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
    itemLoaded() {
      this.$refs.scroll.refresh;
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
.scroll {
  height: 100%;
}
.footer {
  width: 100%;
  height: 60px;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  margin: 10px auto;
  color: #ccc;
  background: #fff;
  line-height: 40px;
}
</style>
