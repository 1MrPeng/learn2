
window.onload = function(){
	
	//得到登录的用户id
	 var userId = window.location.href.substr(window.location.href.indexOf('=')+1);
	 var friendId = document.getElementById('friendId');
	 var oFriendName = document.getElementsByClassName('username_span')[0];
	 var oFriendTopImg = document.querySelector('.img_top>img');
     var look_box = document.getElementsByClassName('look_box')[0];
     var look_span = document.getElementsByClassName('look_span')[0];
     var main_box = document.getElementById('main_box');
     var content_box = document.getElementsByClassName('say_content')[0];
     var input_msg = document.getElementsByClassName('input_msg')[0];
     var sendBtn = document.getElementsByTagName('button')[0];
      
      
  // 得到所有的表情包
    var face_img = document.querySelectorAll('.look_box img');
	 
	 //创建链接
	 var userServer = new WebSocket('ws://127.0.0.1:8081');
	 
	 	// 2.打开连接
	userServer.onopen = function(){
		 //判断是否是合法的用户
		if(userId){
			//请求用户信息
			var postData = JSON.stringify({'index':'2222','userId':userId});
			console.log(postData)
		
			userServer.send(postData);
			
		
		}else{
			//非法用户,跳转到登录页面
			alert('非法用户，请登录')
			window.location.href = 'loginPage.html';
			
		}
	}
	
	//关闭连接
	userServer.onclose = function(){
		console.log('链接已关闭')
	}
		
	 //监听服务器的相应
	 userServer.onmessage = function(ev){
	 	console.log(ev.data);
	 	//响应处理
		try{
			var result = JSON.parse(ev.data);
			//显示朋友的基本信息
			if(result.index == '2222'){
				if(result.status == 200){
					//合法用户,得到响应的数据
					console.log(result)
					if(userId == result.userId){
						friendId.value = result.friendId;
						//显示好友的名称
						oFriendName.innerHTML = result.friendName;
						oFriendTopImg.src = 'img/'+result.friendId+'.jpg'
					}
					
				}else{
					//非法用户,跳转到登录页面
					alert('非法用户，请登录')
					window.location.href = 'loginPage.html';
		
				}
			}
			
			
			//实现发送表情包功能
			if(result.index == '3333' ||  result.index == '4444'){
				if(result.status == 200){
					
					console.log(result)
					var className ;
	                var span;
	                if(result.userId == userId){
	                    className = 'centont_right';   
	                     span = '<span style="background-image: url(img/'+result.userId+'.jpg);"></span>';
	                }else{
	                    className = 'centont_left';  
	                    span = '<span style="background-image: url(img/'+friendId.value+'.jpg);"></span>';  
	                }
					
	              
	               	 var content = '<p class="'+className+'">'+span;
	               	 if(result.index == '3333'){
	               	 	//发送的是表情包
	               	 	content +=  '<span>'+'<img src="'+result.msg+'" width="30px">'+'</span> </p>';
	               	 }else{
	               	 	//发送的是文字信息
	               	 	content += '<span>'+result.msg+'</span> </p>';
	               	 	
	               	 }
	                               
	              	  content_box.innerHTML += content;
	                    // 设置滚动条的位置
	                  main_box.scrollTop = main_box.scrollHeight;
	      
	            }
					
			}
			
		}catch(e){
			console.log(e);
		}
	 	
	 }
	 
         //展现表情包
        var look_state = false;
        look_span.onclick = function(){
            look_state = !look_state;
           
            if(look_state){
                // 切换图标iconfont look_span icon-biaoqing
                look_span.className = 'iconfont look_span icon-jianpan'
            //   显示
              look_box.style.display = 'inline-block';
              main_box.style.marginBottom = '270px';
              main_box.scrollTop = main_box.scrollHeight;
            }else{
                look_span.className = 'iconfont look_span icon-biaoqing'
                // 隐藏
                look_box.style.display = 'none';
                main_box.style.marginBottom = '70px';
                main_box.scrollTop = main_box.scrollHeight;
            }
          
        }
	  // 给每一个表情包设置点击事件
	    //定义一个标记
//      var img_top_state = false;
        for(let i = 0;i<face_img.length;i++){
            face_img[i].onclick = function(){
	            input_msg.focus();
	            
	            //发送表情
	            userServer.send(JSON.stringify({'index':'3333','userId':userId,'msg':'http://img.baidu.com/hi/tsj/'+this.id+'.gif','targerId':friendId.value}))
            }
    
        }

	//=========发送聊天信息
	     // 发送按钮的状态
	    var state = false;
	    input_msg.onkeyup = function(event){
	      
	        // 判断输入框中是否有内容
	        if(event.keyCode === 8 && input_msg.innerHTML == ""){
	          
	            changeSendBtn('buttonface','black');
	            state = false;
	        }else{
	            
	            state = true;
	        }
	        if(event.keyCode === 13){
	            //清空输入框中的内容
	            changeSendBtn('buttonface','black');
	            state = false;
	            input_msg.innerHTML= "";
	        }
	    }
	    input_msg.onkeydown = function(event){
	   
	        var msg_val = String(input_msg.innerHTML);
	       
	        //判断输入框是否有内容
	        if(msg_val.trim() === ''){
	            //改变按钮的颜色
	            changeSendBtn('buttonface','black');
	            state = false;
	        }else{
	            //改变按钮的颜色
	              changeSendBtn('green','white');
	              state = true;
	        }
	        // 按回车也可以发送消息
	        if( event.keyCode === 13 && state){
	            //发送消息
	            doSendMsg();
	        }
	    }
	    
        // 点击发送功能
        sendBtn.onclick = doSendMsg;
	    
	       //具体的发送消息的功能方法
        function doSendMsg(){
            //得到输入框中的内容
             var msg_value = String(input_msg.innerHTML);
        
            if(msg_value == ''){
            
                //改变按钮的颜色
            
                changeSendBtn('buttonface','black');
                //不能发送
                return ;
            }
            
            
            // 发送消息
            userServer.send(JSON.stringify({'index':'4444','userId':userId,'msg':msg_value,'targerId':friendId.value}))
   
    
            //清空输入框中的内容
            input_msg.innerHTML= "";
           
            //改变发送按钮
            changeSendBtn('buttonface','black');
        }
        
        //改变发送按钮的方法
        function changeSendBtn(bgColor ,font_color) {
            //改变按钮的颜色
            sendBtn.style.backgroundColor = bgColor;
            sendBtn.style.color = font_color;
        }

	
}
