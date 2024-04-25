import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import cola from '@/assets/imgs/cola.jpg'
import pitsa from '@/assets/imgs/pitsa.jpg'
import pitsa2 from '@/assets/imgs/pizza-png-15.png'


export const useHomeStore = defineStore('home', {
 
  state: () => ({
  basket:[],
   productData: {
    pitsa: [{
      id: 1,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'pitsa',
      criterion: 'kg',
      is_basket: false,
      productSize: null,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
    },
    {
      id: 2,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'pitsa',
      criterion: 'kg',
      is_basket: false,
      productSize: null,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    },
    {
      id: 3,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'pitsa',
      productSize: ['25', '50',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    }, {
      id: 4,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'pitsa',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    }, {
      id: 5,
      name: 'pitsa',
      img: pitsa2,
      productName: 'Pitsa',
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'pitsa',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
  
    }, {
      id: 6,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'pitsa',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    }, {
      id: 7,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'pitsa',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
    }],
  
    ichimlik: [
  
      {
        id: 1,
        name: 'cola',
        img: cola,
        subtitre: 'lorem ipsum dolor sit amet',
        price: 200,
        type: 'ichimlik',
        criterion: 'dona',
        is_basket: false,
        productSize: [150, 200],
        count: 1,
        criterionNumber: 1,
        totlCount: 200
  
  
  
  
  
      },
      {
        id: 2,
        name: 'cola',
        img: cola,
        subtitre: 'lorem ipsum dolor sit amet',
        price: 200,
        type: 'ichimlik',
        criterion: 'kg',
        is_basket: false,
        productSize: null,
        count: 1,
        criterionNumber: 1,
        totlCount: 200
  
  
  
  
      },
      {
        id: 3,
        name: 'cola',
        img: cola,
        subtitre: 'lorem ipsum dolor sit amet',
        price: 200,
        type: 'ichimlik',
        criterion: 'kg',
        is_basket: false,
        productSize: null,
        count: 1,
        criterionNumber: 1,
        totlCount: 200
  
  
  
  
      },
      {
        id: 4,
        name: 'cola',
        img: cola,
        subtitre: 'lorem ipsum dolor sit amet',
        price: 200,
        type: 'ichimlik',
        criterion: 'kg',
        is_basket: false,
        productSize: null,
        count: 1,
        criterionNumber: 1,
        totlCount: 200
  
  
  
  
      },
      {
        id: 5,
        name: 'cola',
        img: cola,
        subtitre: 'lorem ipsum dolor sit amet',
        price: 200,
        type: 'ichimlik',
        criterion: 'kg',
        is_basket: false,
        productSize: null,
        count: 1,
        criterionNumber: 1,
        totlCount: 200
  
  
  
  
      }],
    sushi: [{
      id: 1,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'sushi',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
    },
    {
      id: 2,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'sushi',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
    },
    {
      id: 3,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'sushi',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    }, {
      id: 4,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'sushi',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    }, {
      id: 5,
      name: 'pitsa',
      img: pitsa2,
      productName: 'Pitsa',
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'sushi',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    }, {
      id: 6,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'sushi',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
    }, {
      id: 7,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'sushi',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
    }],
  
    shashlik: [{
      id: 1,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      criterion: 'kg',
      is_basket: false,
      productSize: null,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
    },
    {
      id: 2,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      criterion: 'kg',
      is_basket: false,
      productSize: null,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
    },
    {
      id: 3,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      criterion: 'kg',
      is_basket: false,
      productSize: null,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
    }, {
      id: 4,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      criterion: 'kg',
      is_basket: false,
      productSize: null,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
    }, {
      id: 5,
      name: 'pitsa',
      img: pitsa2,
      productName: 'Pitsa',
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      criterion: 'kg',
      is_basket: false,
      productSize: null,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
    }, {
      id: 6,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'pitsa',
      criterion: 'kg',
      is_basket: false,
      productSize: null,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
    }, {
      id: 7,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'pitsa',
      criterion: 'kg',
      is_basket: false,
      productSize: null,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
    }],
    don: [{
      id: 1,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
    },
    {
      id: 2,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    },
    {
      id: 3,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    }, {
      id: 4,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    }, {
      id: 5,
      name: 'pitsa',
      img: pitsa2,
      productName: 'Pitsa',
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    }, {
      id: 6,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'pitsa',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
    }, {
      id: 7,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'pitsa',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
    }],
    un: [{
      id: 1,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
    },
    {
      id: 2,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    },
    {
      id: 3,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
  
    }, {
      id: 4,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    }, {
      id: 5,
      name: 'pitsa',
      img: pitsa2,
      productName: 'Pitsa',
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'shashlik',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
  
    }, {
      id: 6,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'pitsa',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
  
  
  
    }, {
      id: 7,
      name: 'pitsa',
      img: pitsa2,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'pitsa',
      productSize: ['25', '25',],
      criterion: 'kg',
      is_basket: false,
      count: 1,
      criterionNumber: 1,
      totlCount: 200
  
    }]
  
  
  }
  }),
  actions: {
    getCategory() {
      http.get('book/category')
    }
    },
  })

