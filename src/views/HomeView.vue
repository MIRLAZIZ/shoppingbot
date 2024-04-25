<script setup>

import { ElIcon } from 'element-plus'
import { onMounted, ref } from 'vue';
import cola from '@/assets/imgs/cola.jpg'
import pitsa from '@/assets/imgs/pitsa.jpg'
import pitsa2 from '@/assets/imgs/pizza-png-15.png'

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
  <div class="relative    ">
    <div class="h-full w-full bg-white  darkClass z-10  absolute transition-all duration-[.5s] "
      :class="{ productSizewidth: prodductType }">
      <ProductSize @hide="prodductType = true" :selectProductType="selectProductType"
        class="opacity-1 transition-all duration-[.5s]" :class="{ productSizewidthContent: prodductType }" />
    </div>
     
    <div class="h-auto  py-3">
      <div class="flex items-center">
        <img src="@/assets/imgs/logo.png" alt="" class=" h-[80px] ">
        <h1 class="text-center text-2xl font-bold text-[#6A984D]">Bozorligim</h1>
      </div>


      <!-- category -->
      <div class="flex overflow-x-auto category  ">

        <a v-for="item in categorys" :key="item.id" :class="{ 'active': acteveCategory == item.procut_id }"
          :style="`margin-left:${item.id === 1 ? '0px' : '10px'}`" @click=categoryActive(item.procut_id)
          class="p-2 categoryData border  ml-2" :href="`#${item.procut_id}`" :id="'category' + item.procut_id">
          <div class=" flex items-center justify-center ">
            <div>


              <div class="flex items-center justify-center"><img :src="item.img" alt="" class="categoryImg"></div>

              <div class=" text-center "> <small class="font-medium">{{ item.name }}</small></div>

            </div>
          </div>
        </a>

      </div>

    </div>







    <!-- products data  -->
    <div class="  overflow-y-scroll  productsData  h-[67vh] pb-16 relative " @scroll="handleProductDataScroll">
      <button class="fixed bottom-6 right-6 bg-[#6A984D] w-12 h-12 rounded-full " @click="$router.push('/basket')"> <img
          src="@/assets/imgs/karzinka2.png" alt="">
        <small
          class="absolute top-1 right-1 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center bg-red-500">{{
            store.basket.length }}</small>
      </button>

      <div v-for="category in categorys" :key="category.id" :id="category.procut_id" class="productCategory ">


        <h1 class="font-bold text-[#6A984D] text-1xl" >{{ category.name }}</h1>



        <div class="  p-2 mt-3" v-for="item in store.productData[category.type]" :key="item.id">

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
/* body {
  overflow-y: hidden;

} */


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
  touch-action: pan-y !important;


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
