import api from '../../api/auth'
import apiKey from '../../api/api_key'
import router from '../../router'

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
      dispatch('loadData')
      dispatch('setLogoutTimer', response.data.expiresIn)
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
      dispatch('loadData')
      dispatch('setLogoutTimer', response.data.expiresIn)
    }).catch(error => {
      console.log(error)
    })
  },

  logOutUser({ commit }) {
    commit('LOGOUT_USER')
    router.replace('/')
  },

  setLogoutTimer({ commit }, expiresIn) {
    setTimeout(() => {
      commit('LOGOUT_USER')
      router.replace('/')
    }, expiresIn * 1000)
  }
}

const mutations = {
  'SET_USER': (state, { idToken, localId, email, name }) => {
    state.id = localId ? localId : state.id
    state.token = idToken ? idToken : state.token
    state.email = email ? email : state.email
    state.name = name ? name : state.name
  },

  'LOGOUT_USER': (state) => {
    for(let key in state) {
      state[key] = null
    }
  }
}

const getters = {
  user(state) {
    return state
  },
  isAuthenticated(state) {
    return !!state.token
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
