import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//import firebase to store 
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import "firebase/compat/storage";
import config from '../firebase/config'
import { doc, getFirestore } from "firebase/firestore";


//init firebase
firebase.initializeApp(config)

Vue.use(Vuex)
const baseURl = "https://634f7b84df22c2af7b52462f.mockapi.io/"
export default new Vuex.Store({
  state: {
    users: [],
    products: [],
    product: null,
    category: [],
    db: firebase.firestore(),
    storageRef: firebase.storage().ref(),
    store: getFirestore(firebase.initializeApp(config)),
    currentUser: firebase.auth().currentUser,
    isLoading: true,
  },
  getters: {
    listUsers: (state) => state.users,
    currentUser: (state) => state.currentUser,
    products: (state) => state.products,
    product: (state) => state.product,
    db: state => state.db,
    storageRef: state => state.storageRef,
    isLoading: state => state.isLoading,
    store: state => state.store
  },
  mutations: {
    SET_CURRENTUSER(state, payload) {
      state.currentUser = payload
    },
    SET_USERS(state, users) {
      state.users = users
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_PRODUCT(state, payload) {
      state.product = payload
    }
  },
  actions: {
    async login(context, userInfo) {
      context.commit('SET_CURRENTUSER', userInfo)
      console.log('okkkk')
    },
    async logout(context) {
      await firebase.auth().signOut();
      context.commit('SET_USER', firebase.auth().currentUser)
    },
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
        //get products from firebase
        let products = []
        const snapshot = await this.getters.db.collection('products').get()
        products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        commit('SET_PRODUCTS', products)
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async register(context, userInfo) {
      this.getters.db.collection('users').add(userInfo)
    },
    async setLoading(context) {
      context.commit('SET_LOADING', false)
      console.log("sdsdsd")
    },
    async getProductById(context, productId) {
      let productInfo = await this.getters.db.collection("products").doc(productId).get()
      let product = {
        id: productId,
        ...productInfo.data()
      }
      context.commit('SET_PRODUCT', product)
    }
  },
  modules: {
  }
})
