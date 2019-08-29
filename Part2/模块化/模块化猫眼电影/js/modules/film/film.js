require.config({
	paths: {
		tabs: "../js/modules/film/tabs/tabs"
	}
})
define(["jquery", "text!../js/modules/film/film.html","AT","tabs"], function(jq, html,AT,tabs){
	function initView(){
		let data = {
			title: "猫眼电影"
		}
		let myhtml = AT.render(html, data);
		$("#container").html(myhtml);	
		tabs.initView();	//显示tabs
	}
	// return {initView: initView}	以对象形式return, 以initView为key, 对应的函数名为value
	return {initView}	//对象的简写方式
})