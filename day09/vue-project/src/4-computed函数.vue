<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-05 11:38:16
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-05 17:17:30
 * @FilePath: \vue-project\src\App.vue
 * @Description: 
-->
<script setup>
import { computed, ref } from 'vue';

const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])

const cList = computed(() => {
  //处理数据
  return list.value.filter(item => item > 4)
})
</script>

<template>
  <div>{{ cList }}</div>
</template>
