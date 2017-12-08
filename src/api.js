import axios from 'axios'

export default axios.create({
  baseURL: 'https://stock-trader-5eb0c.firebaseio.com/'
})
