/*
 * mutations
 */
import {
  SET_RECORDS,
  REMOVE_RECORDS,
  SET_SHOPINFO,
  SET_CART_LIST,
  CLEAR_CART_LIST,
} from "./mutations-type";
import { setLocalStorage, removeLocalStorage } from "@/utils/localStorage";

export default {
  // 设置搜索城市记录
  [SET_RECORDS](state, records) {
    state.records.push(records);
    setLocalStorage("records", state.records);
  },
  // 亲空城市搜索记录
  [REMOVE_RECORDS](state, records) {
    state.records = records;
    removeLocalStorage("records");
  },
  // 设置店铺详情
  [SET_SHOPINFO](state, shopInfo) {
    state.shopInfo = shopInfo;
    setLocalStorage("shopInfo", state.shopInfo);
  },
  // 添加购物车列表
  [SET_CART_LIST](state, { foodIndex, newFoods }) {
    try {
      state.cartList[foodIndex] = newFoods;
      console.log(state.cartList);
      // 保存到浏览器缓存
      setLocalStorage("cartList", state.cartList);
    } catch (error) {
      return;
    }
  },
  // 清空购物车列表
  [CLEAR_CART_LIST](state) {
    let newCartList = {};
    console.log("清空");
    for (const key in state.cartList) {
      if (key == key * 1) {
        console.log(key);
        state.cartList[key] = [];
      }
    }
    console.log(newCartList);
    state.carList = newCartList;
    setLocalStorage("carList", state.carList);
  },
};
