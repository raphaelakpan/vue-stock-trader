import api from '../../api'

const state = {
  stocks: []
}

const actions = {
  initStocks({ commit, getters }) {
    const { token } = getters.user
    if (!token) { return }

    commit('SET_LOADING', true)
    api.get('data.json?auth=' + token).then(response => {
      const { funds, stocks, stockPortfolio } = response.data
      commit('INIT_STOCKS', { funds, stocks, stockPortfolio })
      commit('SET_LOADING', true)
    }).catch(error => {
      console.log(error)
    })

  },

  randomizeStocks({ commit }) {
    commit('RND_STOCKS')
    commit('SET_NOTICE', { message: 'New day trades set! ', type: 'warning' })
  }
}

const mutations = {
  'INIT_STOCKS'(state, stocks) {
    state.stocks = stocks
  },

  'RND_STOCKS'(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.floor(Math.random() * 100) + 50
    })
  }
}

const getters = {
  stocks(state) {
    return state.stocks
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
