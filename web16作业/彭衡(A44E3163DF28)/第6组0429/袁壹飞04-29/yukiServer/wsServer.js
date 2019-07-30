var ws = require("nodejs-websocket");
var sysData = require('../js/initial_data.js');//引用初始化数据文件
var port=8081;
var user=0;

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
	user++;
	conn.nickname="user"+user;
	broadcast("tips："+conn.nickname+" comes in");
	conn.on("text", function (str) {
//		var val = str.replace(/<[^>]+>|&[^>]+;/g,"").trim();
		
		console.log(JSON.parse(str));
		var result = JSON.parse(str);
		var users = sysData.systemUsers ;
		//实现登录功能
		if(result.index == '1212'){
			//判断用户名和密码是否正确
			
			console.log(users);
			var state = false;
			for(var i = 0;i<users.length;i++){
				//判断用户名是否存在
				if(users[i].username == result.username){
					//判断密码是否正确
					if(users[i].password == result.password){
						//登录成功
						state = true;
						broadcast(JSON.stringify({'index':result.index,'msg':'登录成功','status':'200','userId':users[i].id,'username':result.username}));
					}
				}
			}
			
			if(!state){//登录失败
				broadcast(JSON.stringify({'index':result.index,'msg':'登录失败','status':'400','userId':''}));

			}
			
		}
		
		//取得当前用户的信息userId
		if(result.index == '2222'){
			var state = false;
			for(var i = 0;i<users.length;i++){
				//判断用户名是否存在
				if(users[i].id == result.userId){
					//合法用户
					state = true;
					//返回该用户的信息
//					broadcast(JSON.stringify({'status':'200','userId':users[i].id},'friendId':result[i].friendId));
					//得到当前聊天的朋友信息
					for(var j = 0;j<users.length;j++){
						//判断用户名是否存在
						if(users[j].id == users[i].friendId){
				
							//返回该用户的信息
								//得到当前聊天的朋友信息
							broadcast(JSON.stringify({'index':result.index,'status':'200','userId':users[i].id,'friendId':users[i].friendId,'friendName':users[j].name}));
						
						}
					}
				}
			}
			
			if(!state){
				//非法用户
				broadcast(JSON.stringify({'index':result.index,'status':'400','userId':''}));
						
			}3333
		}
		
		//发送聊天信息的处理
		if(result.index == '3333' || result.index == '4444'){
			
			//响应客户端
			broadcast(JSON.stringify({'index':result.index,'status':'200','userId':result.userId,'msg':result.msg,'targerId':result.targerId}))
	   
		}
		
		

	})
	conn.on("close", function (code, reason) {
		broadcast("tips："+conn.nickname+" left ");
	})
	conn.on("error", function (err) {
		console.log(err);
	})
}).listen(port);
console.log('服务成功启动，在8081端口上监听.....');

function broadcast(str){
	server.connections.forEach(function(connection){
		connection.sendText(str);
	})
}