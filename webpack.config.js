const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    one: './src/1.js',
    two: './src/2.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '标题',
      template: './src/template.html',
      filename: 'test1.html',
      inject: true,
      hash: true,
      // chunks: ['one'],
      excludeChunks: ['two'],
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      title: '标题',
      template: './src/template.html',
      filename: 'test2.html',
      hash: true,
      chunks: ['two']
    })
  ]
}