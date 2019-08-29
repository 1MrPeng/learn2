require.config({
	paths: {
		business: '../js/modules/cinema/cinema_nav/allCity/business/business',
		subway: '../js/modules/cinema/cinema_nav/allCity/subway/subway'
	}
})
define(["jquery", "text!../js/modules/cinema/cinema_nav/allCity/allCity.html","AT","business","subway"], function(jq, html,AT,business,subway){
	function initView(){
		let data = {
			nav: ["商区","地铁站"],
			li: ["全部(295)","宝安区(73)","龙岗区(63)","龙华区(41)","南山区(32)","罗湖区(20)","光明区(12)","坪山区(10)","盐田区(3)","南澳大鹏新区(1)"]
		}
		let myHtml = AT.render(html,data);
		$('.nav_content').html(myHtml);
		business.initView();
		$('.allCity>ul li').eq(0).addClass('active');
		
		$('.allCity>ul li').click(function(ev){
			ev.stopPropagation();
			$('.allCity>ul li').removeClass("active");
			$(this).addClass("active");
			switch ($(this).index()){
				case 0:
					business.initView();
					break;
				case 1:
					subway.initView();
					break;
				default:
					break;
			}
		})
		
	}
	return {initView}
})