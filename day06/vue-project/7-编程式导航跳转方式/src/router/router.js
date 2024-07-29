import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/NotFound.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    /* 匹配规则  重定向的路径 */
    { name: '/', path: '/', redirect: '/home' },
    { name: 'zhangsan', path: '/home', component: Home },
    { name: 'xiaoli', path: '/search/:words?', component: Search },
    {
      path: '*',
      component: NotFound
    }
  ],
  mode: 'history'
})

export default router