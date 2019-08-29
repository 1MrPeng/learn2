require.config({
	paths: {
		mine_nav: '../js/modules/mine/mine_nav/mine_nav'
	}
})
define(["jquery", "text!../js/modules/mine/mine.html","AT","mine_nav"], function(jq, html,AT,mine_nav){
	function initView(){
		let data = {
			title: "猫眼电影",
			icon: 'icon-fenxiang'
		}
		let myhtml = AT.render(html, data);
		$("#container").html(myhtml);	
		mine_nav.initView()	//显示mine_nav
	}
	// return {initView: initView}	以对象形式return, 以initView为key, 对应的函数名为value
	return {initView}	//对象的简写方式
})