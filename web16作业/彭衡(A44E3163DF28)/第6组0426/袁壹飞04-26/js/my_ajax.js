//ajax的封装
;(function(){
	//定义一个ajax的对象
	var oAjax = {
		myAjax: function(obj){
			//封装ajax
			if(obj){
				//创建对象
				var oRequest = null;
				try{
					oRequest = new XMLHttpRequest();
				}catch(e){
					oRequest = new ActiveXObject('Microsoft.XMLHTTP');
				}
				//打开请求地址
				oRequest.open(obj.type,obj.url);
				//判断发送的是什么请求
				if((obj.type).toLocaleLowerCase() == 'post'){
					//设置请求头
					oRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
				}
				
				//发送请求
				obj.data?oRequest.send(obj.data):oRequest.send();
				//监听响应状态
				oRequest.onreadystatechange = function(){
					if(oRequest.readyState == 4&& oRequest.status == 200){
						//响应成功,回调
						var result;
						if((obj.dataType).toLocaleLowerCase() == 'json'){
							//响应json数据
							result = JSON.parse(oRequest.responseText);
						}else{
							//响应字符串数据
							result = oRequest.responseText;
						}
						obj.success(result);
					}else{
						//失败回调
						obj.error(oRequest.statusText);
					}
				}
				
			}
		}
	}
	
	//把ajax的封装方法放到全局对象中
	window.$ = oAjax;
})()