define(["jquery", "text!../js/modules/mine/meituan/meituan.html","AT"], function(jq, html,AT){
	function initView(){
		let data = {
			
		}
		let myHtml = AT.render(html,data);
		$('.mine_content').html(myHtml);
		
		$('.meituan_input input').click(function(ev){
			ev.stopPropagation();	//取消冒泡事件
			$('.meituan_input input').css('background-color','white');
			$(this).css('background-color','#f8f8f8');
		})
		window.onclick = function(){
			$('.meituan_input input').css('background-color','white');
		}
	}
	return {initView}	
})