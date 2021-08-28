/*
 * getters
 */

import { BASE_URL } from "@/constant";

export default {
  getRecords({ records }) {
    return records;
  },
  getShopInfo({ shopInfo }) {
    console.log(shopInfo);
    const newShopInfo = {
      img: BASE_URL + "/img/" + shopInfo.image_path,
      name: shopInfo.name,
      activity: shopInfo.activities,
      tips: shopInfo.piecewise_agent_fee.tips,
      announcement: shopInfo.promotion_info,
      score: shopInfo.rating,
    };
    return newShopInfo;
  },
};
