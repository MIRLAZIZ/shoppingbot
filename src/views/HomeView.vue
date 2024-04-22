<script setup>

import { ElRow, ElCol, ElCard, ElButton, ElIcon } from 'element-plus'
import 'element-plus/dist/index.css'
import { onMounted, ref } from 'vue';
import cola from '@/assets/imgs/cola.jpg'
import pitsa from '@/assets/imgs/pitsa.jpg'
import pitsa2 from '@/assets/imgs/pizza-png-15.png'
import Carousel from '@/views/carousel.vue'
import ProductSize from '@/views/ProductSize.vue'
import { useHomeStore } from '@/stores/home.js'
const store = useHomeStore()

const acteveCategory = ref(1)
const num = ref(1)

const categorys = ref([
  {
    id: 1,
    name: 'Pitsa',
    img: pitsa,
    procut_id: 1,
    type: 'pitsa'

  },
  {
    id: 2,
    name: 'ichimliklar',
    img: cola,
    procut_id: 2,
    type: 'ichimlik'
  },
  {
    id: 3,
    name: 'sushi',
    img: pitsa,
    procut_id: 3,
    type: 'sushi'
  },

  {
    id: 4,
    name: 'shashlik',
    img: cola,
    procut_id: 4,
    type: 'shashlik'

  },
  {
    id: 5,
    name: 'un',
    img: cola,
    procut_id: 5,
    type: 'un'

  },
  {
    id: 6,
    name: 'don',
    img: cola,
    procut_id: 6,
    type: 'don'

  }

])
const productData = ref({
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


})
const prodductType = ref(true)

const categoryActive = (id) => {
  acteveCategory.value = id


  const element = document.getElementById('category' + id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}


onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {

        acteveCategory.value = entry.target.getAttribute('id')
        // categoryActive(acteveCategory.value)
      }

    })
  }, {
    threshold: 0.25,
    // rootMargin: '-100px',
    // root:null
  });

  const elements = document.querySelectorAll('.productCategory');
  elements.forEach((element) => {
    observer.observe(element);
  });




});

const handleProductDataScroll = () => {

    document.getElementById('category' + acteveCategory.value).scrollIntoView(true, { behavior: 'smooth', block: "start" });
  // document.getElementById('category' + acteveCategory.value).scrollIntoView(true, { behavior: 'smooth',  block: "center"});

  // const productDataElements = document.querySelectorAll('.productCategory');
  // productDataElements.forEach((element, index) => {
  //   const rect = element.getBoundingClientRect();



  //   if (rect.top <= 0 && rect.bottom <= window.innerHeight) {
  //     // let elementId = element.getAttribute('id');
  //     // document.getElementById('category' + acteveCategory.value).scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // });
};
const selectProductType = ref()
const prodductAddbasket = item => {
  if (item.productSize) {
    prodductType.value = false
    selectProductType.value = item



  }
  else {
    item.is_basket = true
    store.basket.push(item)

  }
}





</script>

