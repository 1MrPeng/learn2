<template>
    <div class="tabbar" v-if="tabbarShow">
        <ul>
            <li v-for="(item,index) in list" @click="change(item)" :class="{'active': item.title==tabbaItem}" :key="index">
                <i :class="`iconfont icon-${item.icon}`"></i>
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
import store from "@/store.js"
import {mapState} from 'vuex'
export default {
    data () {
        return {
           list: [
                {title: "电影", icon: "dianying", path: "/film"},
                {title: "影院", icon: "yingyuana", path: "/cinema"},
                {title: "我的", icon: "wode", path: "/mine"}
            ],
        }
    },
    computed: {
       ...mapState(['tabbarShow','tabbaItem'])
    },
    methods: {
        change(item){
            // window.sessionStorage.setItem("tabItem", this.nowItem)
            this.$router.push({path: item.path})
        },
    },
    watch: {
        $route(val){
            // console.log(val.path)
            switch (val.path) {
                case "/film/nowPlaying":
                    this.$store.commit("tabbarItem",'电影')
                break;

                case "/cinema":
                    this.$store.commit("tabbarItem",'影院')
                break;

                case "/mine":
                    this.$store.commit("tabbarItem",'我的')
                break;

            }
        }
    }
}
</script>

<style lang="scss" scoped>
    //scoped使该样式只作用于当前组件
    .tabbar{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        border-top: 1px solid #d8d8d8;
        z-index: 100;
        ul{
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
                height: 48px;
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                font-size: 12px;
                color: #696969;
                i{
                    font-size: 24px;
                }
                &.active{
                    color: #f03d07;
                }
            }
        }
    }
</style>