require.config({
	baseUrl: './libs',
	paths: {
		text: 'text',
		template: 'artTemplate',
		jquery: 'jquery',
		domReady: 'domReady'
	}
})

require(['text!../js/modules/temp.html','template','jquery','domReady'],function(text,template,$,domReady){
	domReady(function(){
		let data = {
			list: ["哪吒之魔童降世","西游记之大圣归来","功夫熊猫","白蛇缘起"]
		}
		var myHtml = template.render(text,data);
		console.log(myHtml);
		document.querySelector("#container").innerHTML = myHtml;
	})
	
})