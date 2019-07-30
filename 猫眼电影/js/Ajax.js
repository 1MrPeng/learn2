function Ajax(method,url,data,success,fail){
	//创建对象
	var xhr;
	//捕获异常
	try{
		xhr = new XMLHttpRequest();
	}catch(e){
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//打开请求
	xhr.open(method,url)
	if(method.toLowerCase() =="post"){
		//设置请求头
		xhr.setRequestHeader("Content-Type", "Application/x-www-form-urlencoded")
		//发送请求
		xhr.send(data);
	}else{
		xhr.send();
	}
	//监听响应状态
	xhr.onreadystatechange = function(){
		//判断是否响应成功
		if(xhr.readyState == 4 && xhr.status == 200){
			var jsonData =JSON.parse(xhr.responseText);
			success(jsonData);
		}else{
			fail(xhr.status);
		}
	}
}	
	