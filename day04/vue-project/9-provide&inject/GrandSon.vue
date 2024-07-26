<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-07-26 16:18:38
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-07-26 16:21:17
 * @FilePath: \Vue\day04\vue-project\src\components\GrandSon.vue
 * @Description: 
-->
<template>
  <div class="grandSon">
    我是GrandSon
    {{ color }} -{{ userInfo.name }} -{{ userInfo.age }}
  </div>
</template>

<script>
export default {
  inject: ['color', 'userInfo'],
}
</script>

<style>
.grandSon {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
  height: 100px;
}
</style>