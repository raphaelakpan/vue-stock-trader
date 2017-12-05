import stocks from '../../../data/stocks'

export default {
  initStocks({ commit }) {
    commit('INIT_STOCKS', stocks)
  },

  randomizeStocks({ commit }) {
    commit('RND_STOCKS')
  }
}
