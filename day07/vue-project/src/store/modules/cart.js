/*
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-07-31 18:15:26
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-01 10:00:30
 * @FilePath: \vue-project\src\store\modules\cart.js
 * @Description:
 */
import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      // 购物车数据
      list: []
    }
  },
  mutations: {
    updataList (state, newList) {
      state.list = newList
    },
    updataCount (state, obj) {
      const goods = state.list.find(item => item.id === obj.id)
      goods.count = obj.newCount
    }
  },
  actions: {
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')

      // 调用Mutation中的方法
      context.commit('updataList', res.data)
    },
    // 修改count
    async countChange (context, obj) {
      await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.newCount
      })
      context.commit('updataCount', {
        id: obj.id,
        newCount: obj.newCount
      })
    }
  },
  getters: {
    total (state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    totalPrice (state) {
      return state.list.reduce((sum, item) => sum + item.count * item.price, 0)
    }
  }
}
