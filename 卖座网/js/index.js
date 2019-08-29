window.onload = function(){
	var aImg = document.querySelectorAll('#banner_imgs>img');
	var aSpan = document.querySelectorAll('#circle>span');
	var aLi = document.querySelectorAll('#nav li');
	var aItem = document.querySelectorAll('.item');
	var oUl = document.querySelector('.hotPlaying ul');
	var oUl1 = document.querySelector('.comingsoon ul');
	
	
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
	
	//选项切换start
	for(i=0;i<aLi.length;i++){
		aLi[i].index = i;
		aLi[i].onclick = function(){
			for(j=0;j<aLi.length;j++){
				aLi[j].className = '';
				aItem[j].classList.remove('active_item');
			}
			this.className = 'active_li';
			aItem[this.index].classList.add('active_item');
		}
	}
	//选项切换end
	
	
	//正在热映数据渲染开始
	Ajax("get","https://www.easy-mock.com/mock/5cb69038c1d19650f26d7edd/example/maizuo.item1","",function(jsonData){
		var itemData = jsonData.data.films;
		// var res = [];
		// 
		// for(k=0;k<itemData.length;k++){
		// 	res.push([])
		// 	for(j=0;j<itemData[k].actors.length;j++){
		// 		res[k].push((itemData[k].actors)[j].name);
		// 	}
		// }
		// console.log(res);
		// console.log(itemData);
		for(var i in itemData){
			var each = itemData[i];
			var actorName = [];
			for(j=0;j<each.actors.length;j++){
				actorName.push(each.actors[j].name);
			}
			itemData[i].actorName = actorName.join();
			// var grade = itemData[i].grade? '<p>观众评分<span>'+itemData[i].grade+'</span></p>' : '<p></p>';
			// oUl.innerHTML += '<li><div class="item_img"><img src="'+itemData[i].poster+'" width="100%" ></div><div class="item_info"><p><span>'+itemData[i].name+'</span><span>'+itemData[i].filmType.name+'</span></p>'+grade+'<p>主演 : '+actorName.join()+'</p><p><span>上映日期：</span><span>'+timestampToTime(itemData[i].premiereAt) +'</span></p></div><div class="ticket">购票</div></li>';
			// 
		}
		console.log(itemData)
		$.get("./temp.html",function(html){
			template.defaults.imports.timestampToTime = timestampToTime;
			let myContent = template.render(html,jsonData.data);
			oUl.innerHTML = myContent;
		})
	},function(fail){
		console.log(fail);
	})
	
	//吸顶效果开始
	var nav = document.querySelector('#nav');
	var film = document.getElementsByClassName("film")[0];
	
	var oHeight = nav.getBoundingClientRect().top;		//获取nav与顶部的距离
	var bol = true;
	window.onscroll = function(){
		if(document.documentElement.scrollTop>=oHeight){	//当窗口滚动距离大于oHeights时, 将电影显示出来,将tabs设置固定定位
			film.style.display = "block";
			nav.style.cssText = "position: fixed; top: 41px; left: 0; right: 0;";
		}else{
			nav.style.position = "static";
			film.style.display = "none";
		}
		//数据懒加载开始
		if(getScrollY() > window.innerHeight){
			if(bol){
				Ajax("get","https://www.easy-mock.com/mock/5cb69038c1d19650f26d7edd/example/maizuo.item2","",function(jsonData){
					var itemData = jsonData.data.films;
					for(var i in itemData){
						var each = itemData[i];
						var actorName = [];
						for(j=0;j<each.actors.length;j++){
							actorName.push(each.actors[j].name);
						}
						var grade = itemData[i].grade? '<p>观众评分<span>'+itemData[i].grade+'</span></p>' : '<p></p>';
						oUl.innerHTML += '<li><div class="item_img"><img src="'+itemData[i].poster+'" width="100%" ></div><div class="item_info"><p><span>'+itemData[i].name+'</span><span>'+itemData[i].filmType.name+'</span></p>'+grade+'<p>主演 : '+actorName.join()+'</p><p><span>上映日期：</span><span>'+timestampToTime(itemData[i].premiereAt) +'</span></p></div><div class="ticket">购票</div></li>';
						
					}
				},function(fail){
					console.log(fail);
				})
				bol = false;
			}
			
		}
		//数据懒加载结束
	}
	//吸顶效果结束
	
	//正在热映数据渲染结束s
	
	
	//即将上映数据渲染开始
	Ajax("get","https://www.easy-mock.com/mock/5cb69038c1d19650f26d7edd/example/maizuo.comingsoon","",function(jsonData){
		var itemData = jsonData.data.films;
		for(var i in itemData){
			var each = itemData[i];
			var actorName = [];
			for(j=0;j<each.actors.length;j++){
				actorName.push(each.actors[j].name);
			}
			var grade = itemData[i].grade? '<p>观众评分<span>'+itemData[i].grade+'</span></p>' : '<p></p>';
			var isPresale = itemData[i].isPresale? '<div class="ticket">预购</div>' : '<div class="ticket" style="opacity: 0;"></div>';
			oUl1.innerHTML += '<li><div class="item_img"><img src="'+itemData[i].poster+'" width="100%" ></div><div class="item_info"><p><span>'+itemData[i].name+'</span><span>'+itemData[i].filmType.name+'</span></p>'+grade+'<p>主演 : '+actorName.join()+'</p><p><span>上映日期：</span><span>'+timestampToTime(itemData[i].premiereAt) +'</span></p></div>'+isPresale+'</li>';
			
		}
		
	},function(fail){
		console.log(fail);
	})
	
	//即将上映数据渲染结束
	
	//时间戳转日期格式
	function timestampToTime(timestamp) {
	    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	    var Y = date.getFullYear() + '-';
	    // var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
	    var M = (date.getMonth()+1);
	    // var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
	    var D = (date.getDate());
	    var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
	    var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
	    var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
	    var weekArr = ["周日","周一","周二","周三","周四","周五","周六"] 
	    var oDay = weekArr[date.getDay()];
		// return Y+M+D+h+m+s+oDay;
		return oDay+' '+M+'月'+D+'日';
    }
	function getScrollY() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
	
}
