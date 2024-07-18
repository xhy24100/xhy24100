// api.js
const API_KEY = 'Yip7FFOi13t9mgJr' // 替换成自己的 API Key
const BASE_URL = 'https://api.caiyunapp.com/v2.6/Yip7FFOi13t9mgJr/YOUR_LOCATION/weather?alert=true&dailysteps=1&hourlysteps=24'
export function getWeather(location) {
 return new Promise((resolve, reject)=>{
 	   uni.request({
 	     url: BASE_URL.replace('YOUR_LOCATION', location),
 	     method: 'GET',
 	     success(res) {
 			 resolve(res.data)
 	     },
 	     fail(err) {
 	       reject(err)
 	     }
 	   })
 })
}


