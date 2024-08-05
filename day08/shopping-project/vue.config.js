const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 设置成为./的化上传到服务器任意的路径都可以访问，如果没有设置，那么只能上传到根路径
  publicPath: './',
  transpileDependencies: true
})
