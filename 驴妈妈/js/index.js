window.onload = function(){
	var aImg = document.querySelectorAll('#banner_imgs>img');
	var aSpan = document.querySelectorAll('#circle>span');
	var timer;
	//获取banner图片src渲染到页面start
	Ajax("get","https://www.easy-mock.com/mock/5cb69038c1d19650f26d7edd/example/maizuo.banner","",function(jsonData){
		var picData = jsonData.data;
		for(var i in picData){
			aImg[i].src = picData[i].imgUrl;	
		}
	},function(fail){
		console.log(fail);
	})
	//end
	
	//今日推荐banner自动轮播start
	var a=0;
	timer = setInterval(function(){
		if(a == aImg.length-1){
			a=0;
		}else{
			a++;
		}
		for(j=0;j<aImg.length;j++){
			aImg[j].className='';
			aSpan[j].className='';
		}
		aImg[a].className ="active_img";
		aSpan[a].className="active_span";
	},2000);
	//end
	
	//当季热门城市滑动效果开始
	var expect = document.querySelector('.expectItems>ul');
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
		var expectItems = expect.querySelectorAll('li');
		var length = expectItems.length - 3.1;
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
	//期待的item跟随鼠标移动开始
	
	//阻止默认事件
	function defaultEvent(e) {
		e.preventDefault();
	}
	//当季热门城市滑动效果结束
	
	//热门活动数据渲染开始
	Ajax("get","https://www.easy-mock.com/mock/5ba06ec82ee5a7654dc13dd7/example/hotActivity","",function(jsonData){
		var jsonData = jsonData.list;
		var remenData = document.querySelector('.remenData');
		for(var i in jsonData){
			remenData.innerHTML +=`
				<div>
					<img src="${jsonData[i].img}">
				</div>
			`
		}
	},function(fail){
		console.log(fail);
	})
	//热门活动数据渲染结束
	
	//猜你喜欢选项切换开始
	var aLi = document.querySelectorAll('.nav li');
	var navDiv = document.querySelectorAll('.nav_div');
	for(i=0;i<aLi.length;i++){
		aLi[i].index = i;
		aLi[i].onclick = function(){
			for(i=0;i<aLi.length;i++){
				aLi[i].classList.remove('active');
				navDiv[i].classList.remove('active');
			}
			this.classList.add('active');
			navDiv[this.index].classList.add('active');
		}
	}
	//猜你喜欢选项切换结束
	
	//猜你喜欢数据渲染开始
	Ajax("get","https://www.easy-mock.com/mock/5ba06ec82ee5a7654dc13dd7/example/guessLike","",function(jsonData){
		var jsonData = jsonData.datas;
		var ticket = document.querySelector('.ticket');
		for(var i in jsonData){
			var each = jsonData[i];
			ticket.innerHTML +=`
				<div class="ticket_item">
					<img src="${each.images}" height='115px' >
					<p>${each.name}</p>
					<span>驴悦亲子</span>
					<div>
						<p><span>￥${each.price}</span>起</p>
						<p>${each.commentGood}满意</p>
					</div>
				</div>
			`
		}
		
		
	},function(fail){
		console.log(fail);
	})
	
	//猜你喜欢数据渲染结束
}