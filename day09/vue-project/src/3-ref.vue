<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-05 11:38:16
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-05 17:00:13
 * @FilePath: \vue-project\src\App.vue
 * @Description: 
-->
<script setup>
//导入
import { ref } from 'vue'

//执行函数 变量
const state = ref(100)

//包装类对象
console.log(state);
//具体数据
console.log(state.value);
</script>

<template>
  <!-- 直接使用是不行的,要return后才可以在模版中使用 -->
  <div>{{ state }}</div>
  <button @click="state++">点击</button>
</template>
