const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
    print: "./src/print.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 5000,
    proxy: {  //设置代理（解决跨域）
      "/ajax": {
        target: "http://m.maoyan.com",
				changeOrigin: true
      }
    }
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management"
    })
  ]
};
