import { createRouter, createWebHistory } from 'vue-router'

// 导入布局组件
import Index from '@/layouts/Index.vue'

// 导入页面组件
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import Discover from '@/pages/Discover.vue'
import Order from '@/pages/Order.vue'
import Profile from '@/pages/Profile.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: Index,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'discover',
        name: 'Discover',
        component: Discover
      },
      {
        path: 'order',
        name: 'Order',
        component: Order
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'about',
        name: 'About',
        component: About
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/business-list',
    name: 'BusinessList',
    component: () => import('@/pages/BusinessList.vue')
  },
  {
    path: '/dishes',
    name: 'Dishes',
    component: () => import('@/pages/Dishes.vue') // 菜品页面
  },
  {
    path: '/order-confirm',
    name: 'OrderConfirm',
    component: () => import('@/pages/OrderConfirm.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('@/pages/Payment.vue')
  }



  // 其他不需要 tabbar 的页面可以在这里添加
  // 例如：支付页面、设置页面等
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 