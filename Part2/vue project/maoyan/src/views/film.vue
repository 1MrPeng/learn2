<template>
  <div class="film">
    <header-title title="猫眼电影"></header-title>
    <div class="nav">
      <!-- 定位城市 -->
      <div @click="toCity">
         <span>{{city}}</span>
        <i class="iconfont icon-shang"></i>
      </div>
      <!-- film中的切换 -->
      <ul>
        <li :class="{'active': nowItem==item.title}" v-for="item in list" :key="item.name" @click="change(item)">{{item.title}}</li>
      </ul>
      <!-- 搜索组件 -->
      <div class="search">
        <i class="iconfont icon-searchicon"></i>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
import headerTitle from "@/components/common/headerTitle"
let markTab = ''
export default {
  name: "film",
  data() {
    return {
      list: [
        { title: "正在热映", name: "nowPlaying" },
        { title: "即将上映", name: "commingSoon" }
      ],

      nowItem: markTab
    }
  },
  activated() {
    if(this.$route.query.city){
      this.city = this.$route.query.city
      this.tabbarShow(true)
    }
  },
  created() {
    this.tabbarShow(true)
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    change(item) {
      this.$router.push({ name: item.name })
    },
    toCity(){
      this.$router.push({name: 'City'})
    },
    ...mapMutations(['tabbarShow'])
  },
  beforeRouteEnter (to, from, next) {
    if(to.name == "nowPlaying"){
      markTab = "正在热映"
    }else{
      markTab = "即将上映"
    }
    next()
  },
  watch: {
    $route(val){
      switch (val.name) {
        case "nowPlaying":
            this.nowItem = "正在热映"
          break;

        case "commingSoon":
            this.nowItem = "即将上映"
          break;

        // default:
        //   this.nowItem = "正在热映"
        //   break;
      }
    }
  },
  components: { headerTitle }
};
</script>

<style lang="scss" scoped>
  .title{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .nav{
    z-index: 10;
    background: white;
    position: fixed;
    top: 50.5px;
    left: 0;
    right: 0;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    color: #666;
    border-bottom: 1px solid #e6e6e6;
    div{
      &:nth-of-type(1){
        display: flex;
        align-items: flex-end;
        span{
          display: inline-block;
          max-width: 80px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        i{
          color: #ccc;
        }
      }
    }
    ul{
      display: flex;
      justify-content: space-around;
      align-items: center;
      li{
        width: 80px;
        text-align: center;
        height: 44px;
        line-height: 44px;
        margin: 0 12px;
        font-weight: bold;
        &.active{
          color: #e54847;
          border-bottom: 2px solid #e54847;
        }
      }
    }
  }
  .search{
    i{
      font-size: 24px;
      color: #e54847;
      font-weight: bold;
    }
  }
</style>>
