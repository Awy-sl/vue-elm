<template>
  <div class="comment-item">
    <div class="img">
      <img
        class="img"
        :src="
          comment.avatar ? comment.avatar : require('@/assets/img/default.jpg')
        "
      />
    </div>
    <div class="content">
      <div class="title">
        <p class="name">4*******6</p>
        <p class="date">2017-02-10</p>
      </div>
      <div class="comm-info">
        <span class="iconfont star">
          &#xe638;&#xe638;&#xe638;&#xe638;&#xe638;
        </span>
        <p>商家准时</p>
      </div>
      <div class="food-image"></div>
      <ul class="food">
        <li>香草xxx</li>
        <li>鸡茸羹</li>
      </ul>
    </div>
  </div>
</template>

<script>
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
    display: flex;
    li {
      .text-dot();
      width: 54px;
      padding: 6px;
      margin: 0px 5px 2px 0px;
      font-size: 14px;
      color: #999999;
      border: 1px solid #ececec;
      border-radius: 4px;
    }
  }
}
</style>
