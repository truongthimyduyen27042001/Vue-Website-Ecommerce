import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const baseURl = "https://634f7b84df22c2af7b52462f.mockapi.io/"
export default new Vuex.Store({
  state: {
    users: [],
    products: [],
    category: [],
    currentUser: null
  },
  getters: {
    listUsers: (state) => state.users,
    getCurrentUser: (state) => state.currentUser,
    listProducts: (state) => state.products
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get(`${baseURl}user`)
        commit('SET_USERS', response.data)
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get(`${baseURl}product`)
        commit('SET_PRODUCTS', response.data)
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
  modules: {
  }
})
