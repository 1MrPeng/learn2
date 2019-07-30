window.onload = function(){
				
	var myCanvas = document.querySelector('#mycanvas1');
	
	// 1.创建画布
	var ctx = myCanvas.getContext("2d");
	
	// 2.设置字体
	ctx.font = "80px 华文行楷";
	
	// 3.获取字体的宽度(实现文字居中)
	var txtWidth = ctx.measureText("你画我猜游戏").width;
	
	// 4.创建渐变色
	var txtColor = ctx.createLinearGradient((myCanvas.offsetWidth-txtWidth)/2,0,(myCanvas.offsetWidth-txtWidth)/2+txtWidth,0);
	
	// 5.设置渐变点
	txtColor.addColorStop(0,"yellow");
	txtColor.addColorStop(0.5,"red");
	txtColor.addColorStop(1,"lightblue");
	
	// 6.填充渐变色
	ctx.fillStyle = txtColor;
	ctx.strokeStyle = txtColor;
	
	// 7.设置阴影
	ctx.shadowOffsetX = 5;	//X轴偏移量
	ctx.shadowOffsetY = 5;	//Y轴偏移量
	ctx.shadowBlur = 10;	//高斯模糊程度
	ctx.shadowColor = "#ccc";	//阴影颜色
	
	
	// 8.填充字体("文字",x坐标,y坐标)
	// ctx.fillText("今天真热", 200, 200);
	ctx.strokeText("你画我猜游戏", (myCanvas.offsetWidth-txtWidth)/2, 80);
	
	
}