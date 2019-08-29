const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')    //导入在内存中自动生成index页面的插件

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname,'./dist/index.html'), //源文件
    filename: 'index.html'  //生成在内存中首页的名称
})
module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ]
}