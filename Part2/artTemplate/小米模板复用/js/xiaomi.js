window.onload = function(){
	$.get('https://www.easy-mock.com/mock/5ba06ec82ee5a7654dc13dd7/example/xiaomi',function(data){
		console.log(data);
		$.get('temp.html',function(html){
			// console.log(html);
			var mycontent = template.compile(html)(data.data);
			
			document.querySelector('#container').innerHTML = mycontent
		})
	})
}