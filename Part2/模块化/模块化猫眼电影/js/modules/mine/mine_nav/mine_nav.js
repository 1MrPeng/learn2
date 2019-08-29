require.config({
	paths: {
		meituan: "../js/modules/mine/meituan/meituan",	//美团
		shouji: "../js/modules/mine/shouji/shouji"	//手机
	}
})
define(["jquery", "text!../js/modules/mine/mine_nav/mine_nav.html","AT","domReady","meituan","shouji"], function(jq, html,AT,domReady,meituan,shouji){
	function initView(){
		let data = {
			li: ["美团账号登录","手机验证登录"]
		}
		let myHtml = AT.render(html,data);
		$('.mine_nav').html(myHtml);
		
		//默认
		$(".mine_nav ul li").eq(0).addClass("active");
		meituan.initView();
		$(".mine_nav ul li").click(function(){
			$(".mine_nav ul li").removeClass('active');
			$(this).addClass('active');
			
			let index = $(this).index();
			
			// 判断下标, 显示对应内容
			switch (index){
				case 0:	//美团
					meituan.initView();
					break;
				case 1:	//手机
					shouji.initView();
					break;
				default:
					break;
			}
		})
	}
	return {initView};
})