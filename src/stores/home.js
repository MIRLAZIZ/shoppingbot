import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
 
  state: () => ({
  basket:[],
  }),
  actions: {
    getCategory() {
      http.get('book/category')
    }
    },
  })

