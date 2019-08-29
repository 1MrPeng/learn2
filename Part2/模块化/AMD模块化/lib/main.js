require.config({
	baseUrl: './lib',	//指定所有模块的基础目录路径
	paths: {			//配置依赖模块的路径,该路径是相对于基础路径的模块路径
		moduleA: '../js/a',
		moduleB: '../js/b',
		moduleC: '../js/c',
		jquery: '../js/jquery'	//jquery模块名称必须使用jquery
	},
	// shim: {	//加载非规范模块
	// 	"moduleC": {
	// 		deps: ["jquery"],	//指定该模块的依赖模块
	// 		exports: "myname"	//指定输出的变量
	// 	}
	// }
})

require(['moduleA','moduleB','moduleC','jquery'],function(resultA,resultB,resultC,jq){
	console.log(resultA);
	console.log(resultB);
	console.log(resultC);
	console.log(jq);
})