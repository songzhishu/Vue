import Vue from 'vue'
import App from './App.vue'
/* 导入 */
import VueRouter from 'vue-router'
import My from './views/My.vue'
import Friend from './views/Friend.vue'
import Find from './views/Find.vue';

Vue.config.productionTip = false

/* 全局注册 */
Vue.use(VueRouter)

const router = new VueRouter({
  /* 配置规则 有很多规格 数组里面包对象 */
  routes: [{ path: '/find', component: Find },
  { path: '/my', component: My },
  { path: '/friend', component: Friend },]
})



/* 注入vue实例 */
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
