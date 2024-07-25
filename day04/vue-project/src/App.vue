<template>
  <div class="app">
    <BaseCount :count="count" @changeHandle="handleCountChange"></BaseCount>
  </div>
</template>

<script>
import BaseCount from "./components/BaseCount.vue";
export default {
  components: {
    BaseCount,
  },
  data() {
    return {
      count: 100,
    };
  },
  methods: {
    handleCountChange(value) {
      this.count = value;
    },
  },
};
</script>

<style>
</style>