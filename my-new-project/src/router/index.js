import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustList from '@/views/CustList.vue'
import CustAdd from '@/views/CustAdd.vue'
import CustInfo from '@/views/CustInfo.vue'
import CustUpdate from '@/views/CustUpdate.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/custList',
    name: 'custList',
    component:CustList,
  },
  {
    path: '/custAdd',
    name: 'custAdd',
    component:CustAdd,
  },
  {
    path:'/custInfo',
    name:'custInfo',
    component:CustInfo,
  },
  {
    path:'/custUpdate/:custId',
    name:'custUpdate',
    component:CustUpdate,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
