export default {
  buyStock({ commit }, order) {
    commit('BUY_STOCK', order)
  },

  sellStock ({ commit }, order) {
    commit('SELL_STOCK', order)
  }
}
