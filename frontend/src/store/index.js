import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//import { get } from '../../../backend/models/Product'


Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    cartCount: 0,
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    },
  },
  actions: {
    loadProducts({commit}){
      axios .get('http://localhost:5000/api/products')
            .then(data => {
              console.log(data.data)
              let products = data.data
              commit('setProducts', products)
            })
            .catch(error => {
              console.log(error)
            })
    },
    },
    getters: {
      getProductById: state => state.products.find(prod => prod._id)
    }
    
  },
  
)
