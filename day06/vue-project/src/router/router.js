import Article from '@/views/Article.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';
import Collect from '@/views/Collect.vue';
import Layout from '@/views/Layout.vue';
import Like from '@/views/Like.vue';
import User from '@/views/User.vue';
import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path:'/',
      component: Layout,
      redirect: '/article',
      children:[
        {
          path:'/article',
          component: Article
        },
        {
          path:'/collect',
          component:Collect
        },
        {
          path:'/like',
          component: Like
        },
        {
          path: '/user',
          component: User
        }
      ]
    },
    {
      path:'/detail/:id?',
      component: ArticleDetail
    },
  ]
})

export default router