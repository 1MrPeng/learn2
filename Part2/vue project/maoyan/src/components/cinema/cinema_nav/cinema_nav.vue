<template>
<div class="cinema_nav">
    <div class="nav_top">
        <div @click="toCity">
            <span>{{city}}</span>
            <i :class="icon1" class="iconfont"></i>
        </div>
        <input type="text" placeholder="搜影院" />
    </div>
    <div class="nav_bottom">
        <ul>
            <li :class="nowNav==item.name?'active':''" v-for="item in nav" :key="item.name" @click="change(item,nav)">
                {{item.name}}
                <i class="iconfont" :class="item.icon"></i>
            </li>
        </ul>
    </div>
    <keep-alive>
        <allCity v-if="allCity" @bb="receive" />
        <brand v-if="brand" />
        <Characteristic v-if="Characteristic" />
    </keep-alive>
    

</div>
</template>

<script>
import allCity from "@/components/cinema/cinema_nav/allCity/allCity.vue"
import brand from "@/components/cinema/cinema_nav/brand/brand.vue"
import Characteristic from "@/components/cinema/cinema_nav/Characteristic/Characteristic.vue"
import store from "@/store.js"
import {mapState} from "vuex"
export default {
    name: "cinema_nav",
    data () {
        return {
            icon1: "icon-shang",
			icon2: "icon-searchicon",
            nav: [
                {name: "全城",icon: "icon-shang"},
                {name: "品牌",icon: "icon-shang"},
                {name: "特色",icon: "icon-shang"}
            ],
            allCity: false,
            brand: false,
            Characteristic: false,
            nowNav: ''
        }
    },
    created () {
        
    },
    computed: {
      ...mapState(['city','cinemaTab'])  
    },
    methods: {
        receive(val){
            this.nav[0].name = val
            this.nowNav = val
        },
        toCity(){
            this.$router.push({name: "City"})
        },
       change(item,nav){
           if(item.name == this.nowNav){
                this.allCity = false
                this.brand = false
                this.Characteristic = false
                item.icon = "icon-shang"
                this.nowNav = ''
                return
           }
           this.nowNav = item.name
            nav.forEach(val=>{
                val.icon = "icon-shang"
            })
           item.icon = "icon-shang1"
           
            switch (item.name) {
                case this.nav[0].name:
                    this.allCity = true
                    this.brand = false
                    this.Characteristic = false
                    break;
                case this.nav[1].name:
                    this.allCity = false
                    this.brand = true
                    this.Characteristic = false
                    break;
                case this.nav[2].name:
                    this.allCity = false
                    this.brand = false
                    this.Characteristic = true
                    break;
                
                default:
                    break;
            }
       }
    },
    watch: {
        cinemaTab(val){
            this.allCity = false
            this.brand = false
            this.Characteristic = false
            this.nav.forEach(val=>{
                val.icon = 'icon-shang'
            })
            this.nowNav = ''
        }
    },
    components: {Characteristic,allCity,brand}
}
</script>

<style lang="scss" scoped>
    .cinema_nav{
        position: fixed;
        top: 50px;
        left: 0;
        right: 0;
    }
    .nav_content{
        display: none;
    }
    .nav_top{
		height: 44px;
		background: #F5F5F5;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #E6E6E6;
        >div{
            margin-left: 15px;
            display: flex;
            align-items: center;
            span{
                color: #666;
                display: inline-block;
                max-width: 80px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            i{
                font-size: 12px;
		        color: #777;
            }
        }
        >input{
            width: 265px;
            height: 27px;
            border: 1px solid #E6E6E6;
            outline: 0;
            border-radius: 5px;
            margin: 0 15px 0 18px;
            padding-left: 100px;
            box-sizing: border-box;
        }
	}
    .nav_bottom{
		height: 40px;
		background: white;
        border-bottom: 1px solid #E6E6E6;
        ul{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            
            li{
                flex: 1;
                height: 20px;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                border-left: 1px solid #E6E6E6;
                color: #777;
                font-size: 13px;
                &:first-child{
                    border: none;
                }
                i{
                    font-size: 13px;
                }
                &.active{
                    color: red;
                }
            }
        }
	}
	
</style>>