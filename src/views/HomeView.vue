<script setup>

import { ElIcon } from 'element-plus'
import { onMounted, ref, computed, watch, nextTick } from 'vue';
import ProductSize from '@/views/ProductSize.vue'
import { useHomeStore } from '@/stores/home.js'
import { Search, Close } from '@element-plus/icons-vue'
import Fuse from 'fuse.js';
import { useRouter } from 'vue-router'
import Carousel  from '@/components/Carousel.vue'

const store = useHomeStore()



const acteveCategory = ref(1)
const loading = ref(false)
const search = ref(null)
const searchNot = ref(false)
const searchInput = ref(null);
const bg_color = ref(null)

const elementFind = (id) => {
  return store.basket.find(el => el?.variants[0]?.id === id)
}

const categorValidate = (id) => {
  return Object.keys(store.productData).some(key => key == id)
}










function transliterate(text, toCyrillic = false) {
  const cyrillicToLatin = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'ye', 'ё': 'yo', 'ж': 'j', 'з': 'z',
    'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
    'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh',
    'э': 'e', 'ю': 'yu', 'я': 'ya',
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'Ye', 'Ё': 'Yo', 'Ж': 'J', 'З': 'Z',
    'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R',
    'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sh',
    'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
  };

  const latinToCyrillic = {
    'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д', 'yo': 'ё', 'j': 'ж', 'z': 'з',
    'i': 'и', 'y': 'й', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п', 'r': 'р',
    's': 'с', 't': 'т', 'u': 'у', 'f': 'ф', 'kh': 'х', 'ts': 'ц', 'ch': 'ч', 'sh': 'ш',
    'e': 'э', 'yu': 'ю', 'ya': 'я', 'ye': 'е', 'h': 'х',
    'A': 'А', 'B': 'Б', 'V': 'В', 'G': 'Г', 'D': 'Д', 'Yo': 'Ё', 'J': 'Ж', 'Z': 'З',
    'I': 'И', 'Y': 'Й', 'K': 'К', 'L': 'Л', 'M': 'М', 'N': 'Н', 'O': 'О', 'P': 'П', 'R': 'Р',
    'S': 'С', 'T': 'Т', 'U': 'У', 'F': 'Ф', 'Kh': 'Х', 'Ts': 'Ц', 'Ch': 'Ч', 'Sh': 'Ш',
    'E': 'Э', 'Yu': 'Ю', 'Ya': 'Я', 'H': 'Х', 'h': 'х', 'Ye': 'Е',
  };

  const transliterationMap = toCyrillic ? latinToCyrillic : cyrillicToLatin;

  return text.split('').map((char, index, array) => {
    let nextChar = array[index + 1];
    let combinedChar = char + nextChar;

    if (transliterationMap[combinedChar]) {
      array[index + 1] = '';  // Skip the next character
      return transliterationMap[combinedChar];
    } else if (transliterationMap[char]) {
      return transliterationMap[char];
    } else {
      return char;
    }
  }).join('');
}





// Function to initialize Fuse.js
function createFuseSearch(data, keys) {
  return new Fuse(data, {
    keys: keys,
    threshold: 0.2,  // Adjust threshold for fuzziness (lower is more strict, higher is more lenient)
    includeScore: true
  });
}

watch(search, async (newValue) => {
  if (newValue.length > 1) {
    const searchValueLower = newValue.toLowerCase();
    const transliteratedSearchValueToLatin = transliterate(searchValueLower, false);
    const transliteratedSearchValueToCyrillic = transliterate(searchValueLower, true);

    // Create Fuse.js instances for categories and products
    // let fuseCategory = createFuseSearch(store.categordata, ['name']);
    let fuseProduct = createFuseSearch(store.products, ['name']);

    // Search categories
    // let categoryResults = fuseCategory.search(searchValueLower)
    //   .concat(fuseCategory.search(transliteratedSearchValueToLatin))
    //   .concat(fuseCategory.search(transliteratedSearchValueToCyrillic))
    //   .map(result => result.item);

    // Ensure unique results by using a Set
    // categoryResults = Array.from(new Set(categoryResults.map(item => item.id)))
    //   .map(id => categoryResults.find(item => item.id === id));

    // if (categoryResults.length > 0) {
    //   categoryActive(categoryResults[0].id);
    //   searchNot.value = false;
    //   await categorizeProducts(store.products);
    //   await handleProductDataScroll();

    //   categoryScroll(categoryResults[0].id);

    // } 
    // else {
    // Search products if no categories are found
    let productResults = fuseProduct.search(searchValueLower)
      .concat(fuseProduct.search(transliteratedSearchValueToLatin))
      .concat(fuseProduct.search(transliteratedSearchValueToCyrillic))
      .map(result => result.item);

    productResults = Array.from(new Set(productResults.map(item => item.id)))
      .map(id => productResults.find(item => item.id === id));

    if (productResults.length > 0) {
      categorizeProducts(productResults);
      await categoryActive(productResults[0].category_id);
      await windowScroll();

      searchNot.value = false;
    } else {
      categorizeProducts([]);
      searchNot.value = true;
    }
    // }
  } else {
    categorizeProducts(store.products);
    searchNot.value = false;
  }
});



