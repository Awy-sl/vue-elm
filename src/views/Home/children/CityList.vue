<template>
  <div class="city-list">
    <div class="title">
      {{ title }}
      <span>{{ note }}</span>
    </div>
    <div class="content">
      <router-link
        v-for="item in cityLists"
        :key="item.id"
        class="item"
        :class="color"
        :to="`/city/${item.id}`"
        >{{ item.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "city-list",
  props: {
    title: {
      type: String,
      default() {
        return "";
      },
    },
    textColor: {
      type: Boolean,
      default() {
        return false;
      },
    },
    note: {
      type: String,
      default() {
        return "";
      },
    },
    cityLists: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    color() {
      if (this.textColor) {
        return {
          color: "color",
        };
      } else {
        return {
          default: "color",
        };
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.city-list {
  border-bottom: 10px solid #ececec;
}

.title {
  font-size: 14px;
  padding: 12px;
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
  span {
    color: #ccc;
  }
}
.content {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  .item {
    padding: 4px;
    width: 93.5px;
    height: 36px;
    text-align: center;
    line-height: 28px;

    border-right: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  .item:nth-child(4n) {
    border-right: none;
  }
  /deep/ .item {
    .text-dot();
  }
}
.color {
  color: @main-color;
}
.default {
  color: @text-color;
}
</style>
