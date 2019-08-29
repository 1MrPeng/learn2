var ws = require("nodejs-websocket");
var user = 0;   //用户初始化人数为0
var port = 4000;

var server = ws.createServer(function (conn){ //创建服务（一旦有人连接就触发）
    console.log("New connection");
    user++;
    conn.nickname = "user"+user;    //声明用户昵称
    broadcast("tips: "+conn.nickname+" come in");   //xxx进入聊天室
    conn.on("text",function(str){   //str指的是当前接收到的消息
        //对接收到的消息进行过滤(避免xss攻击)
        var val = str.replace(/<[^>]+>|&[^>]+;/g,"").trim();
        if(val == ""){
            broadcast(conn.nickname+" say: ***");
        }else{
            console.log("Received "+val);
            broadcast("<span>"+conn.nickname+": </span><span>"+val+"</span>");

        }
    })
    conn.on("close",function(code,reason){//当用户关闭连接是触发
        console.log("Connection close");
        broadcast("tips: "+conn.nickname+" left");
        user--;
    })
    conn.on("error",function(err){//当连接发生错误时
        console.log("handdle error");
        console.log(err);
    })

}).listen(port);
console.log("Websocket server listening on port "+ port);

function broadcast(str){    //广播(发送消息到客户端)
    server.connections.forEach(function(connection){
        connection.sendText(str);
    })
}