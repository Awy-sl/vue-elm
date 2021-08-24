<template>
  <div class="city">
    <!-- 顶部导航栏 -->
    <top-bar class="top-bar" :value="'city'">
      <go-back slot="left" />
      <div slot="center" class="center">{{ cityInfo.name }}</div>
    </top-bar>
    <!--  -->
    <div class="search">
      <input type="text" v-model="value" placeholder="输入学校、商务楼、地址" />
      <span class="remove" @click="clearValue" v-show="isClearShow">x</span>
      <comp-button class="commit" @click.native="commitClic">提交</comp-button>
    </div>
    <city-search-list :siteInfos="siteInfos" v-if="isSearch" />
    <city-history :siteInfos="siteInfos" v-else />
  </div>
</template>

<script>
import { requestCityInfo, requestSearchSite } from "@/api";

import GoBack from "components/GoBack";
import TopBar from "components/TopBar";
import CompButton from "components/Buttom";

import CityHistory from "./children/CityHistory.vue";
import CitySearchList from "./children/CitySearchList.vue";

export default {
  name: "city",
  components: {
    GoBack,
    TopBar,
    CompButton,
    CityHistory,
    CitySearchList,
  },
  data() {
    return {
      //  城市信息
      cityInfo: {},
      isClearShow: false,
      value: "",
      siteInfos: [],
      isSearch: false,
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
    // 清楚搜索框值
    clearValue() {
      this.value = "";
    },
    // 提交搜索点击事件
    async commitClic() {
      const { cityid } = this.$route.params;
      const result = await requestSearchSite(cityid, this.value);
      this.siteInfos = result;
      this.isSearch = true;
    },
  },
  watch: {
    // eslint-disable-next-line
    value(to, from) {
      if (to.length === 0) {
        this.isClearShow = false;
      } else {
        this.isClearShow = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";
.city {
  .main-box();
  z-index: 2;
}

.center {
  font-size: 20px;
  font-weight: 700;
}
.right,
.center {
  text-align: center;
  color: #fff;
}

.search {
  position: relative;
  margin-top: 12px;
  background: #fff;
  padding: 10px 20px;
  text-align: center;
  input {
    padding-left: 5px;
    font-size: 16px;
    width: 100%;
    height: 34px;
    border: 1px solid #ccc;
    outline: none;
  }
  .remove {
    position: absolute;
    font-size: 16px;
    transform: translateY(38%);
    right: 30px;
  }
  .commit {
    margin-top: 10px;
    height: 34px;
    color: #fff;
    font-size: 16px;
    line-height: 34px;
    border-radius: 4px;
    background: #3190e8;
  }
}
</style>
