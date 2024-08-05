/*
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-02 08:42:00
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-03 09:43:41
 * @FilePath: \shopping-project\src\router\index.js
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout'
import Search from '@/views/search'
import SearchList from '@/views/search/list.vue'
import Prodetail from '@/views/prodetail'
import Pay from '@/views/pay'
import Orders from '@/views/orders'
import Home from '@/views/layout/home.vue'
import Category from '@/views/layout/category.vue'
import User from '@/views/layout/user.vue'
import Cart from '@/views/layout/cart.vue'

import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/category', component: Category },
      { path: '/user', component: User },
      { path: '/cart', component: Cart }
    ]
  },
  {
    path: '/login', component: Login
  },
  {
    path: '/search', component: Search
  },
  {
    path: '/searchlist', component: SearchList
  },
  {
    path: '/prodetail/:id?', component: Prodetail
  },
  {
    path: '/pay', component: Pay
  },
  {
    path: '/orders', component: Orders
  }
]

const router = new VueRouter({
  routes
})

// 全局路由守卫
/* 所有的路由在访问之前都会调用这个 */
const authUrls = ['/pay', '/orders']
router.beforeEach((to, from, next) => {
  if (!authUrls.includes(to.path)) {
    // 非权限页面，直接放行
    next()
    return
  }

  // 是权限页面，需要判断token
  const token = store.getters.token
  console.log(token)
  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