const prodductType = ref(true)

const categoryActive = (id) => {
  acteveCategory.value = id

}






const categorizeProducts = (products) => {
  const categorizedData = {};

  products.forEach(product => {
    product.basket = false

    product.variants.forEach(variant => {
      variant.count = 1
    })

    const categoryId = product.category_id;

    if (!categorizedData[categoryId]) {
      categorizedData[categoryId] = []
    }
    categorizedData[categoryId].push(product);
  });
  store.productData = categorizedData

};


const updateActiveCategoryOnScroll = () => {
  const elements = document.querySelectorAll('.productCategory');


  const offset = window.innerHeight / 2;


  let currentActiveId = null;

  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < offset) {
      // console.log(parseInt(element.getAttribute('id')));

      currentActiveId = parseInt(element.getAttribute('id'));

    }
  });

  if (currentActiveId !== null) {
    acteveCategory.value = currentActiveId;
  }
};









onMounted(() => {
  if (store.categordata.length == 0) {
    store.getCategory()

  }
  if (Object.keys(store.productData).length == 0) {
    loading.value = true
    store.getProducts()
      .then(() => {

        categorizeProducts(store.products)
        loading.value = false
      })

  }

  windowScroll()
  bg_color.value = Telegram.WebApp.themeParams.bg_color;



});

const windowScroll = () => {
  window.addEventListener('scroll', () => {
    updateActiveCategoryOnScroll()
    handleCategoryDataScroll()
  })
}



// computed bg color for dark mode





const handleCategoryDataScroll = () => {
  // Scroll transition
  const categoryElement = document.querySelector('.category');
  const activeCategoryElement = document.getElementById('category' + acteveCategory.value);

  if (categoryElement && activeCategoryElement) {


    categoryElement.scroll({
      left: activeCategoryElement.offsetLeft - categoryElement.offsetLeft,
      behavior: 'smooth'
    })

  }
}






// watch(acteveCategory, async (newValue) => {
//   if (newValue) {
//     router.push({ hash: '#' + newValue })
//     await nextTick() // Wait for DOM updates to complete

//     const container = document.getElementById('productsData')
//     const element = document.getElementById(newValue)
//     // if (element) {

//     //     element.scrollIntoView({ behavior: 'smooth', block: 'center' })

//     // }

//     if (container && element) {
//       container.scrollTop = element.offsetTop - container.offsetTop
//     }
//   }
// })


// const categoryScroll = async (id) => {
//   if (id) {
//     router.push({ hash: '#' + id })
//     await nextTick() // Wait for DOM updates to complete

//     const container = document.getElementById('productsData')
//     const element = document.getElementById(id)

//     if (container && element) {
//       container.scrollTop = element.offsetTop - container.offsetTop + 300
//     }
//   }
// }

// const handleProductDataScroll = () => {
//   console.log('handleProductDataScroll');

//   updateActiveCategoryOnScroll();
//   handleCategoryDataScroll();

// };

const selectProductType = ref()

const prodductAddbasket = item => {
  if (item.variants.length > 1) {
    prodductType.value = false
    selectProductType.value = item
    // productsData scroll none
    // document.getElementById('productsData').style.display = 'none'


  }
  else {
    const newItem = JSON.parse(JSON.stringify(item));
    store.basket.push(newItem)

  }
}

watch(prodductType, (newValue) => {
  if (newValue) {
    document.getElementById('productsData').style.display = 'block'
  }
  else {
    document.getElementById('productsData').style.display = 'none'
  }
})

