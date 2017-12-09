import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import user from './modules/user';

import state from './shared/state'
import mutations from './shared/mutations'
import actions from './shared/actions'
import getters from './shared/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    stocks,
    portfolio,
    user
  }
})
