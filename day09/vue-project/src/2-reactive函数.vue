<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-05 11:38:16
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-05 16:50:06
 * @FilePath: \vue-project\src\App.vue
 * @Description: 
-->
<script setup>
//导入
import { reactive } from 'vue'

//执行函数 变量
const state = reactive({
  count: 100
})
</script>

<template>
  <!-- 直接使用是不行的,要return后才可以在模版中使用 -->
  <div>{{ state.count }}</div>
  <button @click="state.count++">点击</button>
</template>
