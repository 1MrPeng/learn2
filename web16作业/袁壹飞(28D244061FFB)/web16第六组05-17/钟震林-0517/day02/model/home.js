require.config({
    path: {
        cart: "../model/cart/cart",
        shopping: "../model/shopping/shopping"
    }
})

require([
    "cart",
    "shopping"
], function(cart,shopping){
    // cart.initView();
    shopping.initView();
})