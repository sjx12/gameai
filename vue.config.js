const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './', // 署应用包时的基本 URL。 vue-router hash 模式使用
  outputDir: 'dist', //  生产环境构建文件的目录
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false, //eslint 检测
  productionSourceMap: true, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
    hot: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://hiyou.space/api/game', //后台接口地址
        ws: true, //如果要代理 websockets，配置这个参数
        secure: false, //如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          //重写路径
          '^/api': ''
        }
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map'
  }
})
