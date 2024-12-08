import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: history,
 
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/basket',
      name: 'basket',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Basket.vue')
    },
    {
      path: '/order',
      name: 'order',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Order.vue')
    },
    {
      path: '/success',
      name: 'success',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Success.vue')
    },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: () => import('../views/test.vue')

    // }

  ]
})











// router.beforeEach((to, from, next) => {
//   if (to.path === '/') {
//     document.body.style.overflowY = 'hidden';
//   } else {
//     document.body.style.overflowY = 'auto';
//   }
//   next();
// });
export default router
