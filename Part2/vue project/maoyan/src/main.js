//公用的引入
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/api/request'
import Mint from 'mint-ui'  //    引入mint-ui
Vue.use(Mint) //使用mint-ui

import "u-reset.css"
import "@/style/font/iconfont.css"
import "@/style/mintUI.css"
import "@/style/DIYmintUI.css"

Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//处理路由跳转报错
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
