export default {
  'INIT_STOCKS'(state, stocks) {
    state.stocks = stocks
  },

  'RND_STOCKS'(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.floor(Math.random() * 100) + 50
    })
  }
}
