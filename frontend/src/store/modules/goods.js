import axios from 'axios'
import mutations from '@/store/mutations'

const { GOODS, CHOOSEN, CURR_PAGE, MAX_PAGE, CITY, ALL_CITIES, PRICES } = mutations

const goodsStore = {
  namespaced: true,
  state: {
    city: null,
    currentPage: 1,
    maxPage: null,
    listOfCities: ['SPB', 'MSK'],
    listOfGoods: [],
    listOfChoosenGoods: [],
    listOfTitles: ['Название', '', 'Описание', 'Цена', ''],
    prices: [1, 2, 3]
  },
  getters: {
    allGoods: ({ listOfGoods }) => listOfGoods,
    currPage: ({ currentPage }) => currentPage,
    allCities: state => { return state.listOfCities },
    getCity: ({ city }) => city,
    choosenGoods: ({ listOfChoosenGoods }) => listOfChoosenGoods,
    titles: ({ listOfTitles }) => listOfTitles,
    getPrices: ({ prices }) => prices
  },
  mutations: {
    [GOODS] (state, value) {
      state.listOfGoods = value
    },
    [CHOOSEN] (state, value) {
      state.listOfChoosenGoods = value
    },
    [CURR_PAGE] (state, value) {
      state.currentPage = value
    },
    [MAX_PAGE] (state, value) {
      state.maxPage = value
    },
    [ALL_CITIES] (state, value) {
      state.listOfCities = value
    },
    [CITY] (state, value) {
      state.city = value
    },
    [PRICES] (state, value) {
      state.prices = value
    }
  },
  actions: {
    updateListOfChoosen ({ commit }, currentList) {
      commit('CHOOSEN', currentList)
    },
    initCities: {
      handler ({ dispatch }) {
        dispatch('fetchCities')
      },
      root: true
    },
    initGoods: {
      handler ({ dispatch }) {
        dispatch('fetchGoods')
      },
      root: true
    },
    initPrices: {
      handler ({ dispatch }) {
        dispatch('fetchPrices')
      },
      root: true
    },
    async fetchCities ({ getters, commit }) {
      try {
        await axios
          .get('http://localhost:5000/cities')
          .then(response => (commit(ALL_CITIES, response.data)))
      } catch (err) {
        console.log(err)
      }
    },
    async fetchGoods ({ getters, commit }) {
      try {
        await axios
          .get('http://localhost:5000/get_goods/' + getters.getCity)
          .then(response => (commit(GOODS, response.data.goods)))
      } catch (err) {
        console.log(err)
      }
    },
    async fetchPrices ({ getters, commit }) {
      try {
        await axios
          .post('http://localhost:5000/get_prices/' + getters.getCity, { products: getters.choosenGoods.id })
          .then(response => (commit(PRICES, response.data.products_prices)))
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export default goodsStore
