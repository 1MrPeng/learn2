require.config({
	paths: {
		nowplaying: "../js/modules/film/nowplaying/nowplaying",	//正在热映
		comingsoon: "../js/modules/film/comingsoon/comingsoon",	//即将上映
	}
})

define(["jquery", "text!../js/modules/film/tabs/tabs.html","AT","domReady","nowplaying","comingsoon"], function(jq, html,AT,domReady,nowplaying,comingsoon){
	function initView(){
		let data = {
			city: "深圳",
			list: ["正在热映", "即将上映"],
			icon1: "icon-shang",
			icon2: "icon-searchicon"
		}
		let myhtml = AT.render(html, data);
		$("#tabs").html(myhtml);
		
		// 默认样式
		$("#tabs li").eq(0).addClass("active");
		nowplaying.initView();
		
		// 点击事件
		$("#tabs li").click(function(){
			// 重置样式
			$("#tabs li").removeClass("active");
			// 激活样式
			$(this).addClass("active");
			// 获取点击对应的下标
			let index = $(this).index();
			
			// 判断下标, 显示对应内容
			switch (index){
				case 0:	//正在热映
					nowplaying.initView();
					break;
				case 1:	//即将上映
					comingsoon.initView();
					break;
				default:
					break;
			}
		})
	}
	return {initView};
})