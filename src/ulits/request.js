import axios from 'axios'


// export function whater(data){
//     let datas = {
//         version: 'day',
//         unit: 'm',
//         language: 'zh',
//         query: '九江',
//         // appid: '55321892',
//         appid: 'test',
//         // appsecret: 'XuYd1xY1',
//         appsecret: 'test888',
//         ...data
//     }
//     let searchParams = new URLSearchParams();
//     for (let key in datas) {
//         if (datas.hasOwnProperty(key)) {
//             searchParams.append(key, datas[key]);
//         }
//     }
//
//     let queryString = searchParams.toString();
//     return axios.get('http://pitaya.tianqiapis.com/?' + queryString)
// }
// 创建axios实例
const request = axios.create({
    // 这里可以放一下公用属性等。
    baseURL: 'https://api.caiyunapp.com/v2.6', // 用于配置请求接口公用部分，请求时会自动拼接在你定义的url前面。
    withCredentials: false, // 跨域请求时是否需要访问凭证
    timeout: 60 * 1000, // 请求超时时间

})

// 请求拦截器
request.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error)
})

request.interceptors.response.use((response) => {
    return response.data;//此处可以只返回后端传出的数据（第一层data是axios封装的）
}, (error) => {
    return Promise.reject(error)
})

export default request;//记得暴露出去
