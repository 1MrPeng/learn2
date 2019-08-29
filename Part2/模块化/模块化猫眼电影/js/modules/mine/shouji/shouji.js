define(["jquery", "text!../js/modules/mine/shouji/shouji.html","AT"], function(jq, html,AT){
	function initView(){
		let data = {
			
		}
		let myHtml = AT.render(html,data);
		$('.mine_content').html(myHtml);
	}
	return {initView}	
})