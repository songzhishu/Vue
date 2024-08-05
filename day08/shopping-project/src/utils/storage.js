/*
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-02 16:54:23
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-02 16:54:48
 * @FilePath: \shopping-project\src\utils\storage.js
 * @Description:
 */

// 约定一个通用的键名
const INFO_KEY = 'shopping_info'
const HISTORY_KEY = 'history_list'

// 获取个人信息
export const getInfo = () => {
  const defaultObj = { token: '', userId: '' }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultObj
}

// 设置个人信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

// 移除个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 获取搜索历史
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}

// 设置搜索历史
export const setHistoryList = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
