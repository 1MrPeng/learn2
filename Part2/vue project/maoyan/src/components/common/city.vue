<template>
    <div class="city">
        
        <mt-index-list>
            <div class="hot">
                <p>最近访问</p>
                <ul>
                    <li v-for="(item,ind) in saveCity" v-on:click="toIndex(item)" :key="ind" >{{item}}</li>
                </ul>
            </div>
            <div class="hot">
                <p>热门城市</p>
                <ul>
                    <li v-for="(item,ind) in isHot" v-on:click="toIndex(item)" :key="ind" >{{item}}</li>
                </ul>
            </div>
            <mt-index-section :index="item.pinyin.toUpperCase()" v-for="(item,index) in dealCities" :key="index">
                <mt-cell :title="each.name" v-for="(each,ind) in item.content" :key="ind" v-on:click.native="toIndex(each.name)"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import { IndexList, IndexSection } from 'mint-ui';
export default {
    name: 'city',
    data () {
        return {
            cities: null,
            allNum: [],
            dealCities: [],
            isHot: [],
            saveCity: []
        }
    },
    created() {
        this.getData()
        this.tabbarShow(false)
    },
    beforeRouteEnter (to, from, next) {
        window.path = from.path
        next()
    },
    mounted() {
        this.saveCity = window.localStorage.getItem('historyCity').split(',')
    },
    methods: {
      async getData(){
        let res = await this.$http("https://www.easy-mock.com/mock/5cb69038c1d19650f26d7edd/example/city.json")

        this.cities = res.data.data.cities;
        this.cities.forEach(val=>{
            this.allNum.push(val.pinyin.charAt(0))
        })
        this.allNum = [...new Set(this.allNum)].sort()
        var obj = {}
        this.allNum.forEach(item=>{
            obj = {pinyin: item, content: []};
            this.dealCities.push(obj) 
            this.cities.forEach(each=>{
                if(each.pinyin.charAt(0) == item){
                    obj.content.push(each)
                }
            })
        })
        this.cities.forEach(each=>{
            if(each.isHot){
                this.isHot.push(each.name)
            }
        })

      },
      toIndex(item){
        this.$router.push({path: path})
        this.city(item)
        this.tabbarShow(true)
        if(this.saveCity.indexOf(item)==-1){
            if(this.saveCity.length <3){
            this.saveCity.unshift(item)
            }else{
                this.saveCity.pop()
                this.saveCity.unshift(item)
            }
        }
        window.localStorage.setItem('historyCity', this.saveCity)
        this.saveCity = window.localStorage.getItem('historyCity').split(',')
      },
      ...mapMutations(["tabbarShow","city"])  
    },
    components: {
        IndexList,IndexSection
    }
}
</script>

<style lang="scss" scoped>
.hot{
    background-color: #F5F5F5;
    p{
        height: 30px;
        padding-left: 15px;
        line-height: 30px;
        background: #EBEBEB;
    }
    ul{
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        li{
            width: 88px;
            height: 30px;
            margin-left: 10px;
            background: white;
            border: 1px solid #ddd;
            margin-bottom: 10px;
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>