<template>
  <div class="title">
    <div class="title-l">
      <p class="score">{{ eavlInfo.score }}</p>
      <p>综合评价</p>
      <p>高于周边商家{{ eavlInfo.compare_rating }}%</p>
    </div>
    <div class="title-r">
      <p>
        服务态度
        <span>
          <span class="star">
            <span
              class="iconfont show"
              v-html="showStar(eavlInfo.overall_score)"
            >
            </span>
            <span class="iconfont def">
              &#xe638;&#xe638;&#xe638;&#xe638;&#xe638;
            </span>
          </span>
          <span class="number">{{ eavlInfo.overall_score }}</span>
        </span>
      </p>
      <p>
        菜品评价
        <span>
          <span class="star">
            <span
              class="iconfont show"
              v-html="showStar(eavlInfo.food_score)"
            ></span>
            <span class="iconfont def">
              &#xe638;&#xe638;&#xe638;&#xe638;&#xe638;
            </span>
          </span>
          <span class="number">{{ eavlInfo.food_score }}</span>
        </span>
      </p>
      <p>
        送达时间<span class="timer">{{ eavlInfo.deliver_time }}</span
        >分钟
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment-title",
  props: {
    eavlInfo: {
      tyle: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showStar() {
      return (number) => {
        let stars = "";
        number = parseInt(number);
        for (let i = 0; i < number; i++) {
          stars += "&#xe638;";
        }
        console.log(stars);
        return stars;
      };
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  display: flex;
  padding: 19px 12px;
  margin-bottom: 10px;
  background: #fff;
  font-size: 16px;
  .title-l {
    width: 150px;
    text-align: center;
    p {
      margin-bottom: 8px;
    }
    .score {
      font-size: 28px;
      color: #ff6600;
    }
    p:nth-child(3) {
      margin: 0;
      font-size: 12px;
      color: #9d9d9d;
    }
  }
  .title-r {
    p {
      margin-bottom: 8px;
    }
    span {
      margin: 0 2px;
    }
    .number {
      color: #ff9a0d;
    }
    .iconfont {
      font-size: 10px;
    }
    .star {
      position: relative;

      .show {
        position: absolute;
        top: 6.3px;
        color: #ff9a0d;
      }
      .def {
        color: #9d9d9d;
      }
    }
    .timer {
      margin: 0 26px;
    }
  }
}
</style>
