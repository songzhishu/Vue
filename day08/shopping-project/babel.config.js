/*
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-08-02 08:42:00
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-08-02 09:03:46
 * @FilePath: \shopping-project\babel.config.js
 * @Description:
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
