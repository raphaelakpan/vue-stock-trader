import Vue from 'vue'
import Buefy from 'buefy'
import VueRouter from 'vue-router'

import App from './App.vue'
import 'buefy/lib/buefy.css'
import routes from './routes'
import store from './store'

Vue.use(Buefy)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
