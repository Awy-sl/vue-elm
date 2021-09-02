<template>
  <div class="comment-item">
    <div class="img">
      <img
        class="img"
        :src="
          comment.avatar
            ? formatImg(comment.avatar)
            : require('@/assets/img/default.jpg')
        "
      />
    </div>

    <div class="content">
      <div class="title">
        <p class="name">{{ comment.username }}</p>
        <p class="date">{{ comment.rated_at }}</p>
      </div>
      <div class="comm-info">
        <span class="iconfont star">
          &#xe638;&#xe638;&#xe638;&#xe638;&#xe638;
        </span>
        <p>{{ comment.time_spent_desc }}</p>
      </div>

      <ul class="food">
        <li class="food-image">
          <img
            :src="formatImg(item.image_hash)"
            v-show="item.image_hash"
            v-for="item in comment.item_ratings"
            :key="item._id"
          />
        </li>
        <li>
          <div v-for="item in comment.item_ratings" :key="item._id" class="tag">
            {{ item.food_name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { formatimage } from "@/utils/format";

export default {
  name: "comment-item",
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    formatImg() {
      return formatimage;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.comment-item {
  display: flex;
  padding: 14px 0px;
  background: #fff;
  font-size: 14px;
  border-bottom: 1px solid #ececec;
  .img {
    margin-right: 20px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: pink;
  }
}
.content {
  flex-grow: 1;
  color: #666666;
  .title {
    .fx-sb-center();
  }
  .comm-info {
    .iconfont {
      font-size: 10px;
      color: #ff9a0d;
    }
    p {
      margin: 5px 0;
    }
  }
  .food {
    li {
      display: flex;
      flex-wrap: wrap;
    }
    .tag {
      .text-dot();
      width: 54px;
      padding: 6px;
      margin: 0px 2px 2px 0px;
      font-size: 14px;
      color: #999999;
      border: 1px solid #ececec;
      border-radius: 4px;
    }
    .food-image {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 4px;
      img {
        width: 70px;
        height: 70px;
        margin-right: 6px;
        object-fit: cover;
      }
    }
  }
}
</style>
