<template>
    <div>

        <!-- logo -->
        <div class=" w-full">
            <div class="flex items-center">
                <img src="@/assets/imgs/logo.png" alt="" class=" h-[80px] ">
                <h1 class="text-center text-2xl font-bold text-[#6A984D]">Bozorligim</h1>
            </div>



        </div>

        <el-form label-position="top">


            <!-- first name -->
            <el-form-item label="Ismi familiya" required :error="requiredFullname">
                <el-input v-model="userData.fullname" type="text" />
                <small v-if="errorData && errorData.fullname" class="text-red-500">{{ errorData.fullname[0] }}</small>
            </el-form-item>

            <!-- phone -->
            <el-form-item label="Telefon raqami" required :error="phoneRequired">
                <el-input v-model="userData.phone" type="text" :formatter="formatPhoneNumber" maxlength="17" />
                <small v-if="errorData && errorData.phone" class="text-red-500">{{ errorData.phone[0] }}</small>
            </el-form-item>


            <!-- peyment type -->

            <el-form-item label="To'lov turi" required :error="requiredPeymentType">
                <el-select v-model="userData.peyment_type" placeholder="To'lov turi">
                    <el-option label="Karta" value="card" />
                    <el-option label="Naqd" value="cash" />
                </el-select>
                <small v-if="errorData && errorData.peyment_type" class="text-red-500">{{ errorData.peyment_type[0] }}</small>
            </el-form-item>


            <!-- comments -->
            <el-form-item label="Izoh qoldiring">
                <el-input v-model="userData.comment" :rows="2" type="textarea" placeholder="Please input" />

            </el-form-item>


        </el-form>
          <div ><p class="text-red-500 text-end text-[13px]">{{ errorMessage }}</p></div>
        <div class="flex justify-end">
            <button @click="resetForm" class="btn bg-red-500 py-1">Orqaga</button>
            <button @click="sendData" class="btn ml-3 py-1">Ma'lumotlarni yuborish</button>
        </div>



    </div>

</template>

<script lang="ts" setup>
import { onMounted, ref, toRefs, watch } from 'vue'
import { useHomeStore } from '@/stores/home.js'
import { useRouter } from 'vue-router'


const store = useHomeStore()
const phoneRequired = ref(null)
const requiredPeymentType = ref(null)
const requiredFullname = ref(null)
const userData = ref({
    fullname: null,
    phone: '',
    peyment_type: null,
    comment: null,
    orderData: store.orderData,
    code_id: null

})
const errorData = ref({

    fullname: null

})
const errorMessage = ref(null)
const phoneValidation = () => {
    userData.value.phone ? phoneRequired.value = null : phoneRequired.value = 'Telefon raqam kiriting'
}

const peymentValidation = () => {
    userData.value.peyment_type ? requiredPeymentType.value = null : requiredPeymentType.value = 'To\'lov turi tanlang'

}
const requiredFullnameFunction = () => {
    userData.value.fullname ? requiredFullname.value = null : requiredFullname.value = 'Ismingizni kiriting'
}






const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return '+998'; // Telefon raqami mavjud emas bo'lsa bo'sh qaytaring

    // Telefon raqamini formatlash
    phoneNumber = phoneNumber.replace(/\D/g, ''); // Faqat raqamlarni qoldiramiz
    phoneNumber = '+998' + phoneNumber.replace(/^998/, ''); // Avtomatik ravishda +998 qo'shamiz, agar raqam 998 bilan boshlansa

    // Raqamni formatlash
    return phoneNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3-$4-$5');

};












const router = useRouter()

const sendData = () => {
    phoneValidation()
    peymentValidation()
    requiredFullnameFunction()
    if (!phoneRequired.value && !requiredPeymentType.value && !requiredFullname.value) {
        store.createOrder(userData.value)
            .then(res => {
                store.basket = []
                userData.value = {}
                store.code = null

                router.push('/success')


            })
            .catch(err => {
               errorMessage.value = err.response.data.message
               errorData.value = err.response.data.errors
                
                console.log(err)
            })
            





    }



}

const resetForm = () => {
    router.push('basket')



}
const { fullname, phone, peyment_type, comment } = toRefs(userData.value)
watch(fullname, (newValue) => {
    if (newValue) {
        requiredFullname.value = null
    }
    else {
        requiredFullname.value = 'Ismingizni kiriting'
    }
})


watch(phone, (newValue) => {
    if (newValue) {
        phoneRequired.value = null
    }
    else {
        phoneRequired.value = 'Telefon raqam kiriting'
    }
})

watch(peyment_type, (newValue) => {
    if (newValue) {
        requiredPeymentType.value = null
    }
    else {
        requiredPeymentType.value = 'To\'lov turi tanlang'

    }
})
onMounted(() => {
    if (store.code && store.code.data && store.code.data.length > 0) {
        userData.value.code_id = store.code.data[0].id
    }

})


if (store.orderData.length == 0) { 
    router.push('/')
}



</script>