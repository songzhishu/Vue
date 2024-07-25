<template>
  <div class="son" style="border: 3px solid #000; margin: 10px">
    <!-- 3.直接使用props的值 -->
    我是Son组件{{ title }}

    <button @click="change">点击</button>
  </div>
</template>

<script>
export default {
  name: "Son-Child",
  // 2.通过props来接受
  props: ["title"],
  methods: {
    change() {
      /* 通过$emit去发送消息,通知父组件去修改数据
       */
      this.$emit('changeTitle',"你才是狗屎")
    },
  },
};
</script>

<style>
button {
    background-color: #4CAF50; /* 绿色 */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px; /* 圆角边框 */
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18); /* 阴影效果 */
    transition: 220ms all ease-in-out; /* 过渡效果 */
}

button:hover {
    background-color: #45a049; /* 鼠标悬停时的背景颜色 */
}
</style>