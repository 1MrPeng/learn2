window.onload = function(){
				
	var myCanvas = document.querySelector("canvas");
	var ctx = myCanvas.getContext("2d");
	var timer = null;				
	var numX = 0;
	var numY = 0;
	ctx.fillRect(numX, numY, 100, 100);
	
	timer = setInterval(function(){
		
		ctx.clearRect(0, 0, myCanvas.offsetWidth, myCanvas.offsetHeight);
		if (numX <= myCanvas.offsetWidth-100 && numY == 0) {
			numX++;
		}
		if (numY <= myCanvas.offsetHeight-100 && numX == myCanvas.offsetWidth-100) {
			numY++;
		}
		
		if (numX <= myCanvas.offsetWidth-100 && numY == myCanvas.offsetHeight-100) {
			numX--;
		}
		if (numY <= myCanvas.offsetHeight-100 && numX == 0) {
			
			numY--;
		}
		if(numX == 0 && numY==0){
			clearInterval(timer);
		}
		
		ctx.fillRect(numX, numY, 100, 100);
		
	}, 1);
}