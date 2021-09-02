<template>
  <div class="shop-tab-bar">
    <div class="title">
      <div
        v-for="item in tabBars"
        :key="item.index"
        @click="index = item.index"
      >
        <span :class="{ select: index === item.index }">{{ item.name }}</span>
      </div>
    </div>
    <shop-food :foodList="foodList" v-if="index === 'shop'" />
    <shop-comment
      class="shop-comment"
      :commentList="commentList"
      :classify="classify"
      :evaluationInfo="evaluationInfo"
      v-else-if="index === 'comment'"
    />
  </div>
</template>

<script>
import {
  requestFoods,
  requestEvaluationInfo,
  requestCommentClassity,
  requestUserComments,
} from "@/api";
import { shopInfoMixin } from "@/mixins";
import ShopFood from "./ShopFood.vue";
import ShopComment from "./ShopComment.vue";

const tabBars = [
  {
    index: "shop",
    name: "商品",
  },
  {
    index: "comment",
    name: "评论",
  },
];

export default {
  name: "shop-tab-bar",
  components: {
    ShopFood,
    ShopComment,
  },
  mixins: [shopInfoMixin],
  data() {
    return {
      index: "shop",
      tabBars,
      // 食品列表
      foodList: [],
      // 商铺评价信息
      evaluationInfo: {},
      // 全部评价分类
      classify: [],
      // 用户评价列表
      commentList: [],
      // 评论页对象
      page: {
        id: this.$route.query.id,
        offset: 0,
        limit: 10,
      },
    };
  },

  created() {
    this.getFoods();
    this.getEvaluationInfo();
    this.getCommtClassity();
    this.getCommentList();
  },

  methods: {
    // 获取食物列表
    async getFoods() {
      const { id } = this.$route.query;
      const result = await requestFoods(id);
      this.foodList = result;
    },
    // 获取商铺评价信息
    async getEvaluationInfo() {
      const { id } = this.$route.query;
      const res = await requestEvaluationInfo(id);
      const { score } = this.shopInfo;
      this.evaluationInfo = {
        score,
        ...res,
      };
    },
    // 获取评价分类
    async getCommtClassity() {
      const { id } = this.$route.query;
      const res = await requestCommentClassity(id);
      console.log(res);
      this.classify = res;
    },
    // 获取评论列表
    async getCommentList() {
      const result = await requestUserComments(this.page);
      this.commentList = result;
    },
  },
};
</script>

<style lang="less" scoped>
.shop-tab-bar {
  width: 100%;
  height: calc(100% - 118px);
}
.title {
  position: relative;
  display: flex;
  padding: 10px 30px;
  height: 45px;
  font-size: 16px;
  background: #fff;
  border: 1px solid #ececec;
  z-index: 1;
  div {
    flex: 1;
    text-align: center;
  }
  span {
    padding: 2px;
  }
}
.select {
  color: #3190e8;
  border-bottom: 3px solid #3190e8;
}
.shop-comment {
  position: relative;
  height: calc(100% - 94px);
  z-index: 0;
}
</style>
