<template>
  <div class="base-progress">
    <div class="inner" :style="{ width: w + '%' }">
      <span>{{ w }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  // 1.基础写法（类型校验）
  /* props: {
    w: Number,//类型校验
  }, */

  // 2.完整写法（类型、是否必填、默认值、自定义校验）
  props: {
    w: {
      type: Number,
      required: true,
      default: 50,
      validator(value) {
        /* 对value进行数据处理 */
        return true; /* 处理判断 */
      },
    },
  },
};
</script>

<style scoped>
.base-progress {
  height: 26px;
  width: 400px;
  border-radius: 15px;
  background-color: #272425;
  border: 3px solid #272425;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.inner {
  position: relative;
  background: #379bff;
  border-radius: 15px;
  height: 25px;
  box-sizing: border-box;
  left: -3px;
  top: -2px;
}
.inner span {
  position: absolute;
  right: 0;
  top: 26px;
}
</style>