/*
 * mutations
 */
import { SET_RECORDS, REMOVE_RECORDS } from "./mutations-type";
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
};
