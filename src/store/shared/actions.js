import api from '../../api';

export default {
  loadData: ({ commit }) => {
    commit('SET_LOADING', true);

    api.get('/data.json')
    .then((response) => {
      const data = response.data;

      if (data) {
        console.log(data);
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
