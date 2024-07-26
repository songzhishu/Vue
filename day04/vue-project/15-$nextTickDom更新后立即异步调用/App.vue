<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input ref="inp" type="text" v-model="editValue" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "大标题",
      isShowEdit: false,
      editValue: "",
    };
  },
  methods: {
    handleEdit() {
      this.isShowEdit = true;
      
      this.$nextTick(()=>{
        this.$refs.inp.focus();
      })

    },
  },
};
</script>

<style>
</style>