const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')    //导入在内存中自动生成index页面的插件

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname,'./dist/index.html'), //源文件
    filename: 'index.html'  //生成在内存中首页的名称
})

//webpack只能打包处理.js后缀名类型的文件，像.png  .vue无法主动处理，所以要配置第三方的loader
module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    module: {   //所有第三方模块的配置规则
        rules: [    //第三方匹配规则
            { test: /\.js|jsx$/,use: 'babel-loader', exclude: /node_modules/ }   //千万别忘记添加exclude排除项

        ]
    }
}