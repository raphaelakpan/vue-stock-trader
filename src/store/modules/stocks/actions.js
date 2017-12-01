import stocks from '../../../data/stocks'

export default {
  buyStock({ commit }, order) {
    commit()
  },

  initStocks({ commit }) {
    commit('INIT_STOCKS', stocks)
  },

  randomizeStocks({ commit }) {
    commit('RND_STOCKS')
  }
}
