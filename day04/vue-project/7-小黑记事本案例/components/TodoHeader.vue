<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>小黑记事本</h1>
    <input
      placeholder="请输入任务"
      class="new-todo"
      v-model.trim="todoName"
      @keyup.enter="add"
    />
    <button class="add" @click="add">添加任务</button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      todoName: "",
    };
  },
  methods: {
    add() {
      if (!this.todoName) {
        alert("请输入内容后添加");
        return;
      }
      this.$emit("add", this.todoName);

      /* 置空 */
      this.todoName=''
    },
  },
};
</script>

<style>
</style>