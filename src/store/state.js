/*
 * state
 */
import { getLocalStorage } from "@/utils/localStorage";

export default {
  // 历史记录
  records: getLocalStorage("records") || [],
  // 商品信息
  shopInfo: getLocalStorage("shopInfo") || {},
};
