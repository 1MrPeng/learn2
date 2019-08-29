<template>
    <div>
        <ul class="businessUl1">
			<template v-if="data[0]">
				<li class="lis" v-for="(item,ind) in data[0].subItems" :key="ind" @click="cUl1(ind,item)" :class="num==ind?'active':''">
					{{item.name}}({{item.count}})
				</li>
			</template>
        </ul>
        <ul class="businessUl2">
			<template v-if="data[0] && data[0].subItems[1]">
				<li v-for="(item,ind) in data[0].subItems[num].subItems" :key="ind" @click="cUl2(item)">
					<span>√</span>
					<span>{{item.name}}</span>
					<span>{{item.count}}</span>
				</li>
			</template>
        </ul>
    </div>
</template>

<script>
import store from "@/store.js"
import {mapActions,mapMutations} from 'vuex'
export default {
    name: "business",
    data() {
        return {
            num: 0,
            data: []
        }
    },
    created() {
        this.getData()
	},
	mounted () {
		// if(this.$refs){
		// 	console.log(this.$refs.li1s)
		// }
		// let li1s = document.getElementsByClassName("lis")
		// console.log(li1s)
		// li1s[0].onclick = function(){
		// 	this.changePost({districtId: -1,areaId: -1})
		// }
		// this.$refs.li1s[0].onclick = function(){
		// 	this.changePost({districtId: -1,areaId: -1})
		// }
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
		},
		cUl1(ind,item){
			this.num = ind
			console.log(item.id)
			this.changePost({districtId: item.id})
		},
		cUl2(item){
			console.log(item.id)
			this.changePost({districtId: item.id})
			this.storeGetData()
			this.changeCinemaTab()
			this.$emit('aa',item.name)
		},
		...mapMutations(['changePost','changeCinemaTab']),
		...mapActions({
			storeGetData: 'getData'
		})
    },
}
</script>

<style lang="scss" scoped>
    div{
        display: flex;
        height: 400px;
    }
    .businessUl1{
		overflow: auto;
		margin-top: 2px;
	}
	.businessUl1::-webkit-scrollbar{
		display: none;
	}
	.businessUl1 li{
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
	.businessUl1 li.active{
		background: #F5F5F5;
	}
	.businessUl2{
		height: 400px;
		background: #F5F5F5;
		flex: 1;
		margin-top: 2px;
	}
    .businessUl2 li span:nth-of-type(1){
		color: red;
		opacity: 0;
	}
	.businessUl2{
		padding: 10px 25px 10px 15px;
		overflow: auto;
	}
	.businessUl2 li{
		height: 45px;
		display: flex;
		align-items: center;
	}
	.businessUl2 li span{
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.businessUl2 li span:nth-of-type(2){
		flex: 1;
		font-size: 14px;
		display: flex;
		justify-content: flex-start;
		margin-left: 5px;
	}
	.businessUl2 li span:nth-of-type(3){
		font-size: 12px;
	}
</style>