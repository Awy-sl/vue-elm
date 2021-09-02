/*
 * mixins
 */

import { mapGetters } from "vuex";
import GoBack from "components/GoBack";
import TopBar from "components/TopBar";
import { baseImg } from "@/utils/format.js";

// 商品详情混入
export const shopInfoMixin = {
  computed: {
    ...mapGetters({
      shopInfo: "getShopInfo",
    }),
  },
};
export const goBackMixin = {
  components: {
    GoBack,
    TopBar,
  },
};

// 食品列表内容混入
export const foodContentMixin = {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};

// 格式化图片地址
export const foarmImgMinxin = {
  computed: {
    basImage() {
      return baseImg;
    },
  },
};
