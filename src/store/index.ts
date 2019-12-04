/**
 * 每个module分开写
 */

import Vue from 'vue';
import Vuex from 'vuex';
import counter from './counter';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter,
  },
  strict: process.env.NODE_ENV !== 'production',
});
