<template>
  <div class="cinema">
    <header-title title="影院"></header-title>
    <cinemaNav />
    <cinemaContent />
  </div>
</template>

<script>
import headerTitle from "@/components/common/headerTitle"
import cinemaNav from "@/components/cinema/cinema_nav/cinema_nav.vue"
import cinemaContent from "@/components/cinema/cinema_content/cinema_content.vue"
import {mapMutations} from 'vuex'
export default {
  name: 'cinema',
  activated () {
    this.tabbarShow(true)
  },
  methods: {
    ...mapMutations(['tabbarShow'])
  },
  components: {headerTitle,cinemaNav,cinemaContent}
}
</script>
