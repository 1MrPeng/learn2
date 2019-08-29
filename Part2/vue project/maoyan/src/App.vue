<template>
  <div id="app">
      <tabbar></tabbar>
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
  </div>
</template>
<script>
//引入该组件所需要的组件，（@指的是src文件夹）
import tabbar from '@/components/common/tabbar'
export default {
  components: {tabbar}
}
</script>

<style lang="scss">

</style>
