window.onload = function(){
	
	var oVideo = document.querySelector("video");
	var aBtn = document.querySelectorAll("button");
	var oInput = document.querySelector("input");
	
	for (var i = 0; i < aBtn.length; i++) {
		
		aBtn[i].index = i;
		
		aBtn[i].onclick = function(){
			
			if (aBtn[this.index == 0]) {
				
				oVideo.play();
			} else if (aBtn[this.index == 1]) {
				
				oVideo.pause();
			}  else if (aBtn[this.index == 2]) {
				
				oVideo.volume = this.value/100;
			} else if (aBtn[this.index == 3]) {
				
				oVideo.muted = !oVideo.muted;
			} else if (aBtn[this.index == 4]) {
				
				oVideo.load();
			} else if (aBtn[this.index == 5]) {
//				谷歌浏览器
				if(navigator.userAgent.indexOf("Chrome") != -1){	
						
					oVideo.webkitRequestFullScreen();
//				火狐浏览器
				}else if(navigator.userAgent.indexOf("Firefox") != -1){
					
					oVideo.mozRequestFullScreen(); 
					
				}
			} else{
				
			}
			oInput.setAttribute("max",oVideo.duration);
			var currentProcess = oInput.value;
			oVideo.currentTime = currentProcess;
		}
	}
}
