/*
 * api.js
 */
import request from "./config";
import fetch from "./fetch";

// 获取城市列表
export const requestCityList = (type) =>
  request({
    url: "/v1/cities",
    params: {
      type,
    },
  });

// 获取详细城市信息
export const requestCityInfo = (id) =>
  request({
    url: `/v1/cities/${id}`,
  });

// 搜索地址
export const requestSearchSite = (city_id, keyword) =>
  request({
    url: "/v1/pois",
    params: {
      city_id,
      keyword,
    },
  });

// 根据经纬度定位
export const requestPositioning = (geohash) =>
  request({
    url: `/v2/pois/${geohash}`,
  });

// 登录
export const requestLogin = (username, password, captcha_code) => {
  console.log(username, password, captcha_code);
  return fetch("/v2/login", { username, password, captcha_code }, "POST");
};
// 获取验证码
export const requestCode = () =>
  request({
    url: "/v1/captchas",
    method: "POST",
  });

// 获取食品分类列表
export const requestFoodList = () =>
  request({
    url: "/v2/index_entry",
  });

// 获取商铺列表
export const requestShops = (latitude, longitude) =>
  request({
    url: `/shopping/restaurants?latitude=${latitude}&longitude=${longitude}`,
  });
// 获取商铺所有食品列表
export const requestFoods = (restaurant_id) =>
  request({
    url: `/shopping/v2/menu?restaurant_id=${restaurant_id}`,
  });
// 获取店铺评价信息
export const requestEvaluationInfo = (restaurant_id) =>
  request({
    url: `/ugc/v2/restaurants/${restaurant_id}/ratings/scores`,
  });
// 获取店铺评价数量
export const requestCommentClassity = (restaurant_id) =>
  request({
    url: `/ugc/v2/restaurants/${restaurant_id}/ratings/tags`,
  });
// 获取用户评价列表
export const requestUserComments = ({ id, offset, limit }) =>
  request({
    url: `/ugc/v2/restaurants/${id}/ratings`,
    params: {
      offset,
      limit,
    },
  });
// 购物车
export const requestJoinCart = (params) =>
  request({
    method: "POST",
    url: "/v1/carts/checkout",
    data: params,
  });
