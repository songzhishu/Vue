import Vue from 'vue'
import App from './App.vue'
/* 导入 */
import router from './router/router'

Vue.config.productionTip = false



/* 注入vue实例 */
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