const addProductCount = (item) => {

  if (item.variants.length > 1) {
    prodductType.value = false
    selectProductType.value = item
  }
  else {
    store.basket.find(el => el.id === item.id).variants[0].count++
    item.variants[0].count++
  }
}

const subtractionProductCount = (item) => {
  const basketItem = store.basket.find(basketItem => basketItem.id === item.id);


  if (item.variants.length > 1) {
    prodductType.value = false
    selectProductType.value = item
  } else {
    if (basketItem) {
      if (basketItem.variants[0].count === 1) {
        // Remove the item from the basket
        store.basket = store.basket.filter(basketItem => basketItem.variants[0].id !== item.variants[0].id);

      } else {
        basketItem.variants[0].count -= 1;
        item.variants[0].count -= 1;

      }
    }

  }


};













</script>

<template>




  <div class="text-center h-[100vh]  flex items-center justify-center" v-if="loading">
    <div class="loader"></div>
  </div>

  <div class="relative" v-else>
    <div class=" w-full bg-white  darkClass z-50  absolute transition-all duration-[.5s] "
      :class="{ productSizewidth: prodductType }">
      <ProductSize @hide="prodductType = true" :selectProductType="selectProductType"
        class="opacity-1 transition-all duration-[.5s]" :class="{ productSizewidthContent: prodductType }" />
    </div>

    <div class="py-3  top-0 z-10   w-full sticky "
     :style="`background-color:${bg_color};`" 
    id="menuElement">
      <div class="flex items-center">
        <img src="@/assets/imgs/logo.png" alt="" class=" h-[80px] ">
        <h1 class="text-center text-2xl font-bold text-[#6A984D]">Bozorligim</h1> 


      </div>


      <el-input v-model="search" placeholder="Maxsulotlarni qidirish" :prefix-icon="Search" class="mb-3 h-[40px]">
        <template #append class="cursor-pointer ">

          <el-button :icon="Close" @click="search = ''" />





        </template></el-input>

      <!-- category -->



      <div class="flex overflow-x-auto category    " v-if="store.category.length">

        <a v-for="(item, idx) in store.category" :key="item.id" :class="{ 'active': acteveCategory == item.id }"
          :style="`margin-left:${idx === 0 ? '0px' : '10px'}; `" @click=categoryActive(item.id)
          class="categoryData border  ml-2" :href="`#${item.id}`" :id="'category' + item.id">
          <!-- <div class=" flex  justify-center h-[100%]  "> -->
          


              <!-- <div class=" flex justify-center border" >   -->

                <img :src="item.image" alt="" class="categoryImg  ">
              <!-- </div> -->

              <!-- <div class="ml-2  ">
                <p class="font-medium text-[12px] "> {{ item.name }}</p>
              </div> -->

         
          <!-- </div> -->
        </a>

      </div>

    </div>






    <!-- products data  -->

    <Carousel />
    <div class="  productsData    pb-16 relative " id="productsData">
      <button class="fixed bottom-6 right-6 bg-[#6A984D] w-12 h-12 rounded-full " @click="$router.push('/basket')"> <img
          src="@/assets/imgs/karzinka2.png" alt="">
        <small
          class="absolute top-1 right-1 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center bg-red-500">{{
            store.basket.length }}</small>
      </button>

      <p v-if="searchNot" class="text-center font-bold text-[#6A984D] text-1xl">Siz qidirgan mahsulot hozirda bizning
        bazamizda mavjud emas</p>

      <div v-for="(category, idx) in store.category" :key="idx" :id="category.id" class="productCategory">


        <h1 class="font-bold text-[#6A984D] text-1xl" v-if="categorValidate(category.id)">{{ category.name }}
        </h1>



        <div class="  p-2 mt-3" v-for="item in store.productData[category.id]" :key="item.id">
          <div class="flex">
            <!-- img  -->

            <div class="  " style="width: 25% !important;">

              <img :src="item?.variants[0]?.images[0]?.image" alt="" class="productImg"
                v-if="item.variants[0]?.images[0]?.image">


              <img src="@/assets/imgs/noImg.png" alt="" v-else class="productImg">


            </div>
            <!-- product name  -->
            <div style="width: 75%;">
              <p class="mb-2 ml-2 font-bold text-[14px]">
                {{ item.name }}
                {{ item.weight }}
                {{ item.type1 }}</p>
              <p class="mb-2 ml-2">{{ item.subtitre }} </p>
              <div class="flex items-center justify-between ml-2">
                <p class="font-bold"> {{ store.formatPrice(item.variants[0].price) }} so'm</p>



              </div>

              <div class="flex justify-end ">
                <button class=" text-white btn" @click="prodductAddbasket(item)"
                  v-if="!store.basket.some(product => product.id === item.id)">
                  Qo'shish
                </button>



                <div v-else>

                  <button class="btn" @click="subtractionProductCount(item)">
                    <el-icon color="#fff" v-if="item.variants[0].count > 1">
                      <Minus />
                    </el-icon>


                    <el-icon size="16px" color="#EF4444" v-else>
                      <CloseBold />
                    </el-icon>


                  </button>



                  <span class="mx-2">{{ store.basket.find(element => element.id == item.id).variants[0].count }}
                  </span>
                  <button class="btn" @click="addProductCount(item)"
                    :disabled="item.variants.length == 1 && elementFind(item.variants[0].id).variants[0]?.count == item.variants[0].product_warehouse_total"><el-icon
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



