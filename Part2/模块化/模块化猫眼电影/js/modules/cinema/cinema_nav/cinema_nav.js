require.config({
	paths:{
		allCity: '../js/modules/cinema/cinema_nav/allCity/allCity',
		brand: '../js/modules/cinema/cinema_nav/brand/brand',
		Characteristic: '../js/modules/cinema/cinema_nav/Characteristic/Characteristic'
	}
})

define(["jquery", "text!../js/modules/cinema/cinema_nav/cinema_nav.html","AT","domReady","allCity","brand","Characteristic"], function(jq, html,AT,domReady,allCity,brand,Characteristic){
	function initView(){
		let data = {
			city: '深圳',
			icon1: "icon-shang",
			icon2: "icon-searchicon",
			nav: ["全城","品牌","特色"]
		}
		let myHtml = AT.render(html,data);
		$('.cinema_nav').html(myHtml);
		//绑定点击切换事件开始
		let qiehuan = (ind1,ind2,t)=>{
			t.children().last().toggleClass('icon-shang1');
			if(t.children().last().hasClass('icon-shang1')){
				t.css('color','red')
			}else{
				t.css('color','#777')
			}
			$('.nav_bottom ul li').children().eq(ind1).removeClass('icon-shang1');
			$('.nav_bottom ul li').children().eq(ind2).removeClass('icon-shang1');
		}
		$('.nav_bottom ul li').click(function(ev){
			ev.stopPropagation();
			$('.nav_bottom ul li').css('color','#777');
			switch ($(this).index()){
				case 0:
					allCity.initView();
					qiehuan(1,2,$(this));
					break;
				case 1:
					brand.initView()
					qiehuan(0,2,$(this));
					break;
				case 2:
					Characteristic.initView();
					qiehuan(0,1,$(this));
					break;
				default:
					break;
			}
			if($('.nav_bottom ul li').children().hasClass("icon-shang1")){
				$('.nav_content').css('display','block');
				$('#mask').css('display','block');
				$('#tabbar_mask').css('display','block');
			}else{
				$('.nav_content').css('display','none');
				$('#mask').css('display','none');
				$('#tabbar_mask').css('display','none');
			}
			//绑定切换点击事件结束
			
			if($('.nav_content').css('display') == 'block'){
				$('#header_mask').css('display','block');
			}else{
				$('#header_mask').css('display','none');
			}
			window.onclick = function(){
				$('.nav_content').css('display','none');
				$('#mask').css('display','none');
				$('#tabbar_mask').css('display','none');
				$('#header_mask').css('display','none');
				for(i=0;i<$('.nav_bottom ul li').length;i++){
					$('.nav_bottom ul li').children().eq(i).removeClass('icon-shang1');
					$('.nav_bottom ul li').css('color','#777');
				}
			}
		})
		allCity.initView();
		
	}
	return {initView};
})