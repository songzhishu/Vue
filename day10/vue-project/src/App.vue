<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-06 08:36:48
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-06 10:20:51
 * @FilePath: \vue-project\src\App.vue
 * @Description: 
-->
<script setup>
import SonCom1 from "./components/SonCom1.vue";
import SonCom2 from "./components/SonCom2.vue";

import { useCounterStore } from '@/stores/counter';
import { useChannelStore } from '@/stores/channel';


const counterStore = useCounterStore()
const channelStore = useChannelStore()
</script>

<template>
  <div>
    <h2>我是够狠组件---{{ counterStore.count }}</h2>

    <SonCom1></SonCom1>
    <SonCom2></SonCom2>
    <button type="button" @click="channelStore.getList">获取频道数据</button>
    <ul>
      <li v-for="(item) in channelStore.channelList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
