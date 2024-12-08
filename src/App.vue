<template>
  <div>
    <header>

      <div class="mainContainer">

        <RouterView />

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
  padding: 0 20px;

}



@media screen and (max-width: 960px) {
  .mainContainer {
    width: 100%;
  }

}
</style>