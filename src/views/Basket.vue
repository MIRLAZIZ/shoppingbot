<script setup>
import { ref } from 'vue';
import { useHomeStore } from '@/stores/home.js'
import { useRouter } from 'vue-router'
const store = useHomeStore()
const router = useRouter()

const code = ref('')

const totalSum = ref(false)
const discount = ref(0)


const sendOrder = () => {
  if (totalPrice() < 150000) {
    totalSum.value = true
  }
  else {
    store.orderData = []
    store.basket.forEach(item => {
      store.orderData.push({ id: item.id, variantsId: item.variants[0].id, count: item.variants[0].count })
    })
    router.push('/order')

  }
}

const sendPromoCode = () => {
  store.promoCode({ code: code.value })
}


const totalPrice = () => {
  return store.basket.reduce((a, b) => a + b.variants[0].price * b.variants[0].count, 0)
}

const homePage = () => {
  router.push('/')
}
</script>

<template>
  <div class="relative">





    <!-- logo -->
    <div class=" w-full sticky ">
      <div class="flex items-center">
        <img src="@/assets/imgs/logo.png" alt="" class=" h-[80px] ">
        <h1 class="text-center text-2xl font-bold text-[#6A984D]">Bozorligim</h1>
      </div>

      <div class="flex justify-center">

        <div class="" @click="homePage"><el-icon size="30px" color="#6A984D">
            <ArrowLeft />
          </el-icon></div>


        <h1 class=" w-80 text-center text-2xl ">Savatcha</h1>
      </div>

    </div>
    <!-- <pre>{{ store.basket }}</pre> -->

    <div class="about" v-if="store.basket.length == 0">
      <img src="@/assets/imgs/Add to Cart-amico 1.png" alt="">
      <h4 class="text-center font-bold">Sizning savatchangiz bo'sh</h4>
    </div>

    <div v-else class="basket relative">



      <div class="basketCount mt-8">
        <div v-for="item in store.basket" :key="item.id" class="my-5">
          <div class="my-2">


            <div class="flex  ">




              <img :src="item.variants[0].images[0].image" alt="" class="w-[60px] h-[60px] "
                v-if="item.variants[0].images[0].image">
              <img src="@/assets/imgs/noImg.png" alt="" v-else class="w-[60px] h-[60px]">



              <div class="ml-4  w-full">
                <p>{{ item.name }} {{ item.weight }} {{ item.type1 }}</p>

                <div class="flex justify-between items-center">
                  <div>
                    <p> {{ store.formatPrice(item.variants[0].price) }} so'm</p>
                  </div>


                  <div>

                    <button class="btn w-[40px]" @click="store.basket.splice(store.basket.indexOf(item), 1)"
                      v-if="item.variants[0].count === 1"><el-icon color="#EF4444">
                        <!-- <Delete /> -->
                        <CloseBold />
                      </el-icon></button>

                    <button class="btn w-[40px]" @click="item.variants[0].count--" v-else><el-icon color="#fff"
                        :disabled="item.variants[0].count == 1">
                        <Minus />
                      </el-icon></button> <span class="mx-1">{{ item.variants[0].count }} </span>
                    <button class="btn ml-1 w-[40px]" @click="item.variants[0].count++"
                      :disabled="item.variants[0].count == item.variants[0].product_warehouse_total"><el-icon
                        color="#fff">
                        <Plus />
                      </el-icon></button>
                  </div>
                </div>
              </div>



            </div>



          </div>
          <hr />


        </div>
        <br>



        <p class=" mb-4 text-[14px] text-[#6A984D]" v-if="store.code != null">{{ store.code?.status ?
          store.code?.data[0]?.discount + '% ' + store.code.message : store.code.message }}</p>
        <div class="flex justify-between  mb-5">


          <el-input placeholder="Promo code" class="w-[50%]" v-model="code" />
          <button class="w-[49%] btn" @click="sendPromoCode" :disabled="code.length < 4">Qo'llash</button>
        </div>
        <div>
          <div class="flex justify-between mt-2">
            <p>Yetgazib berish</p>
            <p>0 sum</p>
          </div>

          <!-- total sum  -->
          <div class="flex justify-between mt-2 font-bold">
            <p>Umumiy narx</p>
            <p> {{ store.formatPrice(!store.code?.status ? totalPrice() : totalPrice() - (totalPrice() *
              (store.code?.data[0]?.discount /
              100)) )}} sum</p>
          </div>
        </div>


        <div class=" mt-8 mb-14">
          <small class=" text-red-500 text-[14px]" v-if="totalSum">🛒 Xaridingiz <b>150 000 </b> so'mdan ko'p bo'lishi
            kerak. </small>
          <button class="btn w-full mt-2  py-2" @click="sendOrder">Buyurtma berish</button>
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
