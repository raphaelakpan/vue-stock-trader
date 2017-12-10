import Home from '../components/Home.vue'
import Stocks from '../components/stocks/Stocks.vue'
import Portfolio from '../components/portfolio/Portfolio.vue'

import Signin from '../components/user/Signin.vue'
import Signup from '../components/user/Signup.vue'

import authGuard from './authGuard'

const routes = [
  { path: '/', component: Home },
  { path: '/stocks', component: Stocks, beforeEnter: authGuard },
  { path: '/portfolio', component: Portfolio, beforeEnter: authGuard },
  { path: '/signin', component: Signin },
  { path: '/register', component: Signup },
]

export default routes
