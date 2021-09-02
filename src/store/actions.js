/*
 * actions
 */

import {
  CLEAR_CART_LIST,
  REMOVE_RECORDS,
  SET_CART_LIST,
  SET_RECORDS,
} from "./mutations-type";

export default {
  setRecords({ state, commit }, records) {
    const result = state.records.filter((item) => item === records);
    if (result.length === 0) {
      console.log(result.length);
      commit(SET_RECORDS, records);
    } else {
      return;
    }
  },
  removeRecords({ commit }) {
    commit(REMOVE_RECORDS, []);
  },
  // 添加购物车 actions
  addCarList({ state: { cartList }, commit }, { foodIndex, food }) {
    let newFoods = [];
    // 商品分类存在
    if (!cartList[foodIndex]) {
      food.count = 1;
      newFoods.push(food);
      return commit(SET_CART_LIST, { foodIndex, newFoods });
    }

    const findFood = cartList[foodIndex].filter(
      (item) => item.item_id === food.item_id
    );
    if (findFood.length > 0) {
      // 该元素存在
      newFoods = cartList[foodIndex].map((item) => {
        if (item.item_id === food.item_id) {
          item.count++;
        }
        return item;
      });
      commit(SET_CART_LIST, { foodIndex, newFoods });
    } else {
      // 不存在
      food.count = 1;
      newFoods = [...cartList[foodIndex], food];
      commit(SET_CART_LIST, { foodIndex, newFoods });
    }
  },
  // 减少商品
  reduceCartList({ state: { cartList }, commit }, { foodIndex, food }) {
    let newFoods = [];
    // 商品分类不存在
    if (!cartList[foodIndex]) {
      return;
    }
    const findFood = cartList[foodIndex].filter(
      (item) => item.item_id === food.item_id
    );
    if (findFood.length > 0) {
      // 该元素存在
      newFoods = cartList[foodIndex].map((item) => {
        if (item.item_id === food.item_id) {
          item.count--;
        }
        if (item.count === 0) {
          console.log(item.count);
        }
        return item;
      });
      return commit(SET_CART_LIST, { foodIndex, newFoods });
    }
  },
  // 清空购物车 actions
  clearCarList({ commit }) {
    commit(CLEAR_CART_LIST, {});
  },
};