.productCategory {
  scroll-margin-top: 250px;
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
  /* background-color: #6A984D; */
  /* border-radius: 5px; */
  /* color: #fff; */
  border: 2px solid #6A984D;
  /* padding: 3px; */
  /* outline: 3px solid #6A984D; */

}

.karzinka {
  background: #6A984D;
  color: #fff;
  font-size: 15px;
}

.categoryData {
  min-width: 80px !important;
  height: 80px !important;
  border-radius: 5px;
  transition: all 0.2s;
  /* scroll-behavior: smooth; */
}
.categoryData img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  /* transition: all 0.2s; */
}



.productsData::-webkit-scrollbar {
  display: none;
}

/*.productsData {
  height: calc(100vh - 200px);
}*/

.productImg {
  /* width: 100px; */
  height: 80px;
}

.productSizewidth {
  width: 0;
}

.productSizewidthContent {
  opacity: 0;
}


.loader {
  width: 100px;
  height: 50px;
  border-radius: 0 0 100px 100px;
  border: 5px solid #538a2d;
  border-top: 0;
  box-sizing: border-box;
  background:
    radial-gradient(farthest-side at top, #0000 calc(100% - 5px), #e7ef9d calc(100% - 4px)),
    radial-gradient(2px 3px, #5c4037 89%, #0000) 0 0/17px 12px,
    #ff1643;
  --c: radial-gradient(farthest-side, #000 94%, #0000);
  -webkit-mask:
    linear-gradient(#0000 0 0),
    var(--c) 12px -8px,
    var(--c) 29px -8px,
    var(--c) 45px -6px,
    var(--c) 22px -2px,
    var(--c) 34px 6px,
    var(--c) 21px 6px,
    linear-gradient(#000 0 0);
  mask:
    linear-gradient(#000 0 0),
    var(--c) 12px -8px,
    var(--c) 29px -8px,
    var(--c) 45px -6px,
    var(--c) 22px -2px,
    var(--c) 34px 6px,
    var(--c) 21px 6px,
    linear-gradient(#0000 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude, add, add, add, add, add, add;
  -webkit-mask-repeat: no-repeat;
  animation: l8 3s infinite;
}

@keyframes l8 {
  0% {
    -webkit-mask-size: auto, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0
  }

  15% {
    -webkit-mask-size: auto, 20px 20px, 0 0, 0 0, 0 0, 0 0, 0 0
  }

  30% {
    -webkit-mask-size: auto, 20px 20px, 20px 20px, 0 0, 0 0, 0 0, 0 0
  }

  45% {
    -webkit-mask-size: auto, 20px 20px, 20px 20px, 20px 20px, 0 0, 0 0, 0 0
  }

  60% {
    -webkit-mask-size: auto, 20px 20px, 20px 20px, 20px 20px, 20px 20px, 0 0, 0 0
  }

  75% {
    -webkit-mask-size: auto, 20px 20px, 20px 20px, 20px 20px, 20px 20px, 20px 20px, 0 0
  }

  90%,
  100% {
    -webkit-mask-size: auto, 20px 20px, 20px 20px, 20px 20px, 20px 20px, 20px 20px, 20px 20px
  }
}
</style>
