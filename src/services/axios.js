import Axios from 'axios'
import Vue from 'vue'

export const api = Axios.create({
  baseURL: 'https://restcountries.com/'
})

Vue.use({
  install (Vue) {
    Vue.prototype.$axios = api
  }
})
