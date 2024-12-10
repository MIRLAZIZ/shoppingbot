<template>
    <div>
        <Carousel v-bind="config" class="my-5 " :wrap-around="true" :autoplay="isPlaying ? 0 : 4000"  v-if="store.news.news">
            <Slide v-for="slide in store.news.news" :key="slide.id" >
                <div class="d-flex w-[100%]">
                    <!-- <h3>{{ slide.title }}</h3> -->
                    <!-- <p style="transform: translateY(50px);">{{ slide.description }}</p> -->
                    <div>
                        <img :src="slide.file" alt="" class=" w-[100%]" v-if="handleFile(slide.file)">

                        <video v-else controls @play="isPlaying = true" @pause="isPlaying = false">


                            <source :src="slide.file" type="video/mp4">
                        </video>

                    </div>


                </div>

            </Slide>

            <!-- <template #addons>
                <Navigation />
                 <Pagination /> 
            </template> -->
        </Carousel>

    </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref, onMounted } from 'vue'
import { useHomeStore } from '@/stores/home.js'

const store = useHomeStore()
const config = {
    itemsToShow: 1,
}
store.news.news = []

const isPlaying = ref(false)

const handleFile = (file) => {



    const fileType = file.split('.').pop().toLowerCase() // Fayl kengaytmasini olish

    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileType)) {
        // console.log('Bu rasm fayli:', file);
        return true
    }

    else {
        // console.log('Noma`lum fayl turi:', file);
        return false
    }
}
onMounted(() => {
  store.getNews()
  

})

</script>

<style scoped>
img, video {
    width: 100%;
    height: 200px;
    /* object-fit: contain; */
    border-radius: 10px;
}
</style>