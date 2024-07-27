<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-07-25 14:46:53
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-07-25 15:16:23
 * @FilePath: \vue-demo1\src\components\XtxShortCut.vue
 * @Description: 
-->
<template>
      <div class="shortcut">
      <div class="wrapper">
        <ul>
          <li><a href="#" class="login">请先登录</a></li>
          <li><a href="#">免费注册</a></li>
          <li><a href="#">我的订单</a></li>
          <li><a href="#">会员中心</a></li>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">在线客服</a></li>
          <li>
            <a href="#"
              ><span class="iconfont icon-mobile-phone"></span>手机版</a
            >
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.shortcut {
  height: 52px;
  line-height: 52px;
  background-color: #333;
}
.shortcut .wrapper {
  display: flex;
  justify-content: flex-end;
}
.shortcut ul {
  display: flex;
}
.shortcut a {
  padding: 0 15px;
  border-right: 1px solid #999;
  color: #fff;
  font-size: 14px;
  line-height: 14px;
}
.shortcut .login {
  color: #5EB69C;
}
.shortcut .icon-mobile-phone {
  margin-right: 5px;
}
</style>