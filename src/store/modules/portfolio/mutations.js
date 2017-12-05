export default {
  'BUY_STOCK' (state, stock) {
    const { id, quantity, price } = stock
    const amount = price * quantity

    const record = state.stocks.find(element => element.id == id)
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({ id, quantity })
    }

    state.funds -= amount
  },

  'SELL_STOCK' (state, stock) {
    const { id, quantity, price } = stock
    const amount = price * quantity

    const record = state.stocks.find(element => element.id == id)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      const index = state.stocks.findIndex(element => element.id == id)
      state.stocks.splice(index, 1)
    }

    state.funds += amount
  }
}
