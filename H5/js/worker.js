self.onmessage = function(ev){
	var num = Number(ev.data);
	function count(){
		num++;
		self.postMessage(num)
		setTimeout(count,500);
	}
	count()
}