window.onload = function() {
	
	jisuan();
	//拖拽功能开始
	var aLi = document.querySelectorAll('#shopList ul li');
	var oDiv = document.querySelector('#warp');
	
	for(i=0;i<aLi.length;i++){
		aLi[i].index = i;
		aLi[i].ondragstart = function(ev){
			var ev = ev || window.event;
			var src = this.querySelector('img').src;
			var name = this.querySelector('p:nth-of-type(1)').innerText;
			var price = this.querySelector('p:nth-of-type(3) span:nth-of-type(1)').innerText;
			var price = price.substring(0,price.length-1);
			ev.dataTransfer.setData('src',src);
			ev.dataTransfer.setData('name',name);
			ev.dataTransfer.setData('price',price);
			
			//设置光标样式(设置为允许所有效果)
			ev.dataTransfer.effectAllowed = 'all';
		}
	}
	var obj=[];
	oDiv.ondragenter = function(){
		this.ondragover = function(ev){
			var ev = ev || window.event;	//为了ondragleave,ondrop生效
			ev.preventDefault();
			
			//拖拽鼠标的样式设置鼠标样式
			ev.dataTransfer.dropEffect = 'copy';
		}
		this.ondrop = function(ev){
			var ev = ev || window.event;
			var src = ev.dataTransfer.getData('src');
			var name = ev.dataTransfer.getData('name');
			var price = ev.dataTransfer.getData('price');
			var cla = src.substring(src.length-9,src.length-4);
			
			if(obj.indexOf(name) == -1){
				this.innerHTML+=`
					<div class="item">
						<div>
							<input type="checkbox" class="checkboxs" />
						</div>
						<div>
							<img src="${src}" width="80px" >
							<p>${name}</p>
						</div>
						<div>
							<span class="price">${price}</span>元
						</div>
						<div class = '${cla}'>
							<button class="minus">-</button>
							<span class="piece">1</span>件
							<button class="plus">+</button>
						</div>
						<div>
							<input type="text" disabled="disabled" value="${price}" class="smallCount" />
						</div>
						<div>
							x
						</div>
					</div>
				`
			}else{
				var piece = this.querySelector(`.${cla} span`);
				piece.innerHTML = Number(piece.innerHTML)+1;
				var price1 = this.querySelector(`.${cla}`).nextElementSibling.firstElementChild;
				price1.value = Number(price1.value) + Number(price);
			}
			jisuan();
			obj.push(name);
		}
	}
	//拖拽功能结束
	
	function jisuan(){
		var oMinus = document.querySelectorAll(".minus"); //减号
		var oPlus = document.querySelectorAll(".plus"); //加号
		var oPiece = document.querySelectorAll(".piece"); //件数
		var oPrice = document.querySelectorAll(".price"); //单价
		var smallCount = document.querySelectorAll(".smallCount"); //小计
		var totalPiece = document.querySelector(".total_piece"); //总计
		var totalPrice = document.querySelector(".total_price"); //总价
		var checkAll = document.querySelector('#checkAll');
		var checkBox = document.querySelectorAll('.checkboxs');
		var del = document.querySelectorAll('.item div:last-child');
		
		//全选/全不选功能
		checkAll.onclick = function() {
			totalPiece.innerHTML = 0;	//总计置为0
			totalPrice.innerHTML = 0;	//总价置为0
			for (i = 0; i < checkBox.length; i++) {
				checkBox[i].checked = this.checked;
				if(this.checked){
					totalPiece.innerHTML = Number(totalPiece.innerHTML) + Number(oPiece[i].innerHTML);
					totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(smallCount[i].value);
				}else{
					totalPiece.innerHTML = 0;
					totalPrice.innerHTML = 0; //总价
				}
			}
		}
		//选项全选中,全选按钮也选中功能
		for (var i = 0; i < checkBox.length; i++) {
			checkBox[i].onchange = function() {
				var count = 0; 
				for (var j = 0; j < checkBox.length; j++) { //遍历checkBox
					if (checkBox[j].checked == true) { //如果状态为选中，count+1
						count++;
					}
					if (count == checkBox.length) { //如果被选中的个数等于checkBox的长度
						checkAll.checked = true; //全选checkbox选中
					} else {
						checkAll.checked = false; //全选checkbox不选中
					}
				}
				
			}
		}
		
		
		//加减号功能开始
		for (var i = 0; i < oPlus.length; i++) {
			oPlus[i].index = i;
			oMinus[i].index = i;
			checkBox[i].index = i;
			oPlus[i].onclick = function() {
				oPiece[this.index].innerHTML = Number(oPiece[this.index].innerHTML) + 1; //件数
				smallCount[this.index].value = Number(oPiece[this.index].innerHTML) * oPrice[this.index].innerHTML; //小计
				if(checkBox[this.index].checked){
					totalPiece.innerHTML++;
					totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(oPrice[this.index].innerHTML);
				}
				
			}
			oMinus[i].onclick = function() {
				if (oPiece[this.index].innerHTML > 0) {
					oPiece[this.index].innerHTML = Number(oPiece[this.index].innerHTML) - 1; //件数
					smallCount[this.index].value = Number(oPiece[this.index].innerHTML) * oPrice[this.index].innerHTML; //小计
					if(checkBox[this.index].checked){
						totalPiece.innerHTML--;
						totalPrice.innerHTML = Number(totalPrice.innerHTML) - Number(oPrice[this.index].innerHTML);
					}
				} else {
					alert("已经没有东西,不要减了");
				}
			}
			//input勾选/不勾选功能开始
			checkBox[i].onclick = function(){
				if(this.checked){
					totalPiece.innerHTML = Number(totalPiece.innerHTML) + Number(oPiece[this.index].innerHTML);
					totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(smallCount[this.index].value);
				}else{
					totalPiece.innerHTML = Number(totalPiece.innerHTML) - Number(oPiece[this.index].innerHTML);
					totalPrice.innerHTML = Number(totalPrice.innerHTML) - Number(smallCount[this.index].value);
				}
			}
			//input勾选/不勾选功能结束
		}
		//加减号功能结束
		
		//绑定删除功能
		for(i=0;i<del.length;i++){
			del[i].index = i;
			del[i].onclick = function(){
				this.parentNode.parentNode.removeChild(this.parentNode);
				totalPiece.innerHTML = Number(totalPiece.innerHTML) - Number(oPiece[this.index].innerHTML);
				totalPrice.innerHTML = Number(totalPrice.innerHTML) - Number(smallCount[this.index].value);
			}
		}
	}
}