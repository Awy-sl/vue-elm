/*
 * actions
 */

import { REMOVE_RECORDS } from "./mutations-type";

export default {
  removeRecords({ commit }) {
    commit(REMOVE_RECORDS, []);
  },
};
