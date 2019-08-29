<template>
    <div>
        <div class="meituan_input">
            <div>
                <input type="text" :placeholder="p1" />
            </div>
            <div>
                <input type="password" :placeholder="p2" />
            </div>
        </div>
        <div class="meituan_footer">
            <div>
                <input :class="color=='gray'?'gray':'red'" type="submit" value="登录" @click="submit" />
            </div>
            <div>
                <span>立即注册</span>
                <span>找回密码</span>
            </div>
            <footer>
                @猫眼电影 客服电话 ：<span>400-670-5335</span>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: "loginSubmit",
    props: {
        p1: {
            type: String,
        },
        p2: {
            type: String,
        },
        color: String
    },
    methods: {
        submit(){
            window.localStorage.setItem("login",true)
            this.$router.push(redirect)  //重定向到原来想要去的页面
        }
    }
}
</script>

<style lang="scss" scoped>
    .meituan_input{
		height: 86px;
		background: white;
		padding-left: 10px;
	}
	.meituan_input div{
		height: 43px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-right: 10px;
	}
	.meituan_input div:nth-of-type(1){
		border-bottom: 1px solid #e8e8e8;
	}
	.meituan_input div input{
		width: 100%;
		height: 30px;
		border: none;
		border-radius: 5px;
		outline: none;
	}
	.meituan_footer{
		height: 437px;
		background: #F8F8F8;
		box-sizing: border-box;
		padding: 15px 10px 0 10px;
	}
	.meituan_footer div input{
		width: 100%;
		height: 30px;
		border: none;
		color: white;
        &.red{
            background: #DF2D2D;
        }
        &.gray{
            background: #e8e8e8;
        }
	}
	.meituan_footer div:nth-of-type(2){
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		color: #FE8C00;
	}
	.meituan_footer footer{
		font-size: 14px;
		text-align: center;
		margin-top: 15px;
	}
	.meituan_footer footer span{
		color: #df2d2d;
	}
</style>