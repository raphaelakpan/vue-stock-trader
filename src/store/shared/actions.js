import api from '../../api';
import router from '../../router';

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
        commit('SET_NOTICE', { message: 'Loaded last saved stocks!', type: 'success' })

        router.push('/stocks')
      }
    })
  },

  setLoading: ({ commit }, value) => {
    commit('SET_LOADING', value)
  },

  setNotice: ({ commit }, notice) => {
    commit('SET_NOTICE', notice)
  }
}
