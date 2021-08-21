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
export const requestSearchSite = (city_id,keyword) =>
  request({
    url: "/v1/pois",
    params: {
      city_id,
      keyword
    }
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
