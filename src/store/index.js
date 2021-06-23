import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '../services/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typeOfFilter: null,
    textTypeFiltered: '',
    filteredType: null,
    allFlags: [],
    load: 1,
    borders: [],
    selectedRegionSearch: null,
    itemsToShow: []
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
    },

    CHANGE_LOADER (state, payload) {
      state.load += 1
    },

    ADD_BORDERS (state, payload) {
      state.borders = payload
    },

    CHANGE_SELECTED_REGION_SEARCH (state, payload) {
      state.selectedRegionSearch = payload
    },

    CHANGE_PAGINATION (state, payload) {
      state.itemsToShow = payload
    }
  },

  actions: {
    async GET_FLAGS (context, payload) {
      /* console.log(payload) */
      const params = payload ? `/${payload.type}/${payload.filtered}` : '/all'
      const filteredFlags = []

      try {
        const { data } = await api.get(params)

        for (const i in data) {
          filteredFlags.push(data[i])
        }
        /* console.log(filteredFlags) */

        context.commit('ADD_ALL_FLAGS', filteredFlags)
      } catch (err) {
        console.error(err)
      }
    },

    async GET_BORDERS (context, payload) {
      /* console.log(payload) */
      const border = []
      const alpha = 'alpha'

      for (const i in payload) {
        const { data } = await api.get(`/${alpha}/${payload[i]}`)
        border.push(data)
      }
      /* console.log(border) */
      context.commit('ADD_BORDERS', border)
    }
  },

  modules: {}
})
