<template>
  <div class="swiper-item">
    <div
      class="item"
      @click="handClick(food)"
      v-for="food in foodItems"
      :key="food.id"
    >
      <img class="img" :src="food.image_url" />
      <p class="title">{{ food.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    foodItems: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handClick({ title, id }) {
      this.$emit("gofood", {
        title,
        id,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-item {
  display: flex;
  flex-wrap: wrap;
  height: 180px;
  margin-bottom: 10px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e4e4e4;
  background: #fff;
  .item {
    padding-top: 7px;
    width: 25%;
    text-align: center;
  }
  .img {
    margin-bottom: 7px;
    width: 42px;
    height: 42px;
    object-fit: cover;
  }
  .title {
    font-size: 12px;
  }
}
</style>
