<template>
  <div class="">
    <div class="flex justify-end"> 
      <el-icon size="20px" color="#6A984D" @click="$emit('hide')">
              <CloseBold />
            </el-icon></div>
    <div class="flex items-center justify-center  rounded">
      <img :src="props.selectProductType.img" alt="" class="w-[150px]" />

    </div>

    <h1 class="mb-2  text-[18px]"> {{ props.selectProductType.name }}</h1>
    <hr />
    <div class="border p-2 mt-3   rounded">

      <h2>{{ props.selectProductType.criterion }}</h2>
      <div v-for="(item, idx) in props.selectProductType.productSize" :key="idx" class=" flex items-center">

        <input type="radio" id="html" name="fav_language" v-model="radio" :value="item">
        <label :for="item" class="m-1  text-[14px]">{{ item }} <span class="ml-[2px]">{{
          props.selectProductType.criterion
        }}</span></label><br>

      </div>
    </div>
    <p class="mt-3 mb-1">Narxi: {{ props.selectProductType.price }}</p>
    <p>Jami: {{ props.selectProductType.price*props.selectProductType.count }}</p>

    <div class="mt-3 flex   justify-between">
      <div class=" w-[40%] flex justify-between items-center">
        <button class="btn "  @click="props.selectProductType.count--">
          <el-icon class="el-icon">
            <Minus />
          </el-icon>
        </button> <span>{{ props.selectProductType.count }} </span>
        <button class="btn"  @click="props.selectProductType.count++"><el-icon color="#fff" >
            <Plus />
          </el-icon></button>
      </div>
      <div class=" w-[60%] pl-1">
        <button class="btn w-full text-white py-2" size="large" @click="send">
          Tasdiqlash
        </button>
      </div>


    </div>




  </div>
</template>

<script setup>
import pitsa2 from '@/assets/imgs/pizza-png-15.png'
import { useHomeStore } from '@/stores/home.js'
import { onMounted, ref, watch } from 'vue'


const store = useHomeStore()
const props = defineProps({
  selectProductType: {
    type: Object,
    default: () => ({}),
  }
})
const radio = ref()
const emit = defineEmits(['hide'])
const send = () => {
  props.selectProductType.criterionNumber = radio.value
  store.basket.push(props.selectProductType)
  emit('hide')
}




watch(() => props.selectProductType, (newValue) => {
    radio.value = newValue.productSize[0];
  
}, { deep: true });



// onMounted(() => {
//   if(props.selectProductType && props.selectProductType.productSize) {
//     radio.value = props.selectProductType.productSize[0]

//   }
  
// })

</script>

<style lang="scss" scoped></style>