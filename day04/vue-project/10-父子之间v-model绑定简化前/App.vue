<template>
  <div class="app">
    <BaseSelect :cityId="selectId" @changeCity="selectId = $event"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from "./components/BaseSelect.vue";
export default {
  data() {
    return {
      selectId: "102",
    };
  },
  components: {
    BaseSelect,
  },
  methods: {
    handleChange(value) {
      this.selectId = value;
      //和上面的写法实现的功能一致
    },
  },
};
</script>

<style>
</style>