import store from '../store'

export default (to, from, next) => {
  if (store.state.user.token) {
    next()
  } else {
    next('/signin')
  }
}
