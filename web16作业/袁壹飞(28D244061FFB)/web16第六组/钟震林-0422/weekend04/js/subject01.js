$(function(){
	
	$("button").eq(0).click(function(){
		
		var val = $("textarea").val();
		
		$("<p>"+val+"<button>删除</button></p>").appendTo(".active");
		
		$("textarea").val("");
		
		$("p button").click(function(){
//移除元素						
			$(this).parent().remove();	
		})
	})
})