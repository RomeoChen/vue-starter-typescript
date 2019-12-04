/**
 * 注意要加上命名空间
 */

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const counter = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};

export default counter;
