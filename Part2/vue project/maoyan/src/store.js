import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from '@/api/request.js'
// Vue.prototype.$http = axios

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    cinemaTab: true,
    tabbarShow: true,
    tabbaItem: "电影",
    city: "深圳",
    cinemaPost: {
      day: '2019-08-26',
      offset: 0,
      limit: 20,
      districtId: -1,
      lineId: -1,
      hallType: -1,
      brandId: -1,
      serviceId: -1,
      areaId: -1,
      stationId: -1,
      item: '',
      updateShowDay: true,
      reqId: 1566785457856,
      cityId: 30
    },
    cinemaData: []
  },
  mutations: {
    tabbarShow(state,payLoad){
      state.tabbarShow = payLoad
    },
    tabbarItem(state,payLoad){
      state.tabbaItem = payLoad
    },
    city(state,payLoad){
      state.city = payLoad
    },
    changeData(state,payLoad){
      state.cinemaData = payLoad
      console.log(state.cinemaData) 
    },
    changePost(state,payLoad){
      state.cinemaPost.day = payLoad.day || state.cinemaPost.day
      state.cinemaPost.offset = payLoad.offset || state.cinemaPost.offset
      state.cinemaPost.limit = payLoad.limit || state.cinemaPost.limit
      state.cinemaPost.districtId = payLoad.districtId || state.cinemaPost.districtId
      state.cinemaPost.lineId = payLoad.lineId || state.cinemaPost.lineId
      state.cinemaPost.hallType = payLoad.hallType || state.cinemaPost.hallType
      state.cinemaPost.brandId = payLoad.brandId || state.cinemaPost.brandId
      state.cinemaPost.serviceId = payLoad.serviceId || state.cinemaPost.serviceId
      state.cinemaPost.areaId = payLoad.areaId || state.cinemaPost.areaId
      state.cinemaPost.stationId = payLoad.stationId || state.cinemaPost.stationId
      state.cinemaPost.item = payLoad.item || state.cinemaPost.item
      state.cinemaPost.updateShowDay = payLoad.updateShowDay || state.cinemaPost.updateShowDay
      state.cinemaPost.reqId = payLoad.reqId || state.cinemaPost.reqId
      state.cinemaPost.cityId = payLoad.cityId || state.cinemaPost.cityId
    },
    changeCinemaTab(state){
      state.cinemaTab = !state.cinemaTab
    }
  },
  actions: {
    async getData({commit}){
      axios.get('/ajax/cinemaList', {params: this.state.cinemaPost}).then(res=>{
        commit('changeData',res.data.cinemas)
      })
    }
  }
})
