<script setup>

import { ElIcon } from 'element-plus'
import { onMounted, ref, computed, watch } from 'vue';
import ProductSize from '@/views/ProductSize.vue'
import { useHomeStore } from '@/stores/home.js'
import { Search, Close } from '@element-plus/icons-vue'
const store = useHomeStore()



const acteveCategory = ref(1)
const loading = ref(false)
const search = ref('')
const searchNot = ref(false)

const elementFind = (id) => {
  return store.basket.find(el => el.variants[0].id === id)
}

const categorValidate = (id) => {
  return Object.keys(store.productData).some(key => key == id)
}





// Lotin va kirill alifbolari orasida transliteratsiya qilish uchun yordamchi funksiya
function transliterate(text, toCyrillic = false) {
  const cyrillicToLatin = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'j', 'з': 'z',
    'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
    'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'x', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
    'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo', 'Ж': 'J', 'З': 'Z',
    'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R',
    'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'X', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch',
    'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
  };

  const latinToCyrillic = {};
  for (let key in cyrillicToLatin) {
    latinToCyrillic[cyrillicToLatin[key]] = key;
  }

  const transliterationMap = toCyrillic ? latinToCyrillic : cyrillicToLatin;

  return text.split('').map(char => transliterationMap[char] || char).join('');
}

watch(search, (newValue) => {
  if (newValue.length > 2) {
    let filteredProducts = store.products.filter(product => {
      if (!product.name) return false;

      const productNameLower = product.name.toLowerCase();
      const searchValueLower = newValue.toLowerCase();
      const transliteratedSearchValueToLatin = transliterate(searchValueLower, false);
      const transliteratedSearchValueToCyrillic = transliterate(searchValueLower, true);

      return productNameLower.includes(searchValueLower) ||
        productNameLower.includes(transliteratedSearchValueToLatin) ||
        productNameLower.includes(transliteratedSearchValueToCyrillic);
    });

    if (filteredProducts.length > 0) {
      categorizeProducts(filteredProducts);
      searchNot.value = false;

    } else {
      categorizeProducts([]);
      searchNot.value = true;
    }
  } else {
    categorizeProducts(store.products);
    searchNot.value = false;
  }
});






const prodductType = ref(true)

const categoryActive = (id) => {
  acteveCategory.value = id



  const element = document.getElementById('category' + id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
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



});

const handleProductDataScroll = () => {
  updateActiveCategoryOnScroll();
  // Scroll transition
  const categoryElement = document.querySelector('.category');
  const activeCategoryElement = document.querySelector('.category .active');
  if (categoryElement && activeCategoryElement) {
    categoryElement.scroll({
      left: activeCategoryElement.offsetLeft - categoryElement.offsetLeft,
      behavior: 'smooth'
    });
  }
};

const selectProductType = ref()

const prodductAddbasket = item => {
  if (item.variants.length > 1) {
    prodductType.value = false
    selectProductType.value = item



  }
  else {
    const newItem = JSON.parse(JSON.stringify(item));
    store.basket.push(newItem)

  }
}

const addProductCount = (item) => {

  if (item.variants.length > 1) {
    prodductType.value = false
    selectProductType.value = item
  }
  else {
    store.basket.find(el => el.id === item.id).variants[0].count++
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

      }
    }

  }


};






</script>

<template>


  <div class="text-center h-[100vh]  flex items-center justify-center" v-if="loading">
    <div role="status">
      <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor" />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="#6A984D" />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  </div>

  <div class="relative" v-else>
    <div class="h-full w-full bg-white  darkClass z-10  absolute transition-all duration-[.5s] "
      :class="{ productSizewidth: prodductType }">
      <ProductSize @hide="prodductType = true" :selectProductType="selectProductType"
        class="opacity-1 transition-all duration-[.5s]" :class="{ productSizewidthContent: prodductType }" />
    </div>

    <div class="h-auto   py-3">
      <div class="flex items-center">
        <img src="@/assets/imgs/logo.png" alt="" class=" h-[80px] ">
        <h1 class="text-center text-2xl font-bold text-[#6A984D]">Bozorligim</h1>


      </div>
      <el-input v-model="search"  placeholder="Maxsulotlarni qidirish" :prefix-icon="Search"
        class="mb-3 h-[40px]"> <template #append  class="cursor-pointer ">

          <el-button :icon="Close"  @click="search = ''"/>
          
        
          
          
        
        </template></el-input>


      <!-- category -->
      <div class="flex overflow-x-auto category  " v-if="store.category.length">


        <a v-for="(item, idx) in store.category" :key="item.id" :class="{ 'active': acteveCategory == item.id }"
          :style="`margin-left:${idx === 0 ? '0px' : '10px'}; `" @click=categoryActive(item.id)
          class="p-1 categoryData border  ml-2" :href="`#${item.id}`" :id="'category' + item.id">
          <div class=" flex  justify-center ">
            <div>


              <div class=" flex justify-center"><img :src="item.image" alt="" class="categoryImg "></div>

              <div class="ml-2  ">
                <p class="font-medium text-[12px] "> {{ item.name }}</p>
              </div>

            </div>
          </div>
        </a>

      </div>

    </div>






    <!-- products data  -->
    <div class="  overflow-y-scroll  productsData   pb-16 relative " @scroll="handleProductDataScroll">
      <button class="fixed bottom-6 right-6 bg-[#6A984D] w-12 h-12 rounded-full " @click="$router.push('/basket')"> <img
          src="@/assets/imgs/karzinka2.png" alt="">
        <small
          class="absolute top-1 right-1 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center bg-red-500">{{
            store.basket.length }}</small>
      </button>

      <p v-if="searchNot" class="text-center font-bold text-[#6A984D] text-1xl">Siz qidirgan mahsulot hozirda bizning
        bazamizda mavjud emas</p>

      <div v-for="category in store.category" :key="category.id" :id="category.id" class="productCategory">


        <h1 class="font-bold text-[#6A984D] text-1xl" v-if="categorValidate(category.id)">{{ category.name }}</h1>



        <div class="  p-2 mt-3" v-for="item in store.productData[category.id]" :key="item.id">
          <div class="flex">
            <!-- img  -->

            <div class="  " style="width: 25% !important;">

              <img :src="item?.variants[0]?.images[0]?.image" alt="" class="productImg"
                v-if="item?.variants[0]?.images">


              <img src="@/assets/imgs/noImg.png" alt="" v-else class="productImg">


            </div>
            <!-- product name  -->
            <div style="width: 75%;">
              <p class="mb-2 ml-2 font-bold text-[14px]">{{ item.name }}</p>
              <p class="mb-2 ml-2">{{ item.subtitre }} </p>
              <div class="flex items-center justify-between ml-2">
                <p class="font-bold">{{ item?.variants[0]?.price }} so'm</p>

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
                    :disabled="elementFind(item.variants[0].id).variants[0].count == item.variants[0].product_warehouse_total"><el-icon
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
  min-width: 105px !important;
  border-radius: 5px;
  transition: all 0.2s;
  /* scroll-behavior: smooth; */
}



.productsData::-webkit-scrollbar {
  display: none;
}

.productsData {
  height: calc(100vh - 290px);
}

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
</style>
