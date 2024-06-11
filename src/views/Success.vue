<template>
    <div >
        <div class="flex items-center">
            <img src="@/assets/imgs/logo.png" alt="" class=" h-[80px] ">
            <h1 class="text-center text-2xl font-bold text-[#6A984D]">Bozorligim</h1>
        </div>
        

        <div class="w-full h-[35vh] flex flex-col justify-center items-center bg-[#6A984D] rounded-t-lg">
            <div class="p-3 bg-white rounded-[50%]"> <img src="@/assets/imgs/success.png" alt="" class=" w-[100px]">
            </div>

            <h1 class="text-3xl mt-3 font-[600] text-white">Muvaffaqiyatli</h1>


        </div>
        <div class="w-full h-[35vh] flex flex-col justify-center items-center">
            <h3 class=" text-center ">Buyurtmangiz muvaffaqiyat bilan qabul qilindi! Siz bilan operatorimiz tez orada aloqaga chiqadi</h3>

            <button class="btn mt-16" @click="$router.push('/')">Bosh sahifa</button>

        </div>



    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>