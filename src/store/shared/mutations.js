export default {
  'SET_LOADING': (state, value) => {
    state.loading = !!value
  },

  'SET_NOTICE': (state, notice) => {
    state.notice = notice
  }
}
