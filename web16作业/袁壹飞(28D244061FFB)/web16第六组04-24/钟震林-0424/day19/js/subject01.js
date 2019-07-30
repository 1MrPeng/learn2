window.onload = function(){
	
	var myCanvas = document.querySelector("canvas");
	var oImg = document.querySelector("img");
	var aInput = document.querySelectorAll("input");
	var oBtn = document.querySelector("button");
	var oSpan = document.querySelector("span");
	
	var ctx = myCanvas.getContext("2d");
	
	myCanvas.onmousedown = function(ev){
		
		ctx.strokeStyle = aInput[0].value;
		ctx.lineWidth = aInput[1].value;
		
		var ev = ev || window.event;
		
		var MouseX = ev.pageX - myCanvas.offsetLeft;
		var MouseY = ev.pageY - myCanvas.offsetTop;
		
		ctx.beginPath();
		
		ctx.moveTo(MouseX, MouseY);
		
		document.onmousemove = function(ev){
			
			var ev = ev || window.event;
			
			var MoveX = ev.pageX - myCanvas.offsetLeft;
			var MoveY = ev .pageY - myCanvas.offsetTop;
			
			ctx.lineTo(MoveX, MoveY);
			
			ctx.stroke();
			
			myCanvas.onmouseup = function(){
				
				ctx.closePath();
				
				document.onmousemove = null;
				
				var oSrc = myCanvas.toDataURL();
				
				oImg.src = oSrc;
				
				oBtn.onclick = function(){
					
					ctx.clearRect(0, 0, myCanvas.offsetWidth, myCanvas.offsetHeight);
				}
			}
		}
	}
	
	oSpan.onmousedown = function(ev){
		
		var ev = ev || window.event;
		
		var sMouseX = ev.pageX - myCanvas.offsetLeft;
		var sMouseY = ev .pageY - myCanvas.offsetTop;
		
		oSpan.style.cssText = "top: "+sMouseY+"px; left: "+sMouseX+"px;"
		
		document.onmousemove = function(ev){
			
			var ev = ev || window.event;
			
			var sMoveX = ev.pageX - myCanvas.offsetLeft;
			var sMoveY = ev .pageY - myCanvas.offsetTop;
		
			ctx.clearRect(sMoveX, sMoveY, oSpan.offsetWidth, oSpan.offsetHeight);
		}
	}
	
}
