<script setup>
import { onMounted, ref, watch } from 'vue';
import { ElButton } from 'element-plus'
import { useHomeStore } from '@/stores/home.js'
import Order from './Order.vue';
import { useRouter } from 'vue-router'
const store = useHomeStore()
const router = useRouter()

const is_basket = ref(true)
const summ = ref(0)
const is_order = ref(true)


onMounted(() => {
  if (store.basket.length == 0) {
    is_basket.value = false
  }
  // store.basket  count * price = totalCount then all totalCount + totalCount= sum function
  let sum = 0
  store.basket.forEach(item => {
    item.totlCount = item.count * item.price
    sum += item.totlCount
  })
  summ.value = sum

})
// store.basket  count * price = totalCount then all totalCount + totalCount= sum function watch
watch(() => store.basket, (newValue) => {

  let sum = 0
  store.basket.forEach(item => {
    item.totlCount = item.count * item.price
    sum += item.totlCount
  })
  summ.value = sum

}, { deep: true });

const sendOrder = () => {
  router.push('/order')
}

const homePage = () => {
  router.push('/')
}
</script>

<template>
  <div class="relative">

    

 
   

    <!-- logo -->
    <div class="sticky top-0 z-10  bg-white w-full darkClass">
    <div class="flex items-center" >
      <img src="@/assets/imgs/logo.png" alt="" class=" h-[80px] ">
      <h1 class="text-center text-2xl font-bold text-[#6A984D]">Bozorligim</h1>
    </div>

    <div class="flex justify-center">

      <div class=" border" @click="homePage"><el-icon size="30px" color="#6A984D">
          <ArrowLeft />
        </el-icon></div>


      <h1 class=" w-80 text-center text-2xl ">Savatcha</h1>
    </div>

  </div>


  <div class="about" v-if="!is_basket">
    <img src="@/assets/imgs/Add to Cart-amico 1.png" alt="">
    <h4 class="text-center font-bold">Sizning savatchangiz bo'sh</h4>
  </div>

  <div v-else class="basket relative">

   
    

    <div class="basketCount mt-8">
      <div v-for="item in store.basket" :key="item.id" class="my-5">
        <div class="flex justify-between my-2">


          <div class="flex ">
            <div class="pr-5  flex justify-center items-center">
              <el-icon size="20px" color="#6A984D">
                <CloseBold />
              </el-icon>
            </div>

            <img :src="item.img" alt="" class="w-[50px] h-[50px]">
            <div class="ml-4">
              <p>{{ item.name }} {{ item.criterionNumber }} {{ item.criterion }}</p>
              <p> {{ item.price }} so'm</p>
            </div>
          </div>


          <div>
            <div>
              <button class="btn" @click="item.count--"><el-icon color="#fff" :disabled="item.count == 1">
                  <Minus />
                </el-icon></button> <span class="mx-1">{{ item.count }} </span>
              <button class="btn ml-1" @click="item.count++" :disabled="item.count == 10"><el-icon color="#fff">
                  <Plus />
                </el-icon></button>
            </div>
          </div>
        </div>
        <hr />


      </div>


      <div class="flex justify-between mt-20 mb-5">


        <el-input placeholder="Promo code" class="w-[50%]" />
        <button class="w-[49%] btn">Qo'llash</button>
      </div>
      <div>
        <div class="flex justify-between mt-2">
          <p>Yetgazib berish</p>
          <p>0 sum</p>
        </div>
        <div class="flex justify-between mt-2 font-bold">
          <p>Umumiy narx</p>
          <p>{{ summ }} sum</p>
        </div>
      </div>


      <div>
        <button class="btn w-full mt-8  py-2" @click="sendOrder">Buyurtma berish</button>
      </div>







    </div>
  </div>
  </div>
  

</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
}

.basketCount {
  width: 100%;
}

.basket {
  min-height: 100vh;
}

.productSizewidth {
  width: 0;
}

.productSizewidthContent {
  opacity: 0;
}
</style>
