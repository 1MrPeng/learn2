require.config({
	baseUrl: "./js",
	paths: {
		At: "artTemplate",
		domReady: "domReady",
		text: "text",
		jquery: "jquery",
		vue: "vue",
        home: "../model/home"
	}
})

require([
	"At",
	"domReady",
	"text",
	"jquery",
	"vue",
	"home"
], function(At,domReady,text,jquery,vue,home){
	domReady(function(){
		console.log(At);
        console.log(domReady);
        console.log(text);
        console.log(jquery);
        console.log(vue);
	})
})