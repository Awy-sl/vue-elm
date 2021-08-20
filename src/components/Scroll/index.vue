<template>
  <div ref="wrapper">
    <div class="content">
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
  },
  created() {
    this.$nextTick(() => {
      //  创建滚动
      this.crateScroll();
    });
  },
  methods: {
    //  创建滚动
    crateScroll() {
      if (!this.scroll) {
        const { probeType, pullupLoad } = this;
        //   获取滚都dom
        const { wrapper } = this.$refs;
        this.scroll = new Bscroll(wrapper, {
          scrollY: true,
          click: true,
          observeDOM: true,
          probeType,
          pullupLoad,
        });
      } else {
        this.scroll.refresh();
      }
    },
    //  滚都事件
    scrollEvent() {},
  },
};
</script>

<style></style>
