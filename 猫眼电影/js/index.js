window.onload = function(){
	var aLi = document.querySelectorAll('#footer ul li');
	var aDiv = document.querySelectorAll('#movie,#cinema,#mine');
	//绑定footer点击切换开始
	for(i=0;i<aLi.length;i++){
		aLi[i].index = i;
		aLi[i].onclick = function(){
			for(i=0;i<aLi.length;i++){
				aLi[i].className = '';
				aDiv[i].className = '';
			}
			this.className = 'active_li';
			aDiv[this.index].className = 'active_div';
		}
	}
	//绑定footer点击切换结束
	
	//绑定电影页面nav切换开始
	var aNav= document.querySelectorAll('.nowPlaying,.commingSoon');
	var aNav_Div = document.querySelectorAll('#nowPlaying,#commingSoon')
	for(i=0;i<aNav.length;i++){
		aNav[i].index = i;
		aNav[i].onclick = function(){
			for(i=0;i<aNav.length;i++){
				aNav[i].classList.remove('active');
				aNav_Div[i].classList.remove('active_div');
			}
			this.classList.add('active');
			aNav_Div[this.index].classList.add('active_div');
		}
	}
	//绑定电影页面nav切换结束
	
	//绑定电影页面数据渲染开始
	var nowPlaying = document.querySelector('#nowPlaying');
	Ajax("get", "https://www.easy-mock.com/mock/5cb69038c1d19650f26d7edd/example/maoyan.nowPlaying1", "", function(jsonData) {
	
		var jsonData = jsonData.movieList;
		//处理图片开始
		var res = [];
		for (i = 0; i < jsonData.length; i++) {
			var dealWitn1 = jsonData[i].img.slice(0, 4) + 's' + jsonData[i].img.slice(4)
			var dealWitn2 = dealWitn1.replace(/w.h/, '128.180');
			res.push(dealWitn2);
		}
		//处理图片结束
	
		for (var i in jsonData) {
			// var beginTime = new Date(jsonData[i].rt).getTime();
			var nowTime = new Date().getTime();
			var p4, p2, p3,p1;
			if (new Date(jsonData[i].rt).getTime() > nowTime) {
				p4 = '<p>' + jsonData[i].showInfo + '</p>';
			} else {
				p4 = '<p>' + jsonData[i].showInfo + '</p>';
			}
	
			var span = new Date(jsonData[i].rt).getTime() > nowTime ?
				'<span class="ticket" style ="background: #3C9FE6">预售</span>' :
				'<span class="ticket">购票</span>';
	
			if (jsonData[i].sc) {
				if((jsonData[i].sc.toString()).indexOf('.') == -1){
					jsonData[i].sc += '.0';
				}
				p2 = '<p>观众评 <span>' + jsonData[i].sc + '</span></p>';
			} else {
				p2 = '<p><span>' + jsonData[i].wish + '</span>想看</p>'
			}
			if (jsonData[i].star) {
				p3 = '<p>主演: <span>' + jsonData[i].star + '</span></p>'
			} else {
				p3 = '<p> </p>';
			}
			if(jsonData[i].version){
				if(jsonData[i].version.substring(4)){
					p1 = '<p>'+jsonData[i].nm+' <span>'+jsonData[i].version.substring(1,3).toUpperCase()+'</span><span>'+jsonData[i].version.substring(4).toUpperCase()+'</span></p>'
					
				}else{
					p1 = '<p>'+jsonData[i].nm+' <span>'+jsonData[i].version.substring(1,3).toUpperCase()+'</span></p>'
					
				}
			}else{
				p1 = '<p>'+jsonData[i].nm+'</p>'
			}
			nowPlaying.innerHTML +=
				`
				<div class="item">
					<div class="item_left">
						<img src="${res[i]}" width="64px" >
					</div>
					<div class="item_right">
						<div class="item_msg">
							${p1}
							${p2}
							${p3}
							${p4}
						</div>
						${span}
					</div>
				</div>
			`;
		}
	
	}, function(err) {
		console.log(err);
	});
	//绑定电影页面数据渲染结束
	
	//绑定即将上映期待数据渲染开始
	var expect = document.querySelector('.expectItems>div');
	Ajax("get","https://www.easy-mock.com/mock/5cb69038c1d19650f26d7edd/example/maoyan.commingSoon.expect","",function(res){
		var jsonData = res.coming;
		for(var i in jsonData){
			var each = jsonData[i];
			expect.innerHTML +=
			`
				<div class="expect_item">
					<img src="${each.img.replace('w.h','170.230')}" width="85px" height="115px" >
					<span class="wish"><span>${each.wish}</span>人想看</span>
					<p>${each.nm}</p>
					<p>${each.comingTitle.substring(0,5)}</p>
				</div>
			`
		}
	},function(err){
		console.log(err);
	});
	
	
	//期待的item跟随鼠标移动开始
	//手指触摸开始，记录div的初始位置
	expect.addEventListener('touchstart', function(e) {
		var ev = e || window.event;
		var touch = ev.targetTouches[0];
		oL = touch.clientX - expect.offsetLeft;
		document.addEventListener("touchmove", defaultEvent, false);
	});
	
	//触摸中的，位置记录
	expect.addEventListener('touchmove', function(e) {
		var ev = e || window.event;
		var touch = ev.targetTouches[0];
		var oLeft = touch.clientX - oL;
		var expectItems = expect.querySelectorAll('.expect_item');
		var length = expectItems.length - 3.4;
		if(oLeft < -(expectItems[0].offsetWidth*length)){
			oLeft = -expectItems[0].offsetWidth*length;
		}else if(oLeft > 0){
			oLeft = 0
		}
		expect.style.left = oLeft + 'px';
	},{passive: false });
	//触摸结束时的处理
	expect.addEventListener('touchend', function() {
		document.removeEventListener("touchmove", defaultEvent);
	},{passive: false });
	//期待的item跟随鼠标移动结束
	//绑定即将上映期待数据渲染结束
	
	function css(ele,attr,val){
		if(!val){
			if(window.getComputedStyle){
				return getComputedStyle(ele)[attr];
			}else{
				return ele.currentStyle[attr]
			}
			
		}else{
			ele.style[attr] = val;
		}
	}
	//阻止默认事件
	function defaultEvent(e) {
		e.preventDefault();
	}
	
	
	//绑定即将上映数据渲染开始
	var commingSoon_list = document.querySelector('.date');
	Ajax("get", "https://www.easy-mock.com/mock/5cb69038c1d19650f26d7edd/example/maoyan.commingSoon.items", "", function(jsonData) {
		
		var jsonData = jsonData.coming;
		console.log(jsonData);
		//处理图片开始
		var res = [];
		for (i = 0; i < jsonData.length; i++) {
			var dealWitn1 = jsonData[i].img.slice(0, 4) + 's' + jsonData[i].img.slice(4)
			var dealWitn2 = dealWitn1.replace(/w.h/, '128.180');
			res.push(dealWitn2);
		}
		//处理图片结束
		var res2 = [];
		var j=0;
		for(i=0;i<jsonData.length;i++){
			res2.push(jsonData[0]);
			
			
			var j = i+1;
			if(j>9){
				j=9
			}
			if(jsonData[j].rt == jsonData[i].rt){
				res2.push(jsonData[j]);
			}
			// console.log(res2);
			
		}
		console.log(res2);
		for (var i in jsonData) {
			
			commingSoon_list.innerHTML +=
				`
				<div class="c_item">
					<div class="c_item_left">
						<img src="https://p0.meituan.net/128.180/moviemachine/7b9b0725ab5feae642e1fbba9fbb90fe3702078.jpg" width="64px">
					</div>
					<div class="c_item_right">
						<div class="c_item_msg">
							<p>狮子王<span>3D</span><span>IMAX</span></p>
							<p><span>190730</span>人想看</p>
							<p>主演: <span>唐纳德.格洛弗,塞斯.罗根,詹...</span></p>
							<p>2019-07-12上映</p>
						</div>
						<span class="c_ticket">预售</span>
					</div>
				</div>
			`;
		}
	
	}, function(err) {
		console.log(err);
	});
}