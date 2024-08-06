<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-05 11:38:16
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-05 18:30:44
 * @FilePath: \vue-project\src\5-watch.vue
 * @Description: 
-->
<script setup>
import { watch, ref } from 'vue';
const count = ref(1)
const nickname = ref('张三')

const change = () => {
  nickname.value = "李四"
}

//单个
watch(
  count,
  (n, o) => {
    console.log("新" + n + '旧' + o);
  },
  {
    immediate: true
  }
)

//多个
watch(
  [count, nickname],
  (n, o) => {
    console.log("多新" + n + '多旧' + o);
  }
)



</script>

<template>
  <div>
    <div>{{ count }}+{{ nickname }}</div>
    <button type="button" @click="count++">该数字</button>
    <button type="button" @click="change">改名字</button>

  </div>
</template>
