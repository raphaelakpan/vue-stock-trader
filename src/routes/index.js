import Home from '../components/Home.vue'
import Stocks from '../components/stocks/Stocks.vue'
import Portfolio from '../components/portfolio/Portfolio.vue'

import Signin from '../components/user/Signin.vue'
import Signup from '../components/user/Signup.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/stocks', component: Stocks },
  { path: '/portfolio', component: Portfolio },
  { path: '/signin', component: Signin },
  { path: '/register', component: Signup },
]

export default routes
