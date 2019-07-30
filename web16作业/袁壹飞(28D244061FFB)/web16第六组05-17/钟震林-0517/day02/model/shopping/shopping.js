define([
    'vue',
    'text!shopping.html'
], function(vue, text) {
    var vm = new vue({
        el: ".shopping",
        data: {
            shopping: [
                {imgUrl: "../../img/diann01.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/diann02.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/diann03.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/diann04.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/diann05.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/diann06.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/pms01.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/pms02.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/pms03.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/pms04.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/pms05.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/pms06.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/shug01.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/shug02.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/shug03.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/shug04.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/shug05.jpg", name: "电脑", univalence: 2000},
                {imgUrl: "../../img/shug06.jpg", name: "电脑", univalence: 2000}
            ]
        }
    })

    function initView(){

    }

    return {
		initView: initView
	}
});