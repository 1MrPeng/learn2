// 定义商品列表数据
let productList = [
    {prodId: 1, prodName: '小米9 6GB+128GB', prodDescription: '骁龙855，索尼4800万超广角微距三摄',prodImg: 'img/product01.jpg',prodMony: 2999,count: 0},
    {prodId: 2, prodName: '华为9 6GB+128GB', prodDescription: '骁龙855，索尼4800万超广角微距三摄',prodImg: 'img/product02.jpg',prodMony: 4999,count: 0},
    {prodId: 3, prodName: '诺基亚 6GB+128GB', prodDescription: '骁龙855，索尼4800万超广角微距三摄',prodImg: 'img/product03.jpg',prodMony: 1999,count: 0},
    {prodId: 4, prodName: 'OPPOR9 6GB+128GB', prodDescription: '骁龙855，索尼4800万超广角微距三摄',prodImg: 'img/product04.jpg',prodMony: 3999,count: 0},
    
] 
   
// 加入购物车的商品
let cartItems = new Array();


// 创建vue对象
let prodVm = new Vue({
    el: '#main_box',
    data: { 
        productList: productList, 
        cartItems: cartItems,
        sumItemMony: 0, //总计
        checkboxAllStatus: false,
        checkItemcCount: 0 //选择的商品
    },
    methods: {
        addCart: function(product){ //添加到购物车
            // 添加到购物车的数组中
            //判断该商品是否已经在购物车中存在
            let status = false;
            cartItems.forEach((el, ind) => {
                if(el.prodId == product.prodId){
                    status = true;
                }
            });
            if(!status){
                product.count++;
                cartItems.push(product);
                $('.sumItem').eq(0).html(cartItems.length);
            }else{
                //该商品的数量加一
                product.count += 1;
                let index = 0;
                cartItems.forEach((el, ind) => {
                    if(el.prodId == product.prodId){
                        index = ind;
                    }
                });
             
                // 改变小计的值
                $('.itemMony').eq(index).html(product.count*product.prodMony+"元");
            }
            // 计算总计
            // this.sumItemMony += product.prodMony;
            
            $('#itemList>li>span').eq(product.prodId-1).slideDown(1000);
            $('#itemList>li>span').eq(product.prodId-1).delay(500);
            $('#itemList>li>span').eq(product.prodId-1).slideUp(500);
        },
        preCount: function(item, index) { //数量减一
            if(item.count == 0){
                item.count = 0;
            }else{
                item.count -= 1;
                console.log(this.sumItemMony)
                this.sumItemMony = this.sumItemMony - item.prodMony;
            }
            // 改变小计的值
            $('.itemMony').eq(index).html(item.count*item.prodMony+"元");
            
        },
        nextCount: function(item, index) { //数量加一
            item.count += 1;
            this.sumItemMony = this.sumItemMony + item.prodMony;
             // 改变小计的值
             $('.itemMony').eq(index).html(item.count*item.prodMony+"元");
        },
        checkboxAll: function(){ //全选active
            $('.cat-title >li:nth-of-type(1) span').toggleClass('icon-fangkuang');
            $('.cat-title >li:nth-of-type(1) span').toggleClass('icon-fuxuankuang');
            $('.cat-title >li:nth-of-type(1) span').toggleClass('active');
            this.checkboxAllStatus = !this.checkboxAllStatus;
            if(this.checkboxAllStatus){
                $('.cat-items >li:nth-of-type(1) span').addClass('icon-fuxuankuang');
                $('.cat-items >li:nth-of-type(1) span').addClass('active');
                $('.cat-items >li:nth-of-type(1) span').removeClass('icon-fangkuang');
            }else{
                $('.cat-items >li:nth-of-type(1) span').removeClass('icon-fuxuankuang');
                $('.cat-items >li:nth-of-type(1) span').removeClass('active');
                $('.cat-items >li:nth-of-type(1) span').addClass('icon-fangkuang');
            }
           
            //计算总计
            if(this.checkboxAllStatus){
                let sum = 0;
                cartItems.forEach(el => {
                    sum += el.prodMony*el.count;
                });
                this.sumItemMony = sum;
                this.checkItemcCount = cartItems.length ;
            }else{
                this.sumItemMony = 0;
                this.checkItemcCount = 0;
            } 
            
        },
        checkOnce: function(item, index){ //实现单选
            if($('.cat-items >li:nth-of-type(1) span').eq(index).hasClass('active')){
                //总计减少
                this.sumItemMony = this.sumItemMony - item.count*item.prodMony;
                this.checkItemcCount -= 1;
            }else{
                //总计增加
                this.sumItemMony = this.sumItemMony + item.count*item.prodMony;
                this.checkItemcCount += 1;
            }
            $('.cat-items >li:nth-of-type(1) span').eq(index).toggleClass('icon-fangkuang');
            $('.cat-items >li:nth-of-type(1) span').eq(index).toggleClass('icon-fuxuankuang');
            $('.cat-items >li:nth-of-type(1) span').eq(index).toggleClass('active');
           
        },
        deleteItem: function(item, index){ // 删除
            if(confirm('是否删除该商品?')){

                //减少总计
                this.sumItemMony = this.sumItemMony - item.count*item.prodMony;
                this.checkItemcCount -= 1;
                $('.sumItem').eq(0).html(cartItems.length);
                //删除商品
                cartItems.splice(index, 1);
                if(cartItems.length == 0){
                    this.checkboxAllStatus = false;
                    this.sumItemMony = 0;
                    this.checkItemcCount = 0;
                }
            }
            
        }
    }

});
    
