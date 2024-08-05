/*
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-02 09:35:10
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-03 08:46:11
 * @FilePath: \shopping-project\src\utils\request.js
 * @Description:
 */
import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'

const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api/',
  // baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
  // 加载
  Toast.loading({
    message: '加载中...',
    forbidClick: true, // 禁止背景点击
    loadingType: 'spinner', // 配置loading图标
    duration: 0 // 不会自动消失
  })
  // 在发送请求之前做些什么
  // 只要有token，就在请求时携带，便于请求需要授权的接口
  config.headers.platform = 'H5'
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么 (默认axios会多包装一层data，需要响应拦截器中处理一下)
  const res = response.data
  if (res.status !== 200) {
    // 给错误提示, Toast 默认是单例模式，后面的 Toast调用了，会将前一个 Toast 效果覆盖
    // 同时只能存在一个 Toast
    Toast(res.message)
    // 抛出一个错误的promise
    return Promise.reject(res.message)
  } else {
    // 正确情况，直接走业务核心逻辑，清除loading效果
    Toast.clear()
  }
  return res
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default instance
