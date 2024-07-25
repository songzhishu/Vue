<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-07-25 19:03:48
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-07-25 19:04:25
 * @FilePath: \Vue\day04\vue-project\src\components\BaseCount.vue
 * @Description: 
-->
<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  /*  */
  data() {
    return {
      count: 100,
    }
  },
}
</script>

<style>
.base-count {
  margin: 20px;
}
</style>