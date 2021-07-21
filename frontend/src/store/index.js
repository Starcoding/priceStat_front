import { createStore } from 'vuex'
import goods from './modules/goods'

const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    goods
  }
})

store.dispatch('initCities')

export default store
