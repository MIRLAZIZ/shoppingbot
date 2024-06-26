<template>
  <div class=" overflow-y-scroll h-screen  prouductSize"
    v-if="props.selectProductType && props.selectProductType.variants">

    <!-- headeer -->
    <div class=" sticky top-0 z-50  bg-white w-full darkClass">
      <div class="flex items-center"><img src="@/assets/imgs/logo.png" alt="" class=" h-[80px] ">
        <h1 class="text-center text-2xl font-bold text-[#6A984D]">Bozorligim</h1>
      </div>

      <!-- cancel -->
      <div class="flex justify-end pr-3">
        <el-icon size="20px" color="#6A984D" @click="$emit('hide')">
          <CloseBold />
        </el-icon>
      </div>
    </div>



    <!-- product img  -->
    <div class="flex items-center justify-center  rounded"
      v-if="props.selectProductType && props.selectProductType.variants">
      <img :src="props.selectProductType.variants[variantIndex].images[0].image" alt="" class="w-[150px] h-[150px]"
        v-if="props.selectProductType.variants[variantIndex].images[0]?.image" />

      <img src="@/assets/imgs/noImg.png" alt="" v-else class="w-[150px] h-[150px]">


    </div>

    <!-- product name  -->
    <h1 class="mb-2  text-[18px]"> {{ props.selectProductType?.name }}</h1>
    <hr />


    <!-- input radio -->
    <div class="border p-2 mt-3 overflow-y-auto min-h-[100px]  rounded">

      <div v-for="(item, idx) in props.selectProductType.variants" :key="idx" class=" flex items-center   "
        @click="variantIndex = idx">

        <input type="radio" :id="idx" v-model="radio" :value="item.weight" :checked="idx === variantIndex">
        <label :for="idx" class="m-1  text-[14px]  w-full">{{ item.weight }} <span class="ml-[2px]">
            {{
              props.selectProductType.type1
            }}
          </span></label><br>

      </div>

      <!-- price and total price  -->
    </div>
    <p class="mt-3 mb-1">Narxi: {{ store.formatPrice(props.selectProductType.variants[variantIndex].price) }}</p>
    <p>Jami:
      {{ store.formatPrice(totalPrice) }}
    </p>

    <div class="mt-3 flex   justify-between">
      <div class=" w-[40%] flex justify-between items-center">

        <!-- count --  -->
        <button class="btn py-2 " size="large" @click="minusCount">
          <el-icon class="el-icon">
            <Minus />
          </el-icon>
        </button>

        <!-- product count  -->
        <span>{{ elementFind ? elementFind.variants[0].count : props.selectProductType.variants[variantIndex].count }}
        </span>

        <!-- count ++ -->
        <button class="btn py-2" size="large" @click="addCount" :disabled="totalproduct"><el-icon color="#fff">
            <Plus />
          </el-icon></button>
      </div>
      <div class=" w-[60%] pl-1">

        <!-- baseket add  -->
        <button class="btn w-full text-white py-2" size="large" @click="send"
          :disabled="store.basket.some(el => el.variants[0].id === props.selectProductType.variants[variantIndex].id)">

          Tasdiqlash
        </button>

      </div>


    </div>





  </div>
</template>

<script setup>
import { useHomeStore } from '@/stores/home.js'
import { computed, ref, watch } from 'vue'


const store = useHomeStore()
const props = defineProps({
  selectProductType: {
    type: Object,
    default: () => ({}),
  }
})
const radio = ref()
const emit = defineEmits(['hide'])

const variantIndex = ref(0)
const totalproduct = ref(false)

const elementFind = computed(() => store.basket.find(el => el.variants[0].id === props.selectProductType.variants[variantIndex.value].id))


const totalPrice = computed(() => {
  if (elementFind.value) {
    return elementFind.value.variants[0].count * elementFind.value.variants[0].price
  }
  else {
    return props.selectProductType.variants[variantIndex.value].count * props.selectProductType.variants[variantIndex.value].price
  }
})
const send = () => {



  let data = {
    id: props.selectProductType.id,
    name: props.selectProductType.name,
    type1: props.selectProductType.type1,
    weight: props.selectProductType.variants[variantIndex.value].weight,
    variants: [props.selectProductType.variants[variantIndex.value]]
  }
  console.log(data);
  store.basket.push(data)
  emit('hide')
}

const addCount = () => {
  let elemetntTrue = store.basket.some(el => el.variants[0].id === props.selectProductType.variants[variantIndex.value].id)
  if (elemetntTrue) {
    let element = store.basket.find(el => el.variants[0].id === props.selectProductType.variants[variantIndex.value].id)
    element.variants[0].count++


    element.variants[0].product_warehouse_total == element.variants[0].count ? totalproduct.value = true : totalproduct.value = false



  }
  else {
    props.selectProductType.variants[variantIndex.value].count++

    props.selectProductType.variants[variantIndex.value].count == props.selectProductType.variants[variantIndex.value].product_warehouse_total ? totalproduct.value = true : totalproduct.value = false
  }
}







const minusCount = () => {
  const { selectProductType } = props;
  const variantIndexValue = variantIndex.value;
  const selectedVariant = selectProductType.variants[variantIndexValue];
  const variantId = selectedVariant.id;
  const parentElementExists = store.basket.some(el => el.id === selectProductType.id);
  const basketElement = store.basket.find(el => el.variants[0].id === variantId);

  if (parentElementExists) {
    if (basketElement) {
      const basketVariant = basketElement.variants[0];

      if (basketVariant.count === 1) {
        store.basket = store.basket.filter(basketItem => basketItem.variants[0].id !== variantId);
      } else {
        basketVariant.count--;
        if (basketVariant.count < basketVariant.product_warehouse_total) {
          totalproduct.value = false;
        }
      }
    }
  } else {
    if (selectedVariant.count > 1) {
      selectedVariant.count--;
      if (selectedVariant.count < selectedVariant.product_warehouse_total) {
        totalproduct.value = false;
      }
    } else {
      selectedVariant.count = 1;
    }
  }
};







</script>

<style scoped>
.prouductSize::-webkit-scrollbar {
  display: none;
}
</style>