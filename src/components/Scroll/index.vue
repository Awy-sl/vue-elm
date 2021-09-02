<template>
  <div ref="wrapper">
    <div class="content" :style="sty">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveDom from "@better-scroll/observe-dom";

Bscroll.use(Pullup).use(ObserveDom);

export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullupLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
    sty: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.crateScroll();
  },
  updated() {
    this.refresh();
  },
  methods: {
    //  创建滚动
    crateScroll() {
      if (!this.scroll) {
        const { probeType, pullupLoad } = this;
        //   获取滚都dom
        const { wrapper } = this.$refs;
        this.$scroll = new Bscroll(wrapper, {
          scrollY: true,
          click: true,
          observeDOM: true,
          probeType,
          pullupLoad,
        });
        // 挂载scorll事件
        this.scrollEvent();
        this.refresh();
      } else {
        this.$scroll.refresh();
      }
    },
    // 创建 scorll事件
    scrollEvent() {
      this.$scroll.on("scroll", (position) => {
        this.$emit("onScroll", position);
      });
    },
    // 滚动跳跳转到顶部
    scrollTo(x, y, time = 500) {
      return this.$scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.$scroll.refresh();
    },
  },
};
</script>

<style></style>
