	//获取/设置最终样式的兼容函数
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
	//第一个子节点的兼容写法
	function firstNode(obj){
		if(!obj.firstChild){
			return false;
		}
		return obj.firstElementChild || (obj.firstChild.nodeType==1?obj.firstChild:(obj.firstChild).nextSibling);
	}
	
	//最后一个子节点的兼容写法
	function lastNode(obj){
		if(!obj.lastChild){
			return false;
		}
		return obj.lastElementChild || (obj.lastChild.nodeType==1?obj.lastChild:(obj.lastChild).previousSibling);
	}
	
	//弟弟节点的兼容写法
	function nextNode(obj){
		if(!obj.nextSibling){return false;}
		return obj.nextElementSibling ||(obj.nextSibling.nodeType==1?obj.nextSibling:nextNode(obj.nextSibling));
	}
	
	//哥哥节点的兼容写法
	function previousNode(obj){
		if(!obj.previousSibling){return false;}
		return obj.previousElementSibling||(obj.previousSibling.nodeType==1?obj.previousSibling:previousNode(obj.previousSibling));
	}
	//ev兼容
	var ev = ev || window.event;
	//事件源兼容
	function target(ev){
		var target = ev.target || ev.srcElement;
	}
	
	//设置滚动高度兼容
	function setScrollY(num) {
		document.documentElement.scrollTop = document.body.scrollTop = num;
	}
	//获取滚动高度兼容
	function getScrollY() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
	//阻止默认事件兼容函数
	function stopPrevent(ev) {
		if (ev && ev.preventDefault) {
			ev.preventDefault();
		} else {	//IE浏览器
			window.event.returnValue = false;
		}			
		return false;
	}
	//取消冒泡事件兼容函数
	function stopBubble(ev){
		if(ev && ev.stopPropagation){ //标准 
			ev.stopPropagation();
		}else{	//ie
			ev.cancelBubble = true;
		}
	}
	//事件监听的兼容函数
	function bindEvent(obj,events, fn){
		if (obj.addEventListener) {
			obj.addEventListener(events, fn, false);
	   }else{	//ie低版本
			obj.attachEvent('on'+events, fn);
		}
	}

	//取消事件监听
	function deEvent(obj,events,fn) {	
		if (removeEventListener) {				
			obj.removeEventListener(events,fn,false);
		}else {	//IE版本
			obj.detachEvent("on"+events,fn);
		}
	}