require.config({
	paths: {
		cinema_nav: "../js/modules/cinema/cinema_nav/cinema_nav",
		cinema_content: "../js/modules/cinema/cinema_content/cinema_content",
	}
})

define(["jquery", "text!../js/modules/cinema/cinema.html","AT","cinema_nav","cinema_content"], function(jq, html,AT,cinema_nav,cinema_content){
	function initView(){
		let data = {
			title: "影院"
		}
		let myhtml = AT.render(html, data);
		$("#container").html(myhtml);	
		cinema_nav.initView();	//显示cinema_nav
		cinema_content.initView();	//显示cinema_content
	}
	// return {initView: initView}	以对象形式return, 以initView为key, 对应的函数名为value
	return {initView}	//对象的简写方式
})