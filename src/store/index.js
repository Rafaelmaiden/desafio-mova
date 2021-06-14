import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '../services/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typeOfFilter: '',
    textTypeFiltered: '',
    filteredType: '',
    allFlags: []
  },

  mutations: {
    CHANGE_TYPE_OF_FILTER (state, payload) {
      state.typeOfFilter = payload.type
      state.textTypeFiltered = payload.textType
    },

    ADD_ALL_FLAGS (state, payload) {
      state.allFlags = payload
    },

    CHANGING_FILTERED_TYPE (state, payload) {
      state.filteredType = payload
    }
  },

  actions: {
    async GET_FLAGS (context, payload) {
      const params = payload ? `/${payload.type}/${payload.filtered}` : '/all'
      const filteredFlags = []

      try {
        const { data } = await api.get(params)

        for (const i in data) {
          filteredFlags.push(data[i])
        }
        context.commit('ADD_ALL_FLAGS', filteredFlags)
      } catch (err) {
        console.error(err)
      }
    }
  },

  modules: {}
})
