<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-07-31 18:11:45
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-01 09:06:10
 * @FilePath: \vue-project\src\App.vue
 * @Description:
-->
<template>
  <div class="app-container" >
    <!-- Header 区域 -->
    <cart-header></cart-header>

    <!-- 商品 Item 项组件 -->
    <cart-item v-for="(item, index) in list" :key="item.id" :item="item" :index="index"></cart-item>

    <!-- Foote 区域 -->
    <cart-footer></cart-footer>
  </div>
</template>

<script>
import CartHeader from '@/components/cart-header.vue'
import CartFooter from '@/components/cart-footer.vue'
import CartItem from '@/components/cart-item.vue'

import { mapState } from 'vuex'
export default {
  name: 'App',
  created () {
    this.$store.dispatch('cart/getList')
  },
  components: {
    CartHeader,
    CartFooter,
    CartItem
  },
  computed: {
    ...mapState('cart', ['list'])
  }

}
</script>

<style lang="less" scoped>
.app-container {
  padding: 50px 0;
  font-size: 14px;
}
</style>
