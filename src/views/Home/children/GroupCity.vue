<template>
  <div class="group-city">
    <city-list
      v-for="(item, key) in groupCity"
      :key="key"
      :title="key"
      :note="`(按字母排序)`"
      :cityLists="item"
    />
  </div>
</template>

<script>
import CityList from "./CityList.vue";

export default {
  name: "group-city",
  components: {
    CityList,
  },
  props: {
    groupCity: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