<template>
  <!-- <Carousel/> -->
  <div class="relative  w-full  ">
  


    <div class="h-full w-full bg-white  darkClass z-10  absolute transition-all duration-[.5s] "
      :class="{ productSizewidth: prodductType }">
      <ProductSize @hide="prodductType = true" :selectProductType="selectProductType"
        class="opacity-1 transition-all duration-[.5s]" :class="{ productSizewidthContent: prodductType }" />
    </div>

    <!-- category -->
    <div class="flex overflow-x-auto category  ">

      <a v-for="item in categorys" :key="item.id" :class="{ 'active': acteveCategory == item.procut_id }"
        :style="`margin-left:${item.id === 1 ? '0px' : '10px'}`" @click=categoryActive(item.procut_id)
        class="p-2 categoryData border  ml-2" :href="`#${item.procut_id}`" :id="'category' + item.procut_id">
        <div class=" flex items-center justify-center ">
          <div>


            <div class="flex items-center justify-center"><img :src="item.img" alt="" class="categoryImg"></div>

            <div class=" text-center "> <small class="font-medium">{{ item.name }} {{ acteveCategory }}</small></div>

          </div>
        </div>
      </a>

    </div>


    <!-- karzinka and aksiya -->
    <!-- <div class="grid gap-4 grid-cols-2 mt-3 ">
    <div class=" border rounded-[10px] px-2 karzinka flex justify-between" @click="$router.push('/carousel')">
      <div class="p-2">Aksiya</div>
      <div><img src="@/assets/imgs/aksiya.png" alt="" style="width:60px;"></div>
    </div>





    <div class="px-2 rounded-[10px] border karzinka " @click="$router.push('/basket')">
      <div class="flex  justify-between">
        <div class="p-2">
          <p>
            Karzinka
          </p>
          <p>0 dona</p>
        </div>
        <img src="@/assets/imgs/karzinka2.png" alt="" style="width:60px;">

      </div>

    </div>

  </div> -->













    <!-- products data  -->
    <div class="  overflow-y-auto  productsData   relative " @scroll="handleProductDataScroll">
      <button class="fixed bottom-6 right-6 bg-[#6A984D] w-12 h-12 rounded-full " @click="$router.push('/basket')"> <img
          src="@/assets/imgs/karzinka2.png" alt="">
        <small
          class="absolute top-1 right-1 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center bg-red-500">{{
            store.basket.length }}</small>
      </button>

      <div v-for="category in categorys" :key="category.id" :id="category.procut_id" class="productCategory ">


        <h1 class="font-bold text-[#6A984D] text-1xl" v-if="productData[category.type]">{{ category.name }}</h1>



        <div class="  p-2 mt-3" v-for="item in productData[category.type]" :key="item.id">

          <div class="flex">
            <!-- img  -->
            <div class="  " style="width: 25% !important;"><img :src="item.img" alt="" class="productImg"></div>
            <!-- product name  -->
            <div style="width: 75%;">
              <h3 class="mb-2 ml-2 font-bold">{{ item.name }}</h3>
              <p class="mb-2 ml-2">{{ item.subtitre }} </p>

              <div class="flex items-center justify-between ml-2">
                <p class="font-bold">{{ item.price }} so'm</p>

              </div>

              <div class="flex justify-end ">
                <button class=" text-white btn" @click="prodductAddbasket(item)" v-if="!item.is_basket">

                  Qo'shish</button>



                <div v-else>
                  <button class="btn" @click="item.count--, store.basket.count--" :disabled="item.count == 1"><el-icon
                      color="#fff">
                      <Minus />
                    </el-icon></button>


                  <span class="mx-2">{{ item.count }} </span>
                  <button class="btn" @click="item.count++, store.basket.count++" :disabled="item.count == 10"><el-icon
                      color="#fff">
                      <Plus />
                    </el-icon></button>

                </div>





              </div>





            </div>


          </div>



          <hr class="mt-3" />







        </div>



      </div>




    </div>

  </div>













</template>

<style scoped>
.dark .darkClass {
  color: #fff;
  background-color: #121212;
}

.categoryImg {
  width: 40px;
  height: 40px;
}

.category::-webkit-scrollbar {
  display: none;
}

.category {

  /* scroll-behavior: smooth; */
  transition: all 0.5s;

}


.category:hover {
  cursor: grab;
}

.active {
  background-color: #6A984D;
  border-radius: 5px;
  color: #fff;

}

.karzinka {
  background: #6A984D;
  color: #fff;
  font-size: 15px;
}

.categoryData {
  min-width: 100px !important;
  border-radius: 5px;
  transition: all 0.5s;
  scroll-behavior: smooth;
}

.productsData {
  /* scroll-behavior: smooth; */
  height: calc(85vh - 82px);
}

.productsData::-webkit-scrollbar {
  display: none;
}

/* .productImg {
  width: 350px;
} */
.productSizewidth {
  width: 0;
}

.productSizewidthContent {
  opacity: 0;
}
</style>
