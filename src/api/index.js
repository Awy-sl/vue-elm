/*
 * api.js
 */
import request from "./config";

// 获取城市列表
export const requestCityList = (type) =>
  request({
    url: "/v1/cities",
    params: {
      type,
    },
  });
