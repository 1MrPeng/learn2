require.config({
	paths: {
		film: "../js/modules/film/film",
		cinema: "../js/modules/cinema/cinema",
		mine: "../js/modules/mine/mine",
	}
})

define(["jquery", "text!../js/modules/tabbar/tabbar.html","AT","film","cinema","mine"], function(jq, html,AT,film,cinema,mine){
	let data = {
		list: [
			{name: "电影", icon: "icon-dianying"},
			{name: "影院", icon: "icon-yingyuana"},
			{name: "我的", icon: "icon-wode"}
		]
	}
	let myhtml = AT.render(html, data);
	$("#tabbar").html(myhtml);
	// 默认样式
	$("#tabbar ul li").eq(0).addClass("active");
	// 默认显示电影
	film.initView();
	
	// 点击事件
	$("#tabbar ul li").click(function(){
		// 重置样式
		$("#tabbar ul li").removeClass("active");
		// 激活样式
		$(this).addClass("active");
		// 获取点击对应的下标
		let index = $(this).index();
		
		// 判断下标, 显示对应内容
		switch (index){
			case 0:	//电影
				film.initView();
				break;
			case 1:	//影院
				cinema.initView();
				break;
			case 2:	//我的
				mine.initView();
				break;
			default:
				break;
		}
	})
	
})