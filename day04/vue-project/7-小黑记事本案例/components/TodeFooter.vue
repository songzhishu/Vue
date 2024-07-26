<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-07-26 14:39:25
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-07-26 15:20:41
 * @FilePath: \Vue\day04\vue-project\src\components\TodeFooter.vue
 * @Description: 
-->
<template>
  <!-- 统计和清空 -->
  <footer class="footer">
    <!-- 统计 -->
    <span class="todo-count"
      >合 计:<strong> {{ list.length }} </strong></span
    >
    <!-- 清空 -->
    <button class="clear-completed" @click="clearList">清空任务</button>
  </footer>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {
    clearList() {
        this.$emit('clearList')
    },
  },
};
</script>

<style>
</style>