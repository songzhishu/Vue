import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//全局注册指令
/* Vue.directive('focus',{
  //当绑定的元素添加到页面的时候会触发inserted函数
  inserted(el){
    console.log(el);
    el.focus()
  }
}) */

new Vue({
  render: h => h(App),
}).$mount('#app')
