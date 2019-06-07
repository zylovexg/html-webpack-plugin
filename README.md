## npm install
## npm run dev 或者 npm run build

## 步骤
### npm i -d html-wepack-plugin
### webpack.config.js中配置
```javascript
const HtmlWebpckPlugin = require('html-webpack-plugin');
module.exports = {
  plugin: [
    new HtmlWebpackPlugin({
      title: '标题',   // 这个值对应 html 里的 title，如果使用的是模版，则在模版里 <title><%= htmlWebpackPlugin.options.title %></title>
      template: './src/template.html',   // 模版文件地址
      filename: 'test1.html',   // 文件名，默认为 index.html（路径相对于 output.path 的值）
      inject: true,   // script 标签的位置，true/body 为在 </body> 标签前，head 为在 <head> 里，false 表示页面不引入js文件
      hash: true,   // 是否为引入的js文件添加 hash 值
      chunks: ['one'],   // 页面里要引入的js文件，值对应的是 entry 里的key。省略参数会把 entry 里所有文件都引入
      excludeChunks: ['one'],   // 页面里不能引入的js文件，与 chunks 刚好相反。所有这两个只能有一个出现
      minify: {
        collapseWhitespace: true,   // 压缩空格
        removeAttributeQuotes: true,   //移除引号
        removeComments: true,   // 移除注释
      }
    }),
    // 需要生成多个文件时，需要再new一个
    new HtmlWebpackPlugin()
  ]
}
```