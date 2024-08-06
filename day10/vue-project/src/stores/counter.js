/*
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-06 08:36:48
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-06 09:30:10
 * @FilePath: \vue-project\src\stores\counter.js
 * @Description: 
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/* 定义：
    仓库的唯一标识，()=>{
    }  

    */
export const useCounterStore = defineStore('counter', () => {
  //声明数据
  const count = ref(100)

  //getter 对数据的派生属性的计算
  const doubleCount = computed(() => count.value * 2)

  //action
  function increment() {
    count.value++
  }

  function decrease() {
    count.value--
  }
  return { count, doubleCount, increment, decrease }
})
