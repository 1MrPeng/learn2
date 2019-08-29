<template>
    <div class="title">
        <span v-if="isBack" @click="back" class="iconfont icon-fenxiang"></span>
        <header>{{title}}</header>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    props: {
        title: String,
        isBack: Boolean
    },
    methods: {
        back(){
            this.$router.go(-1)
            this.$store.commit("tabbarShow",true)
            // window.location.reload()
        }
    }
}
</script>

<style lang="scss" scoped>
    .title{
        background: #e54847;
        color: #fff;
        height: 50.5px;
        text-align: center;
        line-height: 50.5px;
        position: relative;
        z-index: 10;
        font-size: 18px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        span{
            display: inline-block;
            height: 30px;
            position: absolute;
            left: 15px;
            top: 0;
            font-size: 20px;
        }
    }
</style>>