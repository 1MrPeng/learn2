<template>
    <div>
        <ul class="subwayUl1">
            <template v-if="data[1]">
				<li v-for="(item,ind) in data[1].subItems" :key="ind" @click="cUl2(ind)" :class="num==ind?'active':''">
					{{item.name}}({{item.count}})
				</li>
			</template>
        </ul>
        <ul class="subwayUl2">
            <template v-if="data[1] && data[1].subItems[1]">
				<li v-for="(item,ind) in data[1].subItems[num].subItems" :key="ind">
					<span>√</span>
					<span>{{item.name}}</span>
					<span>{{item.count}}</span>
				</li>
			</template>
        </ul>
    </div>
</template>

<script>
export default {
    name: "subway",
    data () {
        return {
            num: 0,
            data: [] 
        }
    },
    created () {
        this.getData()
    },
    methods: {
        async getData(){
            let res = await this.$http("/ajax/filterCinemas?ci=30")
            //   this.aData = [res.data.district,res.data.subway]
            //   this.bData = res.data.brand
            //   this.cData = [res.data.hallType,res.data.service]
            //   console.log(this.aData)
            // store.commit('getData', res.data)
            this.data = [res.data.district,res.data.subway]
            console.log(this.data)
        },
        cUl2(ind){
            this.num = ind
        }
    },
}
</script>

<style lang="scss" scoped>
div{
    display: flex;
}
.subwayUl1{
		overflow: auto;
		margin-top: 2px;
	}
	.subwayUl1::-webkit-scrollbar{
		display: none;
	}
	.subwayUl1 li{
		height: 44px;
		width: 108px;
		color: #777;
		font-size: 14px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.subwayUl1 li.active{
		background: #F5F5F5;
	}
	.subwayUl2{
		height: 400px;
		flex: 1;
		background: #F5F5F5;
		margin-top: 2px;
	}
    .subwayUl2 li span:nth-of-type(1){
		color: red;
		opacity: 0;
	}
	.subwayUl2{
		padding: 10px 25px 10px 15px;
		overflow: auto;
	}
	.subwayUl2 li{
		height: 45px;
		display: flex;
		align-items: center;
	}
	.subwayUl2 li span{
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.subwayUl2 li span:nth-of-type(2){
		flex: 1;
		font-size: 14px;
		display: flex;
		justify-content: flex-start;
		margin-left: 5px;
	}
	.subwayUl2 li span:nth-of-type(3){
		font-size: 12px;
	}
</style>