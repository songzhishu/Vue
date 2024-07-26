<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-07-26 14:33:28
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-07-26 15:31:55
 * @FilePath: \Vue\day04\vue-project\src\App.vue
 * @Description: 
-->
<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="handleListAdd"></TodoHeader>
    <TodoItem @delChangeList="handleListChange" :list="list"></TodoItem>
    <TodeFooter :list="list" @clearList="handleClearList"></TodeFooter>
  </section>
</template>

<script>
import TodeFooter from "./components/TodeFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoItem from "./components/TodoItem.vue";

const defaultArr = [
  { id: 1, name: "打篮球" },
  { id: 2, name: "打球" },
  { id: 3, name: "球" },
  { id: 4, name: "打" },
  { id: 5, name: "篮球" },
];
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || defaultArr,
    };
  },
  components: {
    TodoHeader,
    TodoItem,
    TodeFooter,
  },
  methods: {
    handleListChange(value) {
      this.list = this.list.filter((item) => item.id !== value);
    },
    handleListAdd(value) {
      this.list.unshift({
        id: +new Date(),
        name: value,
      });
    },
    handleClearList() {
      this.list = [];
    },
  },
  watch: {
    list: {
      deep: true,
      immediate: true,
      handler: function (val, oldVal) {
        console.log("烦死了!" + oldVal);
        localStorage.setItem("list", JSON.stringify(val));
      },
    },
  },
};
</script>

<style>
</style>
