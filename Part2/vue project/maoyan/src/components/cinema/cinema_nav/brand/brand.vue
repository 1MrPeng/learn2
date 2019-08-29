<template>
    <div class="brand">
        <ul class="brandUl">
            <template v-if="data">
                <li v-for="item in data.subItems" :key="item.id">
                    {{item.name}}
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    name: "brand",
    data () {
        return {
            data: []
        }
    },
    created () {
        this.getData()
    },
    methods: {
        async getData(){
            let res = await this.$http("/ajax/filterCinemas?ci=30")
            this.data = res.data.brand
        }
    }
}
</script>

<style lang="scss" scoped>
    .brandUl{
		padding-right: 20px;
		height: 385px;
		overflow: auto;
        background: white;
	}
	.brandUl::-webkit-scrollbar{
		display: none;
	}
	.brandUl li{
        padding-left: 20px;
		border-bottom: 1px solid #EBEBE4;
		height: 44px;
		display: flex;
		align-items: center;justify-content: space-between;
		padding-right: 15px;
	}
	.brandUl li span:not(:nth-of-type(1)){
		flex: 1;
		height: 100%;
	}
	.brandUl li span:nth-of-type(1){
		width: 10px;
		margin: 10px;
		color: #F03D37;
		opacity: 0;
	}
	.brandUl li span:nth-of-type(2){
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 15px;
	}
	.brandUl li span:nth-of-type(3){
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 12px;
	}
</style>