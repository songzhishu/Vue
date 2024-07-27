<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-07-27 19:40:42
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-07-27 20:54:41
 * @FilePath: \Vue\day05\vue-project\src\components\MyTag.vue
 * @Description: 
-->
<template>
  <div class="my-tag">
    <input
      v-if="isShow"
      v-focus
      class="input"
      type="text"
      ref="inp"
      :value="value"
      placeholder="输入标签"
      @blur="isShow = false"
      @keyup.enter="handleEnter"
    />
    <div v-else class="text" @dblclick="edit">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    edit() {
      console.log("双击了?");
      //双击显示输入框
      this.isShow = true;

      //回显数据

      /*  //聚焦
      this.$nextTick(()=>{
          this.$refs.inp.focus();
      }
      ) */
    },
    handleEnter(e) {
      if (e.target.value.trim() === "") {
        return alert("不能修改为空值!");
      }
      this.$emit("input", e.target.value);
      //隐藏
      this.isShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>