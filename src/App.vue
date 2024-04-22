<template>
  <div>
    <header>

      <div class="mainContainer h-[100vh]">
        <div class="flex items-center h-[10vh]  ">
          <img src="@/assets/imgs/logo.png" alt="" class="w-[80px] ">
          <h1 class="text-center text-2xl font-bold text-[#6A984D]">Bozorligim</h1>
        </div>
        <div class="h-[86vh] overflow-y-auto content  ">
          <RouterView />

        </div>
      </div>
    </header>


  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const html = document.getElementsByTagName('html')
  if (window.Telegram.WebApp.colorScheme == 'light') {
    html[0].classList.remove('dark')
  } else {
    html[0].classList.add('dark')
  }
})










</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  /* height: 100vh; */
}

.mainContainer {
  width: 30%;
  border-radius: 10px;
  padding: 20px;

}

.content::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 960px) {
  .mainContainer {
    width: 100%;
  }

}
</style>