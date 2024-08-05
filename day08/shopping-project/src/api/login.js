/*
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-02 10:11:57
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-02 16:29:33
 * @FilePath: \shopping-project\src\api\login.js
 * @Description:
 */
// 此处用于存放所有登录相关的接口请求
import request from '@/utils/request'

// 1. 获取图形验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}

// 2. 获取短信验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  }
  )
}

// 3.登录接口
export const codeLogin = (mobile, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty: false,
      partyData: {},
      mobile,
      smsCode
    }
  }
  )
}
