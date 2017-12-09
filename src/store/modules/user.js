import api from '../../api/auth'
import apiKey from '../../api/api_key'

const state = {
  id: null,
  token: null,
  email: null,
  name: null
}

const actions = {
  registerUser({ commit, dispatch }, { email, password }) {
    const authData = { email, password, returnSecureToken: true }

    commit('SET_LOADING', true);
    api.post('signupNewUser?key=' + apiKey, authData)
    .then(response => {
      commit('SET_USER', response.data)
      dispatch('loadData');
    }).catch(error => {
      console.log(error)
    })
  },

  signInUser({ commit, dispatch }, { email, password }) {
    const authData = { email, password, returnSecureToken: true }

    commit('SET_LOADING', true);
    api.post('verifyPassword?key=' + apiKey, authData)
    .then(response => {
      commit('SET_USER', response.data)
      dispatch('loadData');
    }).catch(error => {
      console.log(error)
    })
  }
}

const mutations = {
  'SET_USER': (state, { idToken, localId, email, name }) => {
    state.id = localId ? localId : state.id
    state.token = idToken ? idToken : state.token
    state.email = email ? email : state.email
    state.name = name ? name : state.name
  }
}

const getters = {
  user(state) {
    return state
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
