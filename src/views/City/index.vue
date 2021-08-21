<template>
  <div class="city">
    <!-- 顶部导航栏 -->
    <top-bar class="top-bar">
      <go-back slot="left" />
      <div slot="center" class="center">{{ cityInfo.name }}</div>
      <router-link class="right" slot="right" to="/home">切换城市</router-link>
    </top-bar>
    <!--  -->
    <div class="search">
      <input type="text" placeholder="输入学校、商务楼、地址" />
    </div>
    <!-- 搜索历史 -->
    <history />
  </div>
</template>

<script>
import { requestCityInfo } from "@/api";

import GoBack from "components/GoBack";
import TopBar from "components/TopBar";
import History from "components/History";

export default {
  name: "city",
  components: {
    GoBack,
    TopBar,
    History,
  },
  data() {
    return {
      //  城市信息
      cityInfo: {},
    };
  },
  created() {
    this.getCityinfo();
  },
  methods: {
    //   获取当前城市信息
    async getCityinfo() {
      const { cityid } = this.$route.params;
      const result = await requestCityInfo(cityid);
      this.cityInfo = result;
      console.log(result);
    },
  },
};
</script>

<style lang="less" scoped>
.center {
  font-size: 20px;
  font-weight: 700;
}
.right,
.center {
  text-align: center;
  color: #fff;
}
</style>
