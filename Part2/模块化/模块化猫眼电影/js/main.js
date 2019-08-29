require.config({
	baseUrl: "./libs",
	paths: {
		AT: "./artTemplate",
		jquery: "./jquery",
		domReady: "./domReady",
		text: "./text",
		tabbar: "../js/modules/tabbar/tabbar",
		Vue: "./vue"
	}
})

require(["tabbar"], function(tabbar){
	
})