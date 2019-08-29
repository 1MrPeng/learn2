<template>
    <div class="Characteristic">
        <div class="Charact_content">
        <div class="service">
            <p>特色功能</p>
            <div>
                <template v-if="data[1]">
                    <span v-for="item in data[1].subItems" :key="item.id">
                        {{item.name}}
                    </span>
                </template>
                
            </div>
        </div>
        <div class="service_ting">
            <p>特殊厅</p>
            <div>
                <template v-if="data[0]">
                    <span v-for="item in data[0].subItems" :key="item.id">
                        {{item.name}}
                    </span>
                </template>
            </div>
        </div>
    </div>
    <div class="Charact_footer">
        <button type="button">重置</button>
        <button type="button">确定</button>
    </div>
    </div>
</template>

<script>
export default {
    name: "Characteristic",
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
            this.data = [res.data.hallType,res.data.service]
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
        background: white;
    }
    .Charact_content{
		height: 270px;
		color: #777;
		overflow: auto;
	}
	.Charact_content::-webkit-scrollbar{
		display: none;
	}
	.Charact_footer{
		border-top: 1px solid #ddd;
		height: 61px;
		background: #FAFAFA;
		display: flex;
		justify-content: space-between;
		padding: 0 10px;
		align-items: center;
	}
	.Charact_footer button{
		width: 76px;
		height: 34px;
		border: none;
		outline: none;
		border-radius: 5px;
		font-size: 14px;
	}
	.Charact_footer button:nth-of-type(1){
		border: 1px solid #eee;
		background: none;
		color: #777;
	}
	.Charact_footer button:nth-of-type(2){
		background: #F03D37;
		color: #fff;
	}
	.service{
		margin: 15px 0 15px 10px;
	}
	.service p,.service_ting p{
		height: 20px;
	}
	.service div,.service_ting div{
		margin-top: 10px;
		height: 48px;
	}
	.service>div>span,.service_ting>div>span{
		display: inline-block;
		box-sizing: border-box;
		border-radius: 5px;
		width: 69px;
		height: 38px;
		padding: 3px;
		border: 1px solid #D6D6D6;
		font-size: 12px;
		line-height: 30px;
		text-align: center;
		margin: 0 5px 5px 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.service_ting{
		margin: 0 0 10px 10px;
	}
	.service_ting>div>span.active,.service>div>span.active{
		background: #FCF0F0;
		border-color: #F03D37;
		color: #F03D37;
	}
</style>