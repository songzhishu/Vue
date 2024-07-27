<template>
  <div>
    <h1>自定义指令</h1>
    <input ref="inp" v-focus type="text" />
  </div>
</template>

<script>
export default {
  /* mounted() {
    //在使用钩子函数，然后找到要操作的dom
    this.$refs.inp.focus();
  }, */
  directives:{
    //指令名 指令的配置项
    focus:{
      inserted(el){
        el.focus()
      }
    }
  },
  components: {},
};
</script>

<style>
</style>
