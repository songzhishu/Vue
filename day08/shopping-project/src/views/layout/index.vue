<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-01 18:10:49
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-01 19:53:52
 * @FilePath: \shopping-project\src\views\layout\index.vue
 * @Description:
-->
<template>
  <div>
    <!-- 二级路由出口 -->
    <router-view ></router-view>
    <van-tabbar active-color="#68bc45" inactive-color="#000" route>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类页</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="contact-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {

    }
  }
}
</script>

<style></style>
