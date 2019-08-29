module.exports = {
    publicPath: './',
    css: {
        sourceMap: true
    },
    devServer: {
        proxy: {    //代理
            '/ajax': {
                target: "http://m.maoyan.com",  //需代理的url地址
                changeOrigin: true  //需要跨域时设置为true
            }
        }
    }
}