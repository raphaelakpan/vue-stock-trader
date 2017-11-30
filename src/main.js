import Vue from 'vue'
import Buefy from 'buefy'
import VueRouter from 'vue-router'

import App from './App.vue'
import 'buefy/lib/buefy.css'
import routes from './routes'

Vue.use(Buefy)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
