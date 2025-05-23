import { createRouter, createWebHistory } from 'vue-router'

import CustomerList from '@/views/CustomerList.vue'
import CustomerInfo from '@/views/CustomerInfo.vue'
import CustomerAdd from '@/views/CustomerAdd.vue'
import CustomerUpdate from '@/views/CustomerUpdate.vue'
const routes = [
  {
    path: '/',
    redirect: { name : 'custList'}
  },
  {
    path: '/customerList',
    name: 'custList',
    component: CustomerList
  },
  {
    path:'/customerInfo',
    name:'custInfo',
    component:CustomerInfo
  },
  {
    path:'/customerAdd',
    name:'cusAdd',
    component:CustomerAdd
  },
  {
    path:'/customerUpdate',
    name:'custUpdate',
    component:CustomerUpdate
  },
  {
    path:'/customerUpdate/:custId',
    name:'custUpdate',
    component:CustomerUpdate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
