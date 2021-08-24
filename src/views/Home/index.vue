<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <top-bar :value="'login'">
      <router-link to="/home" slot="left" class="link">ele.com</router-link>
    </top-bar>
    <scroll class="scroll" ref="scroll">
      <!-- 当前城市 -->
      <guess-city class="city" :guessCity="guess" />
      <!-- 热门城市 -->
      <hot-city :hotCity="hods" />
      <!-- 全部城市 -->
      <group-city :groupCity="groups" />
    </scroll>
  </div>
</template>

<script>
import TopBar from "components/TopBar";
import Scroll from "components/Scroll";

import GuessCity from "./children/GuessCity.vue";
import HotCity from "./children/HotCity.vue";
import GroupCity from "./children/GroupCity.vue";

import { requestCityList } from "@/api";

export default {
  name: "home",
  components: {
    TopBar,
    HotCity,
    GuessCity,
    GroupCity,
    Scroll,
  },
  data() {
    return {
      cityList: [],
      guess: {},
      hods: [],
      groups: {},
    };
  },
  created() {
    this.getCityList();
  },
  methods: {
    // 获取当前城市
    async getCityList() {
      // 定位城市
      const guessCity = await requestCityList("guess");
      // 热门城市
      const hotCity = await requestCityList("hot");
      // 所有城市
      const groupCity = await requestCityList("group");
      this.guess = guessCity;
      this.hods = hotCity;
      this.groups = groupCity;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/index.less";

.home {
  .main-box();
}

.link {
  width: 100%;
  color: @font-color;
}
.scroll {
  height: calc(100% - 45px);
}
.city {
  border-bottom: 10px solid #ececec;
}
</style>
