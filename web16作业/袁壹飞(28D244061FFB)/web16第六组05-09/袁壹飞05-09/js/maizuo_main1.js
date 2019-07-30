$(() => {
    //请求数据的url
    let baseUrl = 'https://www.easy-mock.com/mock/5cb69688611c6a301b7fb462/yuan/maizuo'
    //请求的电影列表数据
    let resultData = null;

    function sendFn(baseUrl,method = 'get',dataType='json'){
        //创建一个promise
        const p = new Promise((resolve, reject) => {
            //发送请求数据
            $.ajax({
                url: baseUrl,
                type: method,
                dataType: dataType,
                success: data => {
                    //成功回调
                    if(dataType == 'json'){ //请求的数据回调
                        let result = {
                            items: data.data.films
                        }
                        console.log(result);
                        resolve(result);
                    }else{  //请求的模板回调
                        resolve(data);                        
                    }
                  
                },
                error : errorMsg => {
                    //失败处理
                    reject(errorMsg);
                }
            });

        });
        return p;
    }
    //回调处理
    sendFn(baseUrl).then(
        (result) => { // 请求电影列表数据成功处理
            resultData = result;
             //请求外部模板
            return sendFn('template/itemTemplate.html','get','text');
        },
        (errorMsg) => { //失败处理
           alert('网络繁忙,请稍后重试.....');
        }
    ).then(
        (oTemp) => { //请求外部模板成功处理
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
            let resultTemplate = template.render(oTemp,resultData);
         
            //数据渲染
            $('#item_content').html(resultTemplate);
        },
        (errorMsg) => { //失败处理
           alert('网络繁忙,请稍后重试.....');
        }
    ).catch((errorMsg) => {
        alert('网络繁忙,请稍后重试.....');
    })


    //============end========
});