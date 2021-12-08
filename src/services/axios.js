import Axios from 'axios'
import Vue from 'vue'

export const api = Axios.create({
  baseURL: 'https://restcountries.com/#api-endpoints-code'
})

Vue.use({
  install (Vue) {
    Vue.prototype.$axios = api
  }
})
