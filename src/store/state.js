/*
 * state
 */
import { getLocalStorage } from "@/utils/localStorage";

console.log(getLocalStorage("cartList"));
export default {
  // 历史记录
  records: getLocalStorage("records") || [],
  // 商品信息
  shopInfo: getLocalStorage("shopInfo") || {},
  // 购物车列表
  cartList: getLocalStorage("cartList") || {},
};
