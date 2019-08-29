<template>
    <div class="commingSoon">
        <div id="film_content">
            <div id="expect">
                <p>近期最受期待</p>
                <ul ref="expectUl">
                    <li v-for="(val,ind) in coming" :key="ind">
                        <div>
                            <img :src="val.img.replace('w.h','170.230')" alt="">
                            <p>{{val.wish}}人想看</p>
                        </div>
                        <div>
                            <p>{{val.nm}}</p>
                            <p>{{val.comingTitle.split(" ")[0]}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="main-content">
                <template v-for="(one,ind) in commingsoon">
                    <p :key="one.id">
                        {{one.title}}
                    </p>
                    <ul :key="ind">
                        <li v-for="val in one.content" :key="val.nm">
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
                                        {{val.rt}}上映
                                    </p>
                                </li>
                                <li>
                                    <span v-if="val.showst==3" class="onsale">购票</span>
                                    <span v-else-if="val.showst==1" class="wish">想看</span>
                                    <span v-else-if="val.showst==4" class="presale">预售</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'commingSoon',
    data() {
        return {
            coming: [],
            commingsoon: [],
            commingsoonData: [],
            movieIds: []
        }
    },
    created() {
        this.getData()
    },
    mounted() {
        let that = this
        let movieId = 0
        let offset = 0
        this.$refs.expectUl.onscroll = function(){
            if(that.$refs.expectUl.scrollLeft == that.$refs.expectUl.scrollWidth-330){
                offset+=10
                that.$http.get("/ajax/mostExpected?ci=30&limit=10&offset="+offset+"&token=").then(res=>{
                    that.coming = that.coming.concat(res.data.coming)
                })
            }
        }
        window.onscroll = function(){   //  滚动获取更多数据
            if(document.documentElement.scrollHeight == document.documentElement.scrollTop+document.documentElement.clientHeight){
                if(that.movieIds.length != 10){
                    movieId =  that.movieIds.splice(10,10).join(",")
                    that.$http.get("/ajax/moreComingList?ci=30&token=&limit=10&movieIds="+movieId).then(res=>{
                        let arr = res.data.coming
                        let obj = {};
                        let titles = [];    //所有不重复的comingTitle
                        let myobj = [];     //存放整理好数据的数组
                        arr.forEach(item=>{
                            let title = item.comingTitle;
                            titles.push(title);
                            if(obj[title]){
                                obj[title].push(item);
                            }else{
                                obj[title] = [item]
                            }
                        })
                        let totalTitle = [...new Set(titles)];
                        totalTitle.forEach(one=>{
                            myobj.push({"title": one, "content": obj[one]})
                        })
                        if(that.commingsoon[that.commingsoon.length-1].title == myobj[0].title){
                            myobj[0].content.forEach(item=>{
                                that.commingsoon[that.commingsoon.length-1].content.push(item)
                            })
                            myobj.shift()   //删除第一个元素，会改变原数组
                            that.commingsoon = that.commingsoon.concat(myobj)
                        }else{
                            that.commingsoon = that.commingsoon.concat(myobj)
                        }
                    })
                }
            }
        }
    },
    methods: {
        async getData(){
            let res = await this.$http("/ajax/mostExpected?ci=30&limit=10&offset=0&token=")
            let res2 = await this.$http("/ajax/comingList?ci=30&token=&limit=10")

            this.coming = res.data.coming
            let arr = res2.data.coming
            let obj = {};
            let titles = [];    //所有不重复的comingTitle
            let myobj = [];     //存放整理好数据的数组
            arr.forEach(item=>{
                let title = item.comingTitle;
                titles.push(title);
                if(obj[title]){
                    obj[title].push(item);
                }else{
                    obj[title] = [item]
                }
            })
            let totalTitle = [...new Set(titles)];
            totalTitle.forEach(one=>{
                myobj.push({"title": one, "content": obj[one]})
            })
            this.commingsoon = myobj;   //归类好的数据
            
            this.movieIds = res2.data.movieIds
        }
    }
}
</script>

<style lang="scss" scoped>
.commingSoon{
    margin-top: 94.5px;
    margin-bottom: 49px;
    #film_content{
        padding-right: 15px;
        #expect{
            padding-bottom: 20px;
            font-size: 0.875rem;
            border-bottom: 10px solid #F5F5F5;
            
            >p{
                margin-left: 15px;
                height: 40px;
                line-height: 40px;
                color: #333;
            }
            >ul{
                height: 161px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                overflow-x: auto;
                margin: 0 15px;
                &::-webkit-scrollbar{
                    display: none;
                }
                li{
                    margin-right: 10px;
                    >div{
                        font-size: 0.75rem;
                        position: relative;
                        &:first-child{
                            p{
                                position: absolute;
                                bottom: 3px;
                                color: #faaf00;
                                font-weight: bold;
                                text-align: center;
                                background: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,.2));
                            }
                        }
                        &:nth-of-type(2){
                            p:nth-child(1){
                                font-weight: bold;
                                margin: 5px 0;
                                font-size: 13px;
                            }
                            p:nth-child(2){
                                color: #999;
                            }
                        }
                    }
                }
                img{
                    width: 85px;
                    height: 115px;
                }
                p{
                    width: 85px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
}

#main-content{
    padding: 15px 0 0 15px;
    >p{
        font-size: 0.875rem;
        color: #333;
    }
    >ul{
        margin: 10px 0;
        >li{
            display: flex;
            align-items: center;
        }
    }
}
.left{
    width: 65px;
    height: 100%;
    img{
        width: 65px;
        height: 90px;
    }
}
.right{
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    border-bottom: 1px solid #EBEBEB;
    padding: 15px 0;
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
                    }
                    &:nth-child(2){
                        border: 1px solid lightblue;
                        color: lightblue;
                        padding: 0 2px;
                    }
                    &:nth-of-type(1).preShow{
                        background: #faaf00;
                    }
                }
            }
        }
        >p:nth-child(2){
            span{
                color: #faaf00;
                font-weight: bold;
            }
        }
        >p:nth-child(3),>p:nth-child(4){
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
        .wish{
            background: #faaf00;
        }
    }
}
</style>>