import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mrph from 'mr-ph'

Vue.use(Mrph)

Vue.config.productionTip = false
import "@/style/mr-ph.css"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
