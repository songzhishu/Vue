<template>
  <div class="app">
    <h4>父组件</h4>
    <BaseForm ref="baseForm"></BaseForm>
    <button @click="getFormData">获取数据</button>
    <button @click="resetFormData">重置数据</button>
  </div>
</template>
<script>
import BaseForm from "./components/BaseForm.vue";
export default {
  components: {
    BaseForm,
  },
  methods: {
    getFormData() {
      this.$refs.baseForm.getData();
    },
    resetFormData() {
      this.$refs.baseForm.resetData();
    },
  },
};
</script>

<style>
</style>