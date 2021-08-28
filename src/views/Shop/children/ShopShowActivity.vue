<template>
  <div class="show-activity">
    <section class="main">
      <h3 class="header">
        {{ shopInfo.name }}
      </h3>
      <div class="info mar">
        <span>优惠信息</span>
      </div>
      <ul class="activity-info mar">
        <li v-for="item in shopInfo.activity" :key="item.id">
          <span :style="{ backgroundColor: '#' + item.icon_color }">{{
            item.icon_name
          }}</span>
          {{ item.description }}
        </li>
      </ul>
      <div class="info mar">
        <span>优惠信息</span>
      </div>
      <p>{{ shopInfo.announcement }}</p>
      <div class="return" @click ='handClick'>
        <span class="iconfont">
          &#xe61a;
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import { shopInfoMixin } from "@/mixins";

export default {
  name: "show-activity",
  mixins: [shopInfoMixin],
  methods:{
     handClick(){
        this.$emit('quitActivity',)
     }
  }
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";
.main {
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 30px;
  .mar {
    margin-bottom: 30px;
  }
  .header {
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
  }

  .info {
    text-align: center;
    span {
      font-size: 12px;
      border: 1px solid #fff;
      padding: 5px;
      border-radius: 10px;
    }
  }
  p {
    font-size: 12px;
  }
  .activity-info {
    font-size: 12px;
    li {
      margin: 20px 0;
    }
    span {
      border-radius: 4px;
      margin-right: 5px;
      padding: 2px 4px;
    }
  }
  .return {
    .fx-center();
    position: relative;
    bottom: 0px;
    margin: 240px auto;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: 1px solid #fff;
    .iconfont {
      font-size: 30px;
    }
  }
}
</style>
