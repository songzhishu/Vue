<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-06 09:01:34
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-06 09:37:19
 * @FilePath: \vue-project\src\components\SonCom2.vue
 * @Description: 
-->
<script setup>
import { useCounterStore } from '@/stores/counter';


const counterStore = useCounterStore()

const reduceNum = () => {
    alert(1111)
    counterStore.decrease()
}

</script>
<template>
    <div>
        我是Son2-{{counterStore.count}}- <button type="button" @click="reduceNum">-</button>
    </div>
</template>

<style scoped></style>