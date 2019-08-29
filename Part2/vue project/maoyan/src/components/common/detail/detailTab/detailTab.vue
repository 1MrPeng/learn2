<template>
<div>
    <div class="detailTab" ref="detailTab">
        <ul>
            <li v-for="(item,ind) in timeList" :key="ind" @click="changeTime($event,item)" ref="lis">
                {{item.time}}
            </li>
        </ul>
    </div>
    <div class="nav_bottom">
        <ul>
            <li v-for="item in nav" :key="item.name">
                {{item.name}}
                <i class="iconfont" :class="item.icon"></i>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import bus from "@/components/common/detail/bus.js"
export default {
    data () {
        return {
            timeList: [
                {time: '',timestamp: null,day: ''},
                {time: '',timestamp: null,day: ''},
                {time: '',timestamp: null,day: ''},
                {time: '',timestamp: null,day: ''},
                {time: '',timestamp: null,day: ''},
                {time: '',timestamp: null,day: ''},
                {time: '',timestamp: null,day: ''},
                {time: '',timestamp: null,day: ''},
                {time: '',timestamp: null,day: ''},
                {time: '',timestamp: null,day: ''}
            ],
            nav: [
                {name: "全城",icon: "icon-shang"},
                {name: "品牌",icon: "icon-shang"},
                {name: "特色",icon: "icon-shang"}
            ]
        }
    },
    created() {
        this.getTime()
    },
    mounted() {
        let that = this
        window.onscroll = function(){
            if(document.documentElement.scrollTop > that.$refs.detailTab.offsetTop){
                that.$refs.detailTab.style.cssText +="position: fixed;top: 50px;left:0;right:0"
            }else{
                that.$refs.detailTab.style.position = "static"
            }
        }
        this.$refs.lis[0].classList.add('active')
    },
    methods: {
        changeTime(e,item){
            for(let i=0;i<this.$refs.lis.length;i++){
                this.$refs.lis[i].classList.remove("active")
            }
            e.target.classList.add("active")
            item.timestamp = new Date().getTime()
            bus.$emit("post",{timestamp: item.timestamp,day: item.day})
        }, 
        getTime(){
            let time = new Date().getTime()
            function timestampToTime(timestamp) {
                var date = new Date(timestamp);
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) 
                var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate())
                var weekArr = ["周日","周一","周二","周三","周四","周五","周六"] 
                var oDay = weekArr[date.getDay()]
                return oDay+M+'月'+D+'日';
            }
            function timestampToDay(timestamp) {
                var date = new Date(timestamp)
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
                var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate())
                return Y+M+D;
            }
            this.timeList.forEach(val=>{
                val.time = timestampToTime(time)
                // val.timestamp = time
                val.day = timestampToDay(time)

                time += 86400000
            })
            this.timeList[0].time = '今天' +this.timeList[0].time.substring(2)
            this.timeList[1].time = '明天' +this.timeList[1].time.substring(2)
            this.timeList[2].time = '后天' +this.timeList[2].time.substring(2)
            // console.log(this.timeList)
        }
    }
}
</script>

<style lang="scss" scoped>
.detailTab{
    overflow: auto;
    background: white;
    &::-webkit-scrollbar{
        display: none;
    }
    >ul:nth-of-type(1){
        width: 1250px;
        display: flex;
        overflow: auto;
        border-bottom: 1px solid #eee;
        margin-bottom: 2px;
        li{
            width: 125px;
            height: 45px;
            text-align: center;
            line-height: 45px;
            font-size: 14px;
            color: #666;
            border-bottom: 2px solid white;
            &.active{
                border-bottom: 2px solid red;
            }
        }
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