//登录的js代码
window.onload = function(){

	//	获取元素
	var oUsername = document.querySelector('input[name="username"]');
	var oPasswowrd = document.querySelector('input[name="password"]');
	var oBtn = document.querySelector('[type="submit"]');
	
	//创建node服务器链接
	var  loginServer = new WebSocket('ws://127.0.0.1:8081');
	// 2.打开连接
	loginServer.onopen = function(){
		console.log("连接已建立");
	}
	
	//关闭连接
	loginServer.onclose = function(){
		console.log('链接已关闭')
	}
	
	//接受服务的的信息
	loginServer.onmessage = function(ev){
		console.log(ev.data);
		//响应处理
		try{
			var result = JSON.parse(ev.data);
			if(result.index == '1212'){
				if(result.status == 200){
					//登录成功,跳转的聊天页面
					console.log(result.userId);
					if(oUsername.value.trim() == result.username){
						window.location.href = 'sayPage.html?userId='+result.userId;
					}
				}else{
					alert('用户名或者密码错误！');
				}
			}
			
		}catch(e){
			
		}
		
		
	}

	//实现登录功能
	oBtn.onclick = function(){
		//得到用户名和密码
		var username = oUsername.value.trim();
		var password = oPasswowrd.value.trim();
		if(!username || !password){
			//提示输入用户名或者密码
			alert('请输入用户名或者密码!');
			return ;
		}
		//向服务器发送请求登录
		var postData = {"index":'1212',"username":username,"password":password};
		
		loginServer.send(JSON.stringify(postData));
		
		
	}
	
	
	
}
