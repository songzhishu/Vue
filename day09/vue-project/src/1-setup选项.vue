<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-05 11:38:16
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-05 16:07:33
 * @FilePath: \vue-project\src\App.vue
 * @Description: 
-->
<script setup>
const msg = '你好'
const logMsg = () => {
  console.log(msg);
}
console.log('我是setup', this);
</script>

<template>
  <!-- 直接使用是不行的,要return后才可以在模版中使用 -->
  <div>{{ msg }}</div>
  <button @click="logMsg">点击</button>
</template>
