<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-07-26 20:45:29
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-07-26 21:18:16
 * @FilePath: \Vue\day04\vue-project\src\components\BaseChart.vue
 * @Description: 
-->
<template>
  <div ref="mychart" class="base-chart-box">子组件</div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    
    // const myChart = echarts.init(document.querySelector(".base-chart-box"))

    /* 容易收到其他的盒子干扰从而无法获取到正确的dom */
    const myChart = echarts.init(this.$refs.mychart)
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    })
  },
}
</script>

<style scoped>
.base-chart-box {
  width: 400px;
  height: 300px;
  border: 3px solid #000;
  border-radius: 6px;
}
</style>