/*
 * 格式化工具函数
 */

import { BASE_URL } from "@/constant";

// 筛选商品详情对象
export const resFood = (food) => {
  return food.foods.map((item) => {
    item.image_path = resfoodImage(item.image_path);
    return item;
  });
};

// 食品图片地址
// eslint-disable-next-line
export function resfoodImage(img_url) {
  // eslint-disable-next-line
  if (!!img_url.indexOf("http") && !!img_url.indexOf("blob")) {
    return `${BASE_URL}/img/${img_url}`;
  } else {
    img_url = img_url.replace("blob:http://localhost:8080", `${BASE_URL}/img`);
    img_url = img_url.replace("blob:http://localhost:8002", `${BASE_URL}/img`);
    return img_url;
  }
}

export const formatimage = (url) => {
  let newUrl = url.replace(
    url.substring(0, 3),
    `${url.substring(0, 1)}/${url.substring(1, 3)}/`
  );

  return `https://fuss10.elemecdn.com/${newUrl}.jpeg`;
};
export const baseImg = (url) => {
  return `${BASE_URL}/img/${url}`;
};
