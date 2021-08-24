/*
 * actions
 */

import { REMOVE_RECORDS, SET_RECORDS } from "./mutations-type";

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
};
