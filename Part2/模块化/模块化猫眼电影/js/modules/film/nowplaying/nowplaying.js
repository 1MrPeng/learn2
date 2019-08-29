define(["jquery", "text!../js/modules/film/nowplaying/nowplaying.html","AT","Vue"], function(jq, html,AT,Vue){
	async function initView(){
		// let data = await $.get('https://www.easy-mock.com/mock/5cb69038c1d19650f26d7edd/example/maoyan.nowPlaying1');
		let data = {"coming":[],"movieIds":[1243361,1211270,1197417,1207254,342903,1242130,1260459,1240397,1229534,1285499,1257417,1189879,1207237,1209269,1218141,1239282,1208914,1229688,1214981,1286498,1235560,1198925,1204720,1226558,644501,1205779,1263074,1279689,1218727,1211345,1211698,1215786,414997,1219932,1203673,343133,1245196,1243904,337625,1254277,1212,338400,1206829,11559,502751,332346,1227171,494127,79204,641862,1243301,1215803,1278229,1227693,1229020,1261185,1227456,1263987,341989,1234461],"stid":"576591972453269000","stids":[{"movieId":1243361,"stid":"576591972453269000_a1243361_c0"},{"movieId":1211270,"stid":"576591972453269000_a1211270_c1"},{"movieId":1197417,"stid":"576591972453269000_a1197417_c2"},{"movieId":1207254,"stid":"576591972453269000_a1207254_c3"},{"movieId":342903,"stid":"576591972453269000_a342903_c4"},{"movieId":1242130,"stid":"576591972453269000_a1242130_c5"},{"movieId":1260459,"stid":"576591972453269000_a1260459_c6"},{"movieId":1240397,"stid":"576591972453269000_a1240397_c7"},{"movieId":1229534,"stid":"576591972453269000_a1229534_c8"},{"movieId":1285499,"stid":"576591972453269000_a1285499_c9"},{"movieId":1257417,"stid":"576591972453269000_a1257417_c10"},{"movieId":1189879,"stid":"576591972453269000_a1189879_c11"}],"total":60,"movieList":[{"id":1243361,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/f75fcb7696d55452e32794b2219700b9840805.jpg","version":"v2d imax","nm":"烈火英雄","preShow":false,"sc":9.6,"globalReleased":true,"wish":164442,"star":"黄晓明,杜江,谭卓","rt":"2019-08-01","showInfo":"今天265家影院放映3477场","showst":3,"wishst":0},{"id":1211270,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/005955214d5b3e50c910d7a511b0cb571445301.jpg","version":"v3d imax","nm":"哪吒之魔童降世","preShow":false,"sc":9.7,"globalReleased":true,"wish":166792,"star":"吕艳婷,囧森瑟夫,瀚墨","rt":"2019-07-26","showInfo":"今天267家影院放映4427场","showst":3,"wishst":0},{"id":1197417,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/4ce0104f223d0df60340f40f01c561391345060.jpg","version":"","nm":"使徒行者2：谍影行动","preShow":false,"sc":0,"globalReleased":false,"wish":316434,"star":"张家辉,古天乐,吴镇宇","rt":"2019-08-07","showInfo":"2019-08-07 下周三上映","showst":4,"wishst":0},{"id":1207254,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/f35ac31a224c601002f904703bb14e054448434.jpg","version":"","nm":"鼠胆英雄","preShow":false,"sc":8.6,"globalReleased":true,"wish":100389,"star":"岳云鹏,佟丽娅,田雨","rt":"2019-08-02","showInfo":"今天251家影院放映1214场","showst":3,"wishst":0},{"id":342903,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/movie/5dde9673a97f1e11540dc4c4cc78cbcb3314363.jpg","version":"v3d imax","nm":"上海堡垒","preShow":false,"sc":0,"globalReleased":false,"wish":167108,"star":"鹿晗,舒淇,石凉","rt":"2019-08-09","showInfo":"2019-08-09 下周五上映","showst":4,"wishst":0},{"id":1242130,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/movie/4f973b4398dd265824ea164acc630b271264277.jpg","version":"","nm":"古田军号","preShow":false,"sc":0,"globalReleased":true,"wish":8338,"star":"王仁君,王志飞,刘智扬","rt":"2019-08-01","showInfo":"今天102家影院放映312场","showst":3,"wishst":0},{"id":1260459,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/movie/2d8e1a831dc439410ba90707d58a5b94480532.jpg","version":"v3d","nm":"赛尔号大电影7：疯狂机器城","preShow":false,"sc":0,"globalReleased":true,"wish":25629,"star":"胡谦,李晔,罗玉婷","rt":"2019-08-02","showInfo":"今天164家影院放映560场","showst":3,"wishst":0},{"id":1240397,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/d9a904ad9ab9f73e4c4dc102434fade72858820.jpg","version":"v3d","nm":"冰雪女王4：魔镜世界","preShow":false,"sc":0,"globalReleased":true,"wish":27731,"rt":"2019-08-02","showInfo":"今天198家影院放映533场","showst":3,"wishst":0},{"id":1229534,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/bb9f75599bfbb2c4cf77ad9abae1b95c1376927.jpg","version":"v2d imax","nm":"银河补习班","preShow":false,"sc":9.5,"globalReleased":true,"wish":221884,"star":"邓超,白宇,任素汐","rt":"2019-07-18","showInfo":"今天160家影院放映384场","showst":3,"wishst":0},{"id":1285499,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/3352e6fa9111db84dcb30105ea36da1c8482013.jpg","version":"","nm":"梦想之战：踢球吧！阿妹","preShow":false,"sc":0,"globalReleased":true,"wish":3714,"star":"张琳,李连正,陈淋","rt":"2019-08-02","showInfo":"今天43家影院放映154场","showst":3,"wishst":0},{"id":1257417,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/16f6ac2e99eb54074a537b4155e5c714801060.jpg","version":"","nm":"若能与你共乘海浪之上","preShow":false,"sc":0,"globalReleased":false,"wish":19544,"star":"片寄凉太,川荣李奈,松本穗香","rt":"2019-08-07","showInfo":"2019-08-07 下周三上映","showst":4,"wishst":0},{"id":1189879,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/moviemachine/7b9b0725ab5feae642e1fbba9fbb90fe3702078.jpg","version":"v3d imax","nm":"狮子王","preShow":false,"sc":8.9,"globalReleased":true,"wish":191819,"star":"唐纳德·格洛弗,塞斯·罗根,詹姆斯·厄尔·琼斯","rt":"2019-07-12","showInfo":"今天60家影院放映103场","showst":3,"wishst":0}]}
		let myhtml = AT.render(html, data);
		$("#film_content").html(myhtml);
		
	}
	// return {initView: initView}	以对象形式return, 以initView为key, 对应的函数名为value
	return {initView}	//对象的简写方式
})