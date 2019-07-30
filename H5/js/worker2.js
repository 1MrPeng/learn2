self.onmessage = function(ev){
	var arr = ev.data;
	//排序
	for(i=0;i<arr.length;i++){
		for(j=0;j<arr.length;j++){
			if(arr[i]<arr[j]){
				var temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		}
	}
	var res = [];
	//去重
	for(i=0;i<arr.length;i++){
		if(res.indexOf(arr[i]) == -1){
			res.push(arr[i]);
		}
	}
	self.postMessage(res);
}