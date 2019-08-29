/**
 * axios拦截
 *  请求拦截
 *  响应拦截
 * */
import axios from 'axios'
import { Indicator,Toast } from 'mint-ui'   //loading 弹窗

let service = axios.create({
    // baseURL: 'http://m.maoyan.com',
    timeout: 5000
})

service.interceptors.request.use(   //请求拦截
    config=>{
        Indicator.open({
            text: "Loading",
            spinnerType: "fading-circle"
        })
        return config
    }
)

service.interceptors.response.use(  //响应拦截
    res=>{
        if(res.status == 200){
            Indicator.close();
            return Promise.resolve(res)
        }else{
            Toast({
                message: res.statusText,  //显示信息
                position: 'bottom', //显示位置
                duration: 3000  //提示信息显示时长
            })
        }
    },
    err=>{
        Indicator.close();
        if(err.response && err.response.status){
            switch (err.response.status) {
                case 404:
                    Toast({
                        message: '页面找不到',  //显示信息
                        position: 'bottom', //显示位置
                        duration: 3000  //提示信息显示时长
                    })
                    break;
                case 500:
                    Toast({
                        message: '服务器内部错误',  //显示信息
                        position: 'bottom', //显示位置
                        duration: 3000  //提示信息显示时长
                    })
                    break;
            
                default:
                    Toast({
                        message: err.response.data.message,
                        position: 'bottom', //显示位置
                        duration: 3000  //提示信息显示时长
                    })
                    break;
            }
        }else{
            Toast({
                message: '请求超时',
                position: 'bottom', //显示位置
                duration: 3000  //提示信息显示时长
            })
        }
    }
)

export default service