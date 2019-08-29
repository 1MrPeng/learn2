define(["jquery", "text!../js/modules/film/comingsoon/comingsoon.html", "AT"], function(jq, html, AT) {
	async function initView() {
		// let data = await $.get('https://www.easy-mock.com/mock/5cb69038c1d19650f26d7edd/example/maoyan.commingSoon.expect');
		let data = {"coming":[{"id":1203134,"img":"http://p0.meituan.net/w.h/movie/ae98a8b942495de97ddde12170f9b38d92428.jpg","wish":347655,"wishst":0,"nm":"摸金校尉之九幽将军","comingTitle":"10月1日 周二"},{"id":1197417,"img":"http://p0.meituan.net/w.h/movie/4ce0104f223d0df60340f40f01c561391345060.jpg","wish":316434,"wishst":0,"nm":"使徒行者2：谍影行动","comingTitle":"8月7日 周三"},{"id":1215605,"img":"http://p1.meituan.net/w.h/movie/648bbced128324a4b4ccf7db6c564a251744344.jpg","wish":286221,"wishst":0,"nm":"速度与激情：特别行动","comingTitle":"8月23日 周五"},{"id":1207237,"img":"http://p0.meituan.net/w.h/movie/314f18a87b4df9a74a0c8341fa047fd24302018.jpg","wish":193617,"wishst":0,"nm":"沉默的证人","comingTitle":"8月16日 周五"},{"id":1209269,"img":"http://p0.meituan.net/w.h/movie/b73baf844cbbc2f434f5fcd5d046679d936451.jpg","wish":181761,"wishst":0,"nm":"全职高手之巅峰荣耀","comingTitle":"8月16日 周五"},{"id":342903,"img":"http://p1.meituan.net/w.h/movie/5dde9673a97f1e11540dc4c4cc78cbcb3314363.jpg","wish":167108,"wishst":0,"nm":"上海堡垒","comingTitle":"8月9日 周五"},{"id":1250700,"img":"http://p0.meituan.net/w.h/movie/4c01895cfd53e82f7c3048c407974a6b4739229.jpg","wish":100757,"wishst":0,"nm":"攀登者","comingTitle":"9月30日 周一"},{"id":341379,"img":"http://p1.meituan.net/w.h/movie/92bdf5e3faa703a819a1e8f11cf6c0d81756031.jpg","wish":85977,"wishst":0,"nm":"保持沉默","comingTitle":"8月23日 周五"},{"id":359377,"img":"http://p0.meituan.net/w.h/movie/7a3a66dade78099ed08d698f71b952f7938627.jpg","wish":85647,"wishst":0,"nm":"罗小黑战记","comingTitle":"9月12日 周四"},{"id":334625,"img":"http://p0.meituan.net/w.h/movie/a6b1d0ea2c84edf4dc3152705502f9e58993647.jpg","wish":71756,"wishst":0,"nm":"美食大冒险之英雄烩","comingTitle":"9月13日 周五"}],"paging":{"hasMore":true,"limit":10,"offset":0,"total":70}}
		
		// let res = await $.get('https://www.easy-mock.com/mock/5cb69038c1d19650f26d7edd/example/maoyan.commingSoon.items');
		let res = {"coming":[{"id":1239282,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/297895f07d4e2009898a991f82f2e80b4874837.jpg","version":"","nm":"红花绿叶","preShow":false,"sc":0,"globalReleased":false,"wish":721,"star":"马思琪,罗克旺,张玲","rt":"2019-08-05","showInfo":"2019-08-05 下周一上映","showst":4,"wishst":0,"comingTitle":"8月5日 周一"},{"id":1197417,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/4ce0104f223d0df60340f40f01c561391345060.jpg","version":"","nm":"使徒行者2：谍影行动","preShow":false,"sc":0,"globalReleased":false,"wish":316434,"star":"张家辉,古天乐,吴镇宇","rt":"2019-08-07","showInfo":"2019-08-07 下周三上映","showst":4,"wishst":0,"comingTitle":"8月7日 周三"},{"id":1257417,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/16f6ac2e99eb54074a537b4155e5c714801060.jpg","version":"","nm":"若能与你共乘海浪之上","preShow":false,"sc":0,"globalReleased":false,"wish":19544,"star":"片寄凉太,川荣李奈,松本穗香","rt":"2019-08-07","showInfo":"2019-08-07 下周三上映","showst":4,"wishst":0,"comingTitle":"8月7日 周三"},{"id":1214981,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/moviemachine/ca742123c03d80715e650996b05df0432347699.jpg","version":"","nm":"某日某月","preShow":true,"sc":0,"globalReleased":false,"wish":2235,"star":"汤怡,原岛大地,陈茵媺","rt":"2019-08-07","showInfo":"2019-08-07 下周三上映","showst":4,"wishst":0,"comingTitle":"8月7日 周三"},{"id":344653,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/moviemachine/28bd6787a154a25b69025dc0db01eef22790654.jpg","version":"","nm":"丛林历险记","preShow":false,"sc":0,"globalReleased":false,"wish":3350,"star":"欧阳奋强,Alexander Christian Stetz,钟熠璠","rt":"2019-08-08","showst":1,"wishst":0,"comingTitle":"8月8日 周四"},{"id":1263074,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/moviemachine/cbf80f34d6e0e02193635f1096f95f522822916.jpg","version":"","nm":"红星照耀中国","preShow":false,"sc":0,"globalReleased":false,"wish":1774,"star":"柯南·何裴,王鹏凯,李雪健","rt":"2019-08-08","showInfo":"2019-08-08 下周四上映","showst":4,"wishst":0,"comingTitle":"8月8日 周四"},{"id":342903,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/movie/5dde9673a97f1e11540dc4c4cc78cbcb3314363.jpg","version":"v3d imax","nm":"上海堡垒","preShow":false,"sc":0,"globalReleased":false,"wish":167108,"star":"鹿晗,舒淇,石凉","rt":"2019-08-09","showInfo":"2019-08-09 下周五上映","showst":4,"wishst":0,"comingTitle":"8月9日 周五"},{"id":1286498,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/moviemachine/c8e91e764ec79753ce9214a0a5f1078d396170.png","version":"","nm":"童童的风铃密室","preShow":false,"sc":0,"globalReleased":false,"wish":11191,"star":"陈法蓉,郑佩佩,安泽豪","rt":"2019-08-09","showInfo":"2019-08-09 下周五上映","showst":4,"wishst":0,"comingTitle":"8月9日 周五"},{"id":1262185,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/223e23f49090bbe407f7c190cd03533c1798491.jpg","version":"","nm":"萤火奇兵2：小虫不好惹","preShow":false,"sc":0,"globalReleased":false,"wish":4776,"star":"张圣,杨凝,闫夜桥","rt":"2019-08-09","showst":1,"wishst":0,"comingTitle":"8月9日 周五"},{"id":1178432,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/284936ffbc1e4d5ec0c7c0344b70540f1783263.jpg","version":"","nm":"丑娃娃","preShow":false,"sc":0,"globalReleased":false,"wish":4691,"star":"凯莉·克拉克森,徐畅繁,尼克·乔纳斯","rt":"2019-08-09","showst":1,"wishst":0,"comingTitle":"8月9日 周五"}],"movieIds":[1239282,1197417,1257417,1214981,344653,1263074,342903,1286498,1262185,1178432,1209180,1282915,1207237,1209269,1170287,1215786,343473,1278147,1217980,1285785,1278295,1215605,341379,1239976,1228787,1227005,1240153,1217246,1217966,1183641,1229683,902819,345155,1199934,1233278,894477,1216179,1250950,1212538,1213079,1176486,1238399,1209089,359377,360504,345397,1227006,1216447,1277982,1229661,334625,1285928,1284310,1251393,1240752,1227891,1250700,1230121,1233309,1263312,1203134,1225993,1277939,341904,343528,1282454,1246976,1250661,1261203,1220847,1220890,1262218,1233316,346302,1292500,1048268,342867,489894,1279731,1217023,461076,1250696,1217123,1197077,1220738,1212627,1220824,1218029,344450,346210,1227611,1199007,1198213,343873,342178,487586,249287,1220983,672203,346282,1245196,1203686,1201272,1212559,1218437,341370,1185170,1229298,1190390,1229576,1211268,1205319,1216185,1284360,1241385,1203775,1280694,1234493,346306,195,344768,344160,672255,1188652,1218474,1211101,530065,1281464,1208258,1203423,1207371,1212838,345030,1244277,1211269,1229577,1208645,343360,1261532,337047]}
		
		let arr = res.coming;
		
		let mapLoction = function(arr) {
		    let newArr = [];
		    arr.forEach((address, i) => {
		        let index = -1;
		        let alreadyExists = newArr.some((newAddress, j) => {
		            if (address.rt === newAddress.rt) {
		                index = j;
		                return true;
		            }
		        });
		        if (!alreadyExists) {
		            newArr.push({
		                rt: address.rt,
		                data: [address]
		            });
		        } else {
		            newArr[index].data.push(address);
		        }
		    });
		    return newArr;
		}
		data.data = mapLoction(arr);
		let myhtml = AT.render(html, data);
		$("#film_content").html(myhtml);
		
















		let expect = document.querySelector('.expectItems>div');
		//期待的item跟随鼠标移动开始
		//手指触摸开始，记录div的初始位置
		expect.addEventListener('touchstart', function(e) {
			var ev = e || window.event;
			var touch = ev.targetTouches[0];
			oL = touch.clientX - expect.offsetLeft;
			document.addEventListener("touchmove", defaultEvent, false);
		});

		//触摸中的，位置记录
		expect.addEventListener('touchmove', function(e) {
			var ev = e || window.event;
			var touch = ev.targetTouches[0];
			var oLeft = touch.clientX - oL;
			var expectItems = expect.querySelectorAll('.expect_item');
			var length = expectItems.length - 3.4;
			if (oLeft < -(expectItems[0].offsetWidth * length)) {
				oLeft = -expectItems[0].offsetWidth * length;
			} else if (oLeft > 0) {
				oLeft = 0
			}
			expect.style.left = oLeft + 'px';
		}, {
			passive: false
		});
		//触摸结束时的处理
		expect.addEventListener('touchend', function() {
			document.removeEventListener("touchmove", defaultEvent);
		}, {
			passive: false
		});

		//阻止默认事件
		function defaultEvent(e) {
			e.preventDefault();
		}
		//期待的item跟随鼠标移动结束
	}
	// return {initView: initView}	以对象形式return, 以initView为key, 对应的函数名为value
	return {
		initView
	} //对象的简写方式
})
