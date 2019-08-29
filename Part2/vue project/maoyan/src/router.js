import Vue from 'vue'
import Router from 'vue-router'
import Film from './views/film.vue'
import Cinema from './views/cinema.vue'
import Mine from './views/mine.vue'
import City from './components/common/city.vue'
import Nowplaying from './components/film/nowPlaying/nowPlaying.vue'
import Commingsoon from './components/film/commingSoon/commingSoon.vue'
import Detail from './components/common/detail/detail.vue'
import Login from './views/login.vue'
// import iView from 'iView'

Vue.use(Router)

var router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/film'
    },
    {
      path: '/film',
      component: Film,
      children: [
        {path: '/',redirect: 'nowPlaying'},
        {path: 'nowPlaying',name: 'nowPlaying',component: Nowplaying},
        {path: 'commingSoon',name: 'commingSoon',component: Commingsoon}
      ],
      meta: {
          title: "电影"
      }
    },
    {
      path: '/cinema',
      name: 'Cinema',
      component: Cinema,
      meta: {
          title: "影院"
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
          title: "个人中心",
          needLogin: true
      }
    },
    {
      path: '/city',
      name: 'City',
      component: City,
      meta: {
          title: "城市列表"
      }
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
          title: "登录页面"
      }
    }
  ],
  
})
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title || '电影'    //如果to.meta.title为假值, 则使用"首页"
  if(to.matched.some(recode=>recode.meta.needLogin)){ //recode.meta.needLogin条件为true时, recode满足条件, 此时, to匹配的是mine
      // console.log(to)
      if(window.localStorage.getItem("login")){
          next()
      }else{
          next({name: "Login", params: {redirect: to.fullPath}})  // /mine
      }
  }else{
      next();
  }
  // if(to.meta.needLogin){  //表示访问该页面需要已登录
  //     if(window.localStorage.getItem("login")){
  //         next()
  //     }else{
  //         next({name: "login", params: {redirect: to.fullPath}})
  //     }
  // }else{
  //     next()
  // }
})
// Vue.use(iView)
export default router
