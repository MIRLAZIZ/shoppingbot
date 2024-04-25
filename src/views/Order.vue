<template>
    <div>

        <!-- logo -->
        <div class=" bg-white w-full darkClass">
            <div class="flex items-center">
                <img src="@/assets/imgs/logo.png" alt="" class=" h-[80px] ">
                <h1 class="text-center text-2xl font-bold text-[#6A984D]">Bozorligim</h1>
            </div>



        </div>




        <el-form label-position="top">


            <!-- first name -->
            <el-form-item label="Ismi familiya">
                <el-input v-model="userData.fullname" type="text" />
            </el-form-item>

            <!-- phone -->
            <el-form-item label="Telefon raqami" required :error="phoneRequired">
                <el-input v-model="userData.phone" type="text" :formatter="formatPhoneNumber" maxlength="17" />

            </el-form-item>


            <!-- peyment type -->

            <el-form-item label="To'lov turi" required :error="requiredPeymentType">
                <el-select v-model="userData.peyment_type" placeholder="To'lov turi">
                    <el-option label="Karta" value="card" />
                    <el-option label="Naqd" value="cash" />
                </el-select>
            </el-form-item>


            <!-- comments -->
            <el-form-item label="Izoh qoldiring">
                <el-input v-model="userData.comment" :rows="2" type="textarea" placeholder="Please input" />

            </el-form-item>


        </el-form>

        <div class="flex justify-end">
            <button @click="resetForm" class="btn bg-red-500 py-1">bekor qilish</button>
            <button @click="sendData" class="btn ml-3 py-1">Submit</button>
        </div>



    </div>

</template>

<script lang="ts" setup>
import { ref, toRefs, watch } from 'vue'
import { useHomeStore } from '@/stores/home.js'
import { useRouter } from 'vue-router'


const store = useHomeStore()
const phoneRequired = ref(null)
const requiredPeymentType = ref(null)
const userData = ref({
    fullname: null,
    phone: '',
    peyment_type: null,
    comment: null,
})
const phoneValidation = () => {
    userData.value.phone ? phoneRequired.value = null : phoneRequired.value = 'Telefon raqam kiriting'
}

const peymentValidation = () => {
    userData.value.peyment_type ? requiredPeymentType.value = null : requiredPeymentType.value = 'To\'lov turi tanlang'

}
// const formatPhoneNumber = (phoneNumber) => {
//     if (!phoneNumber) return '+998'; // Telefon raqami mavjud emas bo'lsa +998 ni qaytarish

//     // Telefon raqamini formatlash
//     phoneNumber = phoneNumber.replace(/^\+998|\D/g, ''); // +998 ni olib tashlash
//     return phoneNumber.replace(/^(\d{1,2})(\d{1,3})?(\d{1,2})?(\d{1,2})?.*/, (m, g1, g2, g3, g4) => {
//         // Formatlanmagan raqamda bo'sh joylar qo'shib berish
//         let formattedNumber = `+998 (${g1})`;
//         if (g2) formattedNumber += `-${g2}`;
//         if (g3) formattedNumber += `-${g3}`;
//         if (g4) formattedNumber += `-${g4}`;
//         return formattedNumber;
//     });
// };






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
    if (!phoneRequired.value && !requiredPeymentType.value) {
        console.log(userData.value);
        console.log(store.basket);
        console.log(typeof store.basket);
        

        store.basket = []
        userData.value = {}
        router.push('/success')


    }



}

const resetForm = () => {
    console.log('reset!');


}
const { fullname, phone, peyment_type, comment } = toRefs(userData.value)


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



const phoneNumberr = ref('');


</script>