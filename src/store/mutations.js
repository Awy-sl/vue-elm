/*
 * mutations
 */
import { SET_RECORDS, REMOVE_RECORDS, SET_SHOPINFO } from "./mutations-type";
import { setLocalStorage, removeLocalStorage } from "@/utils/localStorage";

export default {
  [SET_RECORDS](state, records) {
    state.records.push(records);
    setLocalStorage("records", state.records);
  },
  [REMOVE_RECORDS](state, records) {
    state.records = records;
    removeLocalStorage("records");
  },
  [SET_SHOPINFO](state, shopInfo) {
    state.shopInfo = shopInfo;
    setLocalStorage("shopInfo", state.shopInfo);
  },
};
