<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-07-26 14:38:46
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-07-26 15:13:20
 * @FilePath: \Vue\day04\vue-project\src\components\TodoItem.vue
 * @Description: 
-->
<template>
  <!-- 列表区域 -->
  <section class="main">
    <ul class="todo-list">
      <li class="todo" v-for="(item, index) in list" :key="item.id">
        <div class="view">
          <span class="index">{{ index + 1 }}.</span>
          <label>{{ item.name }}</label>
          <button class="destroy" @click="del(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
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
    del(id) {
      this.$emit("delChangeList", id);
    },
  },
};
</script>

<style>
</style>