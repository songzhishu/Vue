//导入核心包
import Vue from 'vue'
//导入根组件
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式

//全局组件
import BaseGoodsItem from './components/BaseGoodsItem.vue'
import BaseBrandItem from './components/BaseBrandItem.vue'

Vue.component("BaseGoodsItem", BaseGoodsItem)
Vue.component("BaseBrandItem", BaseBrandItem)
//当前的环境  生产还是开发
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
/* .$mount('#app')等价 el 挂载到页面中 */


