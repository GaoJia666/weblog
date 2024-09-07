const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // 开发环境使用 source map
  devServer: {
    static: './dist', // 静态文件目录
    port: 8080, // 前端开发服务器端口
    host: 'localhost',
    open: true, // 自动打开浏览器
    hot: true, // 热替换
    historyApiFallback: true, // 处理路由刷新问题
    // proxy: [
    //   {
    //     context: ['/api'], // 匹配以 /api 开头的请求
    //     target: 'http://localhost:3007', // 代理到后端服务
    //     changeOrigin: true, // 更改请求源头
    //     pathRewrite: { '^/api': '' }, // 将 /api 前缀去掉
    //   },
    // ],
  },
});