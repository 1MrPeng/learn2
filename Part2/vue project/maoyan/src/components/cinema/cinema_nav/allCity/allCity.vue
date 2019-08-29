<template>
    <div class="allCity">
        <ul>
            <li :class="nowName==item.name?'active':''" v-for="item in list" :key="item.name" @click="allCityName(item)">
                {{item.name}}
            </li>
        </ul>
        <div>
            <keep-alive>
                <business v-if="business" @aa="receive" />
                <subway v-if="subway" />
            </keep-alive>
        </div>
    </div>
    
</template>

<script>
import business from "@/components/cinema/cinema_nav/allCity/business/business.vue"
import subway from "@/components/cinema/cinema_nav/allCity/subway/subway.vue"

export default {
    name: "allCity",
    data() {
        return {
            list:[
                {name: "商区"},
                {name: "地铁站"}
            ],
            business: true,
            subway: false,
            nowName: "商区"
        }
    },
    created() {

    },
    methods: {
        allCityName(item){
            this.nowName = item.name
        },
        receive(val){
            this.$emit('bb',val)
        }
    },
    watch: {
        nowName(val){
            if(val == "地铁站"){
                this.subway = true
                this.business = false
            }else{
                this.subway = false
                this.business = true
            }
        }
    },
    components: {
        business,subway
    }
}
</script>

<style lang="scss" scoped>
    .allCity{
        background: white;
        min-height: 300px;
        padding-right: 10px;
		width: 100%;
    }
	.allCity>ul{
		display: flex;
		height: 44px;
		justify-content: space-between;
		align-items: center;
	}
	.allCity>ul li{
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		height: 100%;
	}
	.allCity>ul>li.active{
		color: #F03D37;
		border-bottom: 2px solid #F03D37;
	}
</style>