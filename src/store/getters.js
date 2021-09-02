/*
 * getters
 */

import { BASE_URL } from "@/constant";

export default {
  // 获取地区搜索记录
  getRecords({ records }) {
    return records;
  },
  // 获取店铺信息
  getShopInfo({ shopInfo }) {
    console.log(shopInfo);
    const newShopInfo = {
      img: BASE_URL + "/img/" + shopInfo.image_path,
      name: shopInfo.name,
      activity: shopInfo.activities,
      tips: shopInfo.piecewise_agent_fee.tips,
      announcement: shopInfo.promotion_info,
      score: shopInfo.rating,
      shipping: shopInfo.float_minimum_order_amount,
      float_delivery_fee: shopInfo.float_delivery_fee,
    };
    return newShopInfo;
  },
  // 获取购物车分类商品数量
  getCartListFoodNum({ cartList }) {
    return (index) => {
      try {
        let count = 0;
        cartList[index].forEach((item) => {
          count += item.count;
        });
        return count;
      } catch (error) {
        return 0;
      }
    };
  },
  // 获取购物车分类商品数量
  getCartListClassNum({ cartList }) {
    return (index, id) => {
      try {
        const food = cartList[index].filter((item) => item.item_id === id)[0];
        console.log();
        const { count } = food;
        return count;
      } catch (error) {
        return 0;
      }
    };
  },
  // 获取购物车商品总数
  getCartListNum({ cartList }) {
    try {
      let count = 0;
      for (const i in cartList) {
        cartList[i].forEach((item) => {
          count += item.count;
        });
      }
      return count;
    } catch (error) {
      return 0;
    }
  },
  // 获取购物车列表
  getCartList({ cartList }) {
    return cartList;
  },
  // 获取购物车总价格
  getCartListPrice({ cartList }) {
    let price = 0;
    try {
      for (const key in cartList) {
        cartList[key].forEach((item) => {
          price += item.specfoods[0].price * item.count;
        });
      }
      return `${price > 10 ? price : 0 + price}.00`;
    } catch (error) {
      return `${price > 10 ? price : 0 + price}.00`;
    }
  },
};
