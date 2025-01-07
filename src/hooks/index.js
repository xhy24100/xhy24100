import { showNotify } from 'vant';
//手机获取当前位置
export const getCurrentLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position,98)
                return {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
            },
            (error) => {
                showNotify({ type: 'danger', message: 'error' });
            },
            {
                enableHighAccuracy: true, // 是否要求高精度的位置信息
                timeout: 10000, // 请求的超时时间
                maximumAge: 0 // 对获取的地理位置信息的缓存时间
            }
        );
    } else {
        showNotify({ type: 'danger', message: '获取位置失败！' });
    }
};

//获取电脑端当前位置
export const getUserLocation = async () => {
    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        console.log(position,88)
        return {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        };
    } catch (error) {
        showNotify({ type: 'danger', message: '无法获取位置信息！' });
    }
};

export const getLongitudeLatitude=()=> {
    //如果该对象存在，那么地理位置服务可用。
    if ('geolocation' in navigator) {
        /* 地理位置服务可用 */
        var options = {
            enableHighAccuracy: false, //布尔值，表示系统是否使用最高精度来表示结果，注意，这会导致较慢的响应时间或者增加电量消耗（比如对于支持gps的移动设备来说）。如果值为false ，设备会通过更快响应以及/或者使用更少的电量等方法来尽可能的节约资源。默认值fasle
            timeout: 10000, //它表明的是设备必须在多长时间（单位毫秒）内返回一个位置。默认直到获取到位置才会返回值。
            maximumAge: 0 //表明可以返回多长时间（即最长年龄，单位毫秒）内的可获取的缓存位置。如果设置为 0, 说明设备不能使用一个缓存位置，而且必须去获取一个真实的当前位置。默认0
        }
        function success(position) {
            //position.coords (只读) 返回一个定义了当前位置的Coordinates对象。
            //position.timestamp (只读) 返回一个时间戳DOMTimeStamp， 这个时间戳表示获取到的位置的时间。
            var lat = position.coords.latitude //当前位置的纬度
            var lng = position.coords.longitude //当前位置精度
            console.log(position,121212)
        }
        function error(err) {
            var errorType = ['您拒绝共享位置信息', '获取不到位置信息', '获取位置信息超时']
            console.log(errorType[err.code - 1])
        }

        navigator.geolocation.getCurrentPosition(success, error, options)
    } else {
        /* 地理位置服务不可用 */
        console.log('无法获取您的位置，请检查定位是否开启或刷新重试')
    }
}
