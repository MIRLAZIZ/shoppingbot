<template>
  <div>
    <div class="menufor ">
      <a class="element p-2 border ml-2" v-for="(item, index) in categories" :key="index"
        :class="{ active: item.product_id == activeIndex }" @click="scrollToCategory(item.product_id)"
        :href="'#' + item.product_id" :id="'category' + item.product_id"
        :style="`margin-left:${item.id === 1 ? '0px' : '10px'}`">

        <div class="grid-content flex items-center justify-center ">
          <div>


            <div class="flex items-center justify-center"><img :src="item.img" alt="" class="categoryImg"></div>

            <div class=" text-center "> <small class="font-medium">{{ item.name }} </small></div>

          </div>
        </div>





      </a>
    </div>


    <div class="overflow-y-auto h-[340px]" @scroll="handleProductDataScroll">
      <div v-for="(category, index) in categories" :key="category" :id="category.product_id" class="mt-5 productData">
        <h1>{{ category.name }} <span class="text-red-500">active index {{ activeIndex }}</span></h1>





        <div class="  p-2 mt-3" v-for="item in productData[category.type]" :key="item.id">

          <div class="flex">
            <!-- img  -->
            <div class="  " style="width: 25% !important;"><img :src="item.img" alt="" class="productImg"></div>
            <!-- product name  -->
            <div style="width: 75%;">
              <h3 class="mb-2 ml-2 font-bold">{{ item.name }}</h3>
              <p class="mb-2 ml-2">{{ item.subtitre }} </p>

              <div class="flex items-center justify-between ml-2">
                <p class="font-bold">{{ item.price }} so'm</p>

                <div>
                  <el-button type="primary">
                  <el-icon>
                    <Plus color="#fff" />
                  </el-icon></el-button>
                  

                </div>
                
              </div>


            </div>

          </div>


          <hr class="mt-3" />







        </div>










      </div>
    </div>


  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import cola from '@/assets/imgs/cola.jpg'
import pitsa from '@/assets/imgs/pitsa.jpg'
import pitsa2 from '@/assets/imgs/pizza-png-15.png'

// const categories = ref([
//   'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5',
//   'Category 6', 'Category 7', 'Category 8', 'Category 9', 'Category 10',
//   'Category 11', 'Category 12'
// ]);



const activeIndex = ref(0);



const categories = ref([
  {
    id: 1,
    name: 'Pitsa',
    img: pitsa,
    product_id: 1,
    type: 'pitsa'

  },
  {
    id: 2,
    name: 'ichimliklar',
    img: cola,
    product_id: 2,
    type: 'ichimlik'
  },
  {
    id: 3,
    name: 'sushi',
    img: pitsa,
    product_id: 3,
    type: 'sushi'
  },

  {
    id: 4,
    name: 'shashlik',
    img: cola,
    product_id: 4,
    type: 'shashlik'

  },
  {
    id: 5,
    name: 'un',
    img: cola,
    product_id: 5,
    type: 'un'

  },
  {
    id: 6,
    name: 'don',
    img: cola,
    product_id: 6,
    type: 'don'

  }

])
const productData = ref({
  pitsa: [{
    id: 1,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'pitsa'

  },
  {
    id: 2,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'pitsa'



  },
  {
    id: 3,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'pitsa'



  }, {
    id: 4,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'pitsa'



  }, {
    id: 5,
    name: 'pitsa',
    img: pitsa2,
    productName: 'Pitsa',
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'pitsa'



  }, {
    id: 6,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'pitsa'


  }, {
    id: 7,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'pitsa'
  }],

  ichimlik: [

    {
      id: 1,
      name: 'cola',
      img: cola,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'ichimlik'



    },
    {
      id: 2,
      name: 'cola',
      img: cola,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'ichimlik'



    },
    {
      id: 3,
      name: 'cola',
      img: cola,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'ichimlik'



    },
    {
      id: 4,
      name: 'cola',
      img: cola,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'ichimlik'



    },
    {
      id: 5,
      name: 'cola',
      img: cola,
      subtitre: 'lorem ipsum dolor sit amet',
      price: 200,
      type: 'ichimlik'



    }],
  sushi: [{
    id: 1,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'sushi'

  },
  {
    id: 2,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'sushi'



  },
  {
    id: 3,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'sushi'



  }, {
    id: 4,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'sushi'



  }, {
    id: 5,
    name: 'pitsa',
    img: pitsa2,
    productName: 'Pitsa',
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'sushi'



  }, {
    id: 6,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'sushi'


  }, {
    id: 7,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'sushi'
  }],

  shashlik: [{
    id: 1,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'

  },
  {
    id: 2,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'



  },
  {
    id: 3,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'



  }, {
    id: 4,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'



  }, {
    id: 5,
    name: 'pitsa',
    img: pitsa2,
    productName: 'Pitsa',
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'



  }, {
    id: 6,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'pitsa'


  }, {
    id: 7,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'pitsa'
  }],
  don: [{
    id: 1,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'

  },
  {
    id: 2,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'



  },
  {
    id: 3,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'



  }, {
    id: 4,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'



  }, {
    id: 5,
    name: 'pitsa',
    img: pitsa2,
    productName: 'Pitsa',
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'



  }, {
    id: 6,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'pitsa'


  }, {
    id: 7,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'pitsa'
  }],
  un: [{
    id: 1,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'

  },
  {
    id: 2,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'



  },
  {
    id: 3,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'



  }, {
    id: 4,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'



  }, {
    id: 5,
    name: 'pitsa',
    img: pitsa2,
    productName: 'Pitsa',
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'shashlik'



  }, {
    id: 6,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'pitsa'


  }, {
    id: 7,
    name: 'pitsa',
    img: pitsa2,
    subtitre: 'lorem ipsum dolor sit amet',
    price: 200,
    type: 'pitsa'
  }],


})

const scrollToCategory = (index) => {
  activeIndex.value = index;

  // const element = document.getElementById('category' + index);
  // if (element) {
  //   element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // }
  // console.log(activeIndex.value, 'bur scrollToCategory');

};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        activeIndex.value = entry.target.getAttribute('id')
        // scrollToCategory(activeIndex.value)
      }

    });
  });

  const elements = document.querySelectorAll('.productData');
  elements.forEach((element) => {
    observer.observe(element);
  });
});

const handleProductDataScroll = () => {
  const productDataElements = document.querySelectorAll('.productData');
  productDataElements.forEach((element, index) => {
    const rect = element.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      activeIndex.value = element.id;
      document.getElementById('category' + element.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
};
</script>

<style scoped>
.menufor {
  /* height: 220px; */
  overflow-x: auto;
  display: flex;
}

.element {
  border-radius: 5px;
  min-width: 100px !important;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}



.menufor::-webkit-scrollbar {
  display: none;
  /* Hide scrollbar */
}






.active {
  background-color: #6A984D;
  border-radius: 5px;
  color: #fff;

}

.categoryImg {
  width: 50px;
  height: 50px;
}
</style>
