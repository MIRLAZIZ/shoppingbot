import { defineStore } from 'pinia'
import { api } from '@/utils/api'


export const useHomeStore = defineStore('home', {

  state: () => ({
    basket: [],
    category: [],
    categordata: [],
    productData: {},
    orderData: [],
    products: [],
    code: null
  }),
  actions: {
    async getCategory() {
      return await api.get('/categories').then((res) => {
        this.category = res.data.data
        this.categordata = res.data.data
      })
    },
    async getProducts() {
      return await api.get('/products')
        .then(res => {
          this.products = res.data.data
        })
    },
    //  order/create/

    async createOrder(data) {
      return await api.post('/order/create', data)
    },
    // promo code 
    async promoCode(data) {
      return await api.post('/promo/check', data)
        .then(res => {
          this.code = res.data
        })
    },

    formatPrice(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }


  },
})

