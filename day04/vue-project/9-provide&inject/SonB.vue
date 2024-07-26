<template>
  <div class="SonB">
    我是SonB组件   {{ color }} -{{ userInfo.name }} -{{ userInfo.age }}
  </div>
</template>

<script>
export default {
  inject: ['color', 'userInfo'],
}
</script>

<style>
.SonB {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
  height: 200px;
}
</style>