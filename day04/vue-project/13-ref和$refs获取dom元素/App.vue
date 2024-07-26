<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-07-26 20:46:01
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-07-26 21:16:26
 * @FilePath: \Vue\day04\vue-project\src\App.vue
 * @Description: 
-->
<template>
  <div class="app">
    <div class="base-chart-box">
      这是一个捣乱的盒子
    </div>
    <BaseChart></BaseChart>
  </div>
</template>

<script>
import BaseChart from './components/BaseChart.vue'
export default {
  components:{
    BaseChart
  }
}
</script>

<style>
.base-chart-box {
  width: 200px;
  height: 100px;
}
</style>