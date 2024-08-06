<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-05 19:06:22
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-05 19:30:54
 * @FilePath: \vue-project\src\components\Son.vue
 * @Description: 
-->
<script setup>

const props = defineProps({
  car: String
})
console.log(props.car);


const emit = defineEmits(['getMsg'])
const sentMsg = () => {
  emit('getMsg', 'haoefo')
}
</script>

<template>
  <div>我是子组件{{ car }}
    <button @click="sentMsg">发送消息</button>
  </div>
</template>

<style scoped>
div {
  margin: 0 auto;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  background-color: rgb(17, 255, 0);
}
</style>
