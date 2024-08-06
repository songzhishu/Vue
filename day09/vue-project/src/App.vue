<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-05 11:38:16
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-05 18:33:18
 * @FilePath: \vue-project\src\App.vue
 * @Description: 
-->
<script setup>
import Son from '@/components/Son.vue'

const getMsg = (msg) => {
  console.log(msg);

}
</script>

<template>
  <div class="app">
    <Son car="小米" @getMsg="getMsg"></Son>
  </div>
</template>