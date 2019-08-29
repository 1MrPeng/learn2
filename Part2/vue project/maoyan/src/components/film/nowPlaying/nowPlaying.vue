<template>
    <div id="nowPlaying">
        <ul ref="touchDom">
            <li @click="toDetail(val)" v-for="val in movieList" :key="val.id">
                <div class="left">
                    <img :src="val.img.replace('w.h','128.180')" alt="">
                </div>
                <ul class="right">
                    <li>
                        <div>
                            <span v-if="val.version || val.preShow" style="max-width: 180px;">{{val.nm}}</span>
                            <span v-else style="width: 200px;">{{val.nm}}</span>
                            <p style="display: flex; align-items: center;">
                                <span v-if="val.version">{{val.version.substring(1,3).toUpperCase()}}</span>
                                    <span v-if="val.version.substr(4)">{{val.version.substr(4).toUpperCase()}}</span>
                                <span v-else-if="val.preShow" class="preShow">点映</span>
                            </p>
                        </div>
                        <p v-if="val.sc==0 && val.globalReleased">暂无评分</p>
                        <p v-else-if="val.sc==0"><span>{{val.wish}}</span>人想看</p>
                        <p v-else>观众评 <span>{{val.sc}}</span></p>
                        <p>主演: {{val.star}}</p>
                        <p>
                            {{val.showInfo}}
                        </p>
                    </li>
                    <li>
                        <span v-if="val.showst==3" class="onsale">购票</span>
                        <span v-else-if="val.showst==4" class="presale">预售</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    name: 'nowPlaying',
    data() {
        return {
            movieList: [],
            movieIds: [],
            // canScroll: true
        }
    },
    created() {   
        this.getData()  
    },
    mounted () {
        let _this = this
        window.onscroll = function(){   //  滚动获取更多数据
            if(document.documentElement.scrollHeight == document.documentElement.scrollTop+document.documentElement.clientHeight){
                if(_this.movieIds.length!=12){
                    let params =  _this.movieIds.splice(12,10).join(",")
                    _this.$http("/ajax/moreComingList?token=&movieIds="+params).then(res=>{
                        _this.movieList =  _this.movieList.concat(res.data.coming)
                    })
                }
            }
        }
		// 下拉刷新
		this.$refs.touchDom.ontouchstart = function(ev){
			let startY = ev.targetTouches[0].pageY;		//获取开始触摸的Y轴坐标
			_this.$refs.touchDom.ontouchmove = function(ev){	//绑定触摸移动事件
				let currentY = ev.targetTouches[0].pageY;	//获取移动时的当前Y轴坐标
				if(currentY > startY && currentY - startY<150){	//判断当前坐标大于起始坐标, 且距离不超过150
					_this.$refs.touchDom.style.cssText = "transform: translateY("+(currentY - startY)+"px)"	//设置样式(触摸移动的元素设置Y轴偏移)
					_this.$refs.touchDom.ontouchend = function(){	//触摸结束(手离开屏幕)
						_this.getData();	//获取数据
						_this.$refs.touchDom.style.cssText = "transform: translateY(0)"	//Y轴偏移量为0
					}
				}
			}
		} 
    },
    methods: {
        async getData(){    //请求数据
            let res = await this.$http("/ajax/movieOnInfoList?token=")
            this.movieList = res.data.movieList
            this.movieIds = res.data.movieIds
        },
        toDetail(val){  //跳转到详情页
            this.$router.push({name: "Detail",params: {id: val.id,name: val.nm}})
            this.tabbarShow(false)
        },
        ...mapMutations(['tabbarShow'])
    },
}
</script>

<style lang="scss" scoped>
#nowPlaying{
    margin-top: 94.5px;
    margin-bottom: 48.5px;
    padding: 0 15px;
    >ul{
        >li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 90px;
            padding: 15px 0;
            .left{
                width: 65px;
                height: 100%;
                img{
                    height: 100%;
                }
            }
        }
    }
}
.right{
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    li:nth-child(1){
        height: 100%;
        color: #666;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        >div:nth-child(1){
            font-size: 16px;
            display: flex;
            >span{
                margin-right: 5px;
                font-weight: bold;
                display: inline-block;
                overflow: hidden; 
                text-overflow: ellipsis; 
                white-space: nowrap;
                color: #333;
            }
            p{
                span{
                    font-size: 12px;
                    &:nth-child(1){
                        background: lightblue;
                        color: #fff;
                        border-radius: 2px; 
                        padding: 0 3px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .preShow{
                            background: #faaf00;
                        }
                    }
                    &:nth-child(2){
                        border: 1px solid lightblue;
                        color: lightblue;
                        padding: 0 2px;
                    }
                }
            }
        }
        p:nth-child(2){
            span{
                color: #faaf00;
                font-weight: bold;
            }
        }
        p:nth-child(3){
            width: 200px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
    li:nth-child(2){
        span{
            display: inline-block;
            width: 47px;
            height: 27px;
            background: #f03d37;
            border-radius: 5px;
            text-align: center;
            line-height: 27px;
            color: #fff;
            font-size: 12px;
        }
        .presale{
            background: #3c9fe6;
        }
    }
}
</style>>