import Vue from 'vue'
import Buefy from 'buefy'
import Snotify from 'vue-snotify';
import 'vue-snotify/styles/material.css'; // or dark.css or simple.css

import App from './App.vue'

import 'buefy/lib/buefy.css'
import router from './router'
import store from './store'

Vue.use(Buefy)
Vue.use(Snotify)

Vue.filter('currency', value => {
  return '$' + value.toLocaleString()
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
