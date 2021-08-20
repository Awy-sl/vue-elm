/*
 * config.js
 */
import axios from "axios";

const BASE_URL = "https://elm.cangdu.org";

export default function request(config) {
  //  创建 axios 实列
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 25000,
  });

  //  创建请求拦截器
  instance.interceptors.request.use(
    (config) => config,
    (err) => err
  );
  //  创建响应拦截器
  instance.interceptors.response.use(
    (res) => res.data,
    (err) => {
      throw err;
    }
  );
  return instance(config);
}
