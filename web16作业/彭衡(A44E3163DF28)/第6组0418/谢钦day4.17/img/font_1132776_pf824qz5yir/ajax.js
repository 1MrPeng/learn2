function ajax(method, url, data, res, fail) {

//	1.创建对象
	var xhr;
	try {
		xhr = new XMLHttpRequest(); //正常浏览器下
	} catch(err) {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}

//	2.打开对应网址(url,method)
	xhr.open("get", "https://easy-mock.com/mock/5cb691e7e3926e300638908c/example/doubang/doubang");

//	3.判断请求方式
	if(method.toLowerCase() == "post") {
//		4.设置请求头
		xhr.setRequestHeader("Content-Type", "Application/x-www-form-urlencoded");
//		5.发送请求
		xhr.send(data);
	} else {
//		5.发送请求
		xhr.send();
	}

//	6.监听响应
	xhr.onreadystatechange = function() {

//		7.判断是否响应成功
		if(xhr.readyState == 4 && xhr.status == 200) {

			var data = JSON.parse(xhr.responseText);
			res(data);	//将data当做一个参数传入第四个形参里面[成功回调函数]

		}else{
			
			fail(xhr.status);
			
		}

	}

}