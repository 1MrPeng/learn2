<template>
  <div class="mine">
    <headerTitle title="我的" />
    <div class="touxiang">
      <img src="https://img.meituan.net/maoyanuser/a0f6d3f97abf06ed2e8b82c7537334c110242.png" alt="">
    </div>
    <div class="shop">
      <p>我的订单</p>
      <ul>
        <li>电影</li>
        <li>商城</li>
      </ul>
    </div>

    <div>
      <ul>
        <li>在线观影</li>
        <li>优惠券</li>
        <li>折扣卡</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import headerTitle from '@/components/common/headerTitle.vue'
export default {
  name: 'mine',
  components: {
    headerTitle
  },
  created() {
    this.tabbarShow(true)
  },
  methods: {
    ...mapMutations(['tabbarShow'])
  },
}
</script>
<style lang="scss" scoped>
.mine{
  background: #F3F3F3;
  height: 100vh;
}
.touxiang{
  margin-top: 50px;
  height: 150px;
  background: #E9504A;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
    width: 66px;
    border-radius: 50%;
  }
}
.shop{
  height: 149px;
  margin-top: 10px;
  background: white;
  padding-top: 10px;
  p{
    text-align: center;
  }
  ul{
    display: flex;
    justify-content: center;
    li{
      margin: 25px; 
      border-radius: 50%;
      height: 50px;
      width: 50px;
      background: pink;
      text-align: center;
      line-height: 50px;
    }
  }
}
.mine>div:last-child{
  margin-top: 10px;
  background: white;
  ul{
    padding: 0 10px;
    li{
      padding: 12px;
      border-bottom: 1px solid #eee;
      font-size: 13px;
      &:last-child{
        border: none;
      }
    }
  }
}
</style>>