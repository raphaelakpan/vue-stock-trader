import api from '../../api';

export default {
  loadData: ({ commit, getters }) => {
    const { token } = getters.user;
    if (!token) { return }

    commit('SET_LOADING', true);
    api.get('/data.json?auth=' + token)
    .then((response) => {
      const data = response.data;

      if (data) {
        const { stocks, funds, stockPortfolio } = data;

        commit('INIT_STOCKS', stocks);
        commit('INIT_PORTFORLIO', { funds, stocks: stockPortfolio })
        commit('SET_LOADING', false);
      }
    })
  },

  setLoading: ({ commit }, value) => {
    commit('SET_LOADING', value)
  }
}
