<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-07-26 16:38:36
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-07-26 16:52:37
 * @FilePath: \Vue\day04\vue-project\9-provide&inject\App.vue
 * @Description: 
-->
<template>
  <div class="app">
    我是APP组件
    <button @click="change">修改数据</button>
    <SonA></SonA>
    <SonB></SonB>
  </div>
</template>

<script>
import SonA from './components/SonA.vue'
import SonB from './components/SonB.vue'
export default {
  provide() {
    return {
      // 简单类型 是非响应式的
      color: this.color,
      // 复杂类型 是响应式的
      userInfo: this.userInfo,
    }
  },
  data() {
    return {
      color: 'pink',
      userInfo: {
        name: 'zs',
        age: 18,
      },
    }
  },
  methods: {
    change() {
      this.color = 'red'
      this.userInfo.name = 'ls'
    },
  },
  components: {
    SonA,
    SonB,
  },
}
</script>

<style>
.app {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
}
</style>