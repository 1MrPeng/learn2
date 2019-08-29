<template>
    <div class="cinemaContent">
        <ul class="c_Ul">
            <li v-for="(item,ind) in cinemas" :key="ind">
                <div>
                    <p>{{item.nm}}</p>
                    <p><span>{{item.sellPrice}}</span>元起</p>
                </div>
                <div>
                    <p>{{item.addr}}</p>
                    <p>{{item.distance}}</p>
                </div>
                <div>
                    <span class="allowRefund" v-if="item.tag.allowRefund">退</span>
                    <span class="endorse" v-if="item.tag.endorse">改签</span>
                    <span class="snack" v-if="item.tag.snack">小吃</span>
                    <span class="vipTag" v-if="item.tag.vipTag">{{item.tag.vipTag}}</span>
                    <span class="hallType" v-for="each in item.tag.hallType" :key="each">{{each}}</span>
                </div>
                <div class="last">
                    <span>卡</span>
                    <span>{{item.promotion.cardPromotionTag}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import bus from "@/components/common/detail/bus.js"
export default {
    props: ["id"],
    name: "cinemaContent",
    data () {
        return {
            cinemas: [],
            movieId: null,
            day: null,
            offset: 0,
            limit: 20,
            districtId: -1,
            lineId: -1,
            hallType: -1,
            brandId: -1,
            serviceId: -1,
            areaId: -1,
            stationId: -1,
            item: '',
            updateShowDay: true,
            reqId: '',
            cityId: 30
        }
    },
    created() {
        
    },
    mounted () {
        bus.$on('post',res=>{
            this.reqId = res.timestamp
            this.day = res.day
            this.getData(this.day,this.reqId) 
        })
        let time = new Date().getTime()
        this.reqId = time
        function timestampToDay(timestamp) {
            var date = new Date(timestamp)
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
            var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate())
            return Y+M+D;
        }
        let day = timestampToDay(time)
        this.day = day
        this.getData(this.day,this.reqId) 
    },
    methods: {
        async getData(day,reqId){
            let that = this
            let res = await this.$http.post("/ajax/movie?forceUpdate=",{
               movieId: that._props.id,
               day: day,
               offset: that.offset,
               limit: that.limit,
               districtId: that.districtId,
               lineId: that.lineId,
               hallType: that.hallType,
               brandId: that.brandId,
               serviceId: that.serviceId,
               areaId: that.areaId,
               stationId: that.stationId,
               item: that.item,
               updateShowDay: that.updateShowDay,
               reqId: reqId,
               cityId: that.cityId
           })
           this.cinemas = res.data.cinemas
        }
    },
}
</script>

<style lang="scss" scoped>
    .c_Ul{
        margin: 0 15px;
        li{
            padding: 15px 0;
            box-sizing: border-box;
            border-bottom: 1px solid #e6e6e6;
            &:last-child{
                border-bottom: none;
            }
            div{
                display: flex;
		        margin-top: 6px;
            }
            div:nth-of-type(1){
                margin-bottom: 8px;
                p:nth-of-type(1){
                    color: #000;
                }
                p:nth-of-type(2){
                    font-size: 12px;
		            color: #F03D37;
                    span{
                         font-size: 18px;
                        color: #F03D37;
                    }
                }
            }
            div:nth-of-type(2){
                p{
                    font-size: 13px;
		            color: #666;
                    &:nth-of-type(1){
                        width: 275px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
            div:nth-of-type(3){
                span{
                    font-size: 12px;
                    height: 15px;
                    border: 1px solid;
                    margin-right: 5px;
                    padding: 0 3px;
                    &:nth-child(6){
                        display: none;
                    }
                }
            }
            div:last-child{
                font-size: 12px;
                margin-top: 8px;
            }
            .last{
                span:nth-of-type(1){
                    width: 15px;
                    height: 14px;
                    background: #57C0F8;
                    color: #eee;
                }
                span{
                    color: #999;
                    margin-right: 5px;
                }
            }
        }
    }
	.allowRefund,.endorse,.hallType{
		color: #589daf;
		border-color: #589daf;
	}
	.snack,.vipTag{
		color: #f90;
		border-color: #f90;
	}
</style>>