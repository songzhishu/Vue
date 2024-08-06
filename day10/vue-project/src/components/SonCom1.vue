<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-06 09:01:24
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-06 09:38:11
 * @FilePath: \vue-project\src\components\SonCom1.vue
 * @Description: 
-->
<script setup>
import { useCounterStore } from '@/stores/counter';


const counterStore = useCounterStore()

const addNum = () => {
    counterStore.increment()
}

</script>
<template>
    <div>
        我是Son1-{{ counterStore.count }}- <button type="button" @click="addNum">+</button>
    </div>
</template>

<style scoped></style>