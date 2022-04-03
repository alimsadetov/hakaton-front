import { createRouter, createWebHistory } from 'vue-router'
import Categories from '../components/Categories.vue'
import Casual from '../components/Casual.vue'
// import Adventure from '../views/Adventure.vue'
// import Arcade from '../views/Arcade.vue'
// import Azart from '../views/Azart.vue'
// import Simulator from '../views/Simulator.vue'
// import Strategy from '../views/Strategy.vue'

const routes = [
  {
    path: '/main',
    name: 'Categories',
    component: Categories,
    alias: '/'
  },
  {
    path: '/casual',
    name: 'Casual',
    component: Casual
  },
//   {
//     path: '/adventure',
//     name: 'Adventure',
//     component: Adventure
//   },
//   {
//     path: '/arcade',
//     name: 'Arcade',
//     component: Arcade
//   },
//   {
//     path: '/azart',
//     name: 'Azart',
//     component: Azart
//   },
//   {
//     path: '/simulator',
//     name: 'Simulator',
//     component: Simulator
//   },
//   {
//     path: '/strategy',
//     name: 'Strategy',
//     component: Strategy
//   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router