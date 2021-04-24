import Vue from 'vue'
import Vuex from 'vuex'
import { AXIOS } from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: '',
    filter: '',
    countries: null
  },

  mutations: {
    type (state, payload) {
      state.type = payload
    },
    filter (state, payload) {
      state.filter = payload
    },
    countries (state, payload) {
      state.countries = payload
    }
  },

  actions: {
    async countries (context, endpoint) {
      try {
        const type = context.state.type.serve
        const { filter } = context.state
        const { data } = await AXIOS.get(endpoint || `/${type}/${filter}`)

        context.commit('countries', data)
      } catch (err) {
        console.log(err)
      }
    }
  },

  modules: {}
})
