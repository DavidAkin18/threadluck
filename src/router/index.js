import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TraditionalPage from '@/views/TraditionalPage.vue'
import BespokePage from '@/views/BespokePage.vue'
import ReadyToWearPage from '@/views/ReadyToWearPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/aso-ebi',
    name:'traditional',
    component:TraditionalPage
  },
  {
    path:'/bridals',
    name:'bespoke',
    component:BespokePage
  },
  {
    path:'/ready-to-wear',
    name:'ready',
    component:ReadyToWearPage
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
