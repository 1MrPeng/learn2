/*$(() => {
    //请求数据的url
    let baseUrl = 'https://www.easy-mock.com/mock/5cb69688611c6a301b7fb462/yuan/maizuo'

    //发送ajax请求获取数据
    $.get(baseUrl, data => {
      
        let result = {
            items: data.data.films
        }
        console.log(result);
        //请求外部模板
        $.get('template/itemTemplate.html', oTemp => {
            
            //定义过滤器实现当有评分时显示评分，没有则不显示
            template.defaults.imports.myFilter = val => {
                if(val){
                    //有评分则显示评分
                    return `<span>观众评分</span>&nbsp;<span>${val}</span>`;
                }else{
                    //没有则不显示
                    return "";
                }
            }

            //填充数据
            let resultTemplate = template.render(oTemp,result);
         
            //数据渲染
            $('#item_content').html(resultTemplate);
            
        })
       

    });
    //============end===
});*/