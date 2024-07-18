
import request from "./request";

export function water(data) {
    return request({
        method: 'GET',
        url: '/',
        param: data //可以简写为data
    })
}
