<script setup>
import { onMounted, ref, watch } from 'vue';
import { ElButton } from 'element-plus'
import pitsa2 from '@/assets/imgs/pizza-png-15.png'
import {useHomeStore} from '@/stores/home.js'
const store = useHomeStore()

const is_basket = ref(true)
const summ = ref(0)


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
</script>

<template>
  <div class="flex justify-center">
    <div class="" @click="$router.go(-1)"><el-icon size="30px" color="#6A984D">
        <ArrowLeft />
      </el-icon></div>
    <h1 class=" w-80 text-center text-2xl ">Savatcha</h1>
  </div>
  <div class="about" v-if="!is_basket">
    <img src="@/assets/imgs/Add to Cart-amico 1.png" alt="">
    <h4 class="text-center font-bold">Sizning savatchangiz bo'sh</h4>
  </div>

  <div v-else class="basket">

    <div class="basketCount mt-8" >
    <div v-for="item in store.basket" :key="item.id" class="my-5" >
      <div class="flex justify-between my-2" >
        

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
            <button class="btn" @click="item.count--"><el-icon color="#fff"  :disabled="item.count == 1">
                <Minus />
              </el-icon></button> <span class="mx-1">{{ item.count }} </span>
            <button class="btn ml-1" @click="item.count++" :disabled="item.count == 10" ><el-icon color="#fff">
                <Plus />
              </el-icon></button>
          </div>
        </div>
      </div>
      <hr/>


    </div>
      
      
      <div class="flex justify-between mt-20 mb-5" >

        
        <el-input  placeholder="Promo code"
          class="w-[50%]" />
          <button class="w-[49%] btn" >Qo'llash</button></div>
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
        <button class="btn w-full mt-8  py-2">Buyurtma berish</button>
      </div>







    </div>
  </div>
  
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
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
</style>
