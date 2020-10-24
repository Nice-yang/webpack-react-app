const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  // devtool: 'inline-source-map', // source map 追踪到错误和警告在源代码
  plugins: [
    // new CleanWebpackPlugin(), // 清理dist
    new HtmlWebpackPlugin({ // 使用自定义模板
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(), // 模块热替换 无需刷新
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  devServer: { // 利用node搭起一个本地web服务器
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    port: 3000
  },
  // mode: "production"
};