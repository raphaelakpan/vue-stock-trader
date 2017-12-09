const state = {
  funds: 10000,
  stocks: []
}

const actions = {
  buyStock({ commit }, order) {
    commit('BUY_STOCK', order)
  },

  sellStock ({ commit }, order) {
    commit('SELL_STOCK', order)
  }
}

const mutations = {
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
  },

  'INIT_PORTFORLIO': (state, { funds, stocks }) => {
    state.funds = funds
    state.stocks = stocks || []
  }
}

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id)

      if (!record) {
        return;
      }

      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },

  funds (state) {
    return state.funds
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
