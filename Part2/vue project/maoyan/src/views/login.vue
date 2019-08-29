<template>
    <div class="login">
        <headerTitle title="猫眼电影" :isBack="isBack" />
        <div class="mine_nav">
            <ul>
                <template v-for="(item,ind) in list">
                    <li :class="nowTitle==item.title?'active':''" :key="ind" @click="change(item)">{{item.title}}</li>
                </template>
            </ul>
        </div>
        <loginSubmit :p1="p1" :p2="p2" :color="color" />
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import loginSubmit from "@/components/login/loginSubmit.vue"
import headerTitle from "@/components/common/headerTitle"
export default {
    name: "login",
    data() {
        return {
            isBack: true,
            list: [
                {title: "美团账号登录"},
                {title: "手机验证登录"}
            ],
            nowTitle: "美团账号登录",
            color: 'red',
            p1: '账户名/手机号/Email',
            p2: '请输入您的密码'
        }
    },
    created() {
        this.tabbarShow(false)
    },
    activated () {
        this.tabbarShow(false)
    },
    // 组件守卫(为了获取路由传递过来的参数[原先想要跳转的路由])
    beforeRouteEnter: (to, from, next) => {
        window.redirect = to.params.redirect  //将传递过来的参数接收到变量中
        next()
    },
    methods: {
        change(item){
            this.nowTitle = item.title
            if(item.title == "手机验证登录"){
                this.color = 'gray'
                this.p1 = '请输入手机号'
                this.p2 = '请输入短信验证码'
            }else{
                this.color = 'red'
                this.p1 = '账户名/手机号/Email'
                this.p2 = '请输入您的密码'
            }
        },
        ...mapMutations(['tabbarShow'])
    },
    components: {
        headerTitle,loginSubmit
    }
}
</script>

<style lang="scss" scoped>
    .mine_nav{
        height: 37.5px;
        border-bottom: .3rem solid #D6D6D6;
    }
    ul{
        margin-top: 50px;
        display: flex;
		height: 100%;
		padding: 0 10px;
		align-items: center;
		justify-content: space-between;
        li{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            font-size: 13px;
            padding-top: 5px;
            &.active{
                border-bottom: .3rem solid #FFC300;
            }
        }
    }
</style>>