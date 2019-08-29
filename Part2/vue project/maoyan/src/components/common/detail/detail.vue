<template>
    <div class="detail">
        <header-title :title="data.nm" :isBack="isBack"></header-title>
        <template v-if="data.img">
        <div class="detailMovie">
            
                <img :src='data.img.replace("w.h","128.180")' alt="">
                <div>
                    <p>{{data.nm}}</p>
                    <p>{{data.enm}}</p>
                    <span>{{data.wish}}人想看</span>
                    <p>
                        <span>{{data.cat}}</span>
                        <span>{{data.version.substring(1,3).toUpperCase()}}</span>
                        <span>{{data.version.substring(4,8).toUpperCase()}}</span>
                    </p>
                    <p>{{data.src}}/{{data.episodeDur}}分钟</p>
                    <p>{{data.pubDesc}}</p>
                </div>
            
            
        </div>
        </template>
        <detailTab />
        <detailContent :id="id" />
    </div>
</template>

<script>
import headerTitle from '@/components/common/headerTitle.vue'
import detailTab from '@/components/common/detail/detailTab/detailTab.vue'
import detailContent from '@/components/common/detail/detailContent/detailContent.vue'

export default {
    name: "detail",
    data () {
        return {
            isBack: true,
            data: [],
            id: this.$route.params.id
        }
    },
    created() {
        this.title = this.$route.params.name
        this.getData(this.$route.params.id)

    },
    mounted() {
        // console.log()
    },
    methods: {
        async getData(id){
            let res = await this.$http("/ajax/detailmovie?movieId="+id)
            this.data = res.data.detailMovie
            // console.log(this.data)
            let time = new Date().getTime()
            let res1 = await this.$http.post("/ajax/movie?forceUpdate="+time)
            // console.log(res1)
        }
    },
    components: {
        headerTitle,detailTab,detailContent
    }
}
</script>

<style lang="scss" scoped>
.detail{
    overflow: auto;
}
.detailMovie{
    margin-top: 50px;
    padding: 19px 30px 19px 15px;
    height: 188px;
    background: #6E635D;
    box-sizing: border-box;
    display: flex;
    img{
        width: 110px;
        height: 150px;
        margin-right: 10px;
    }
    div{
        >span{
            font-size: 14px;
            margin-top: 11px;
            color: #fc0;
            font-weight: bold;
        }
        p{
            max-width: 207px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: white;

            &:first-child{
                font-size: 20px;
                font-weight: bold;
            }
            &:nth-of-type(2){
                font-size: 12px;
                margin-top: 10px;
                margin-bottom: 11px;
            }
            
            &:nth-of-type(3){
                font-size: 12px;
                margin-bottom: 9px;
                height: 17px;
                span:nth-of-type(1){
                    margin-right: 3px;
                }
                span:nth-of-type(2){
                    // margin-right: 3px;
                    border: 1px solid #ccc;
                }
            }
            &:nth-of-type(4){
                font-size: 12px;
                margin-bottom: 8px;
            }
            &:nth-of-type(5){
                font-size: 12px;
            }
        }
    }
}
</style>>