export function getWeatherFromSkycon(skyconCode) {
	switch (skyconCode) {
		case "CLEAR_DAY":
			return "晴";
		case "CLEAR_NIGHT":
			return "晴";
		case "PARTLY_CLOUDY_DAY":
			return "多云";
		case "PARTLY_CLOUDY_NIGHT":
			return "多云";
		case "CLOUDY":
			return "阴";
		case "LIGHT_HAZE":
			return "轻度雾霾";
		case "MODERATE_HAZE":
			return "中度雾霾";
		case "HEAVY_HAZE":
			return "重度雾霾";
		case "LIGHT_RAIN":
			return "小雨";
		case "MODERATE_RAIN":
			return "中雨";
		case "HEAVY_RAIN":
			return "大雨";
		case "STORM_RAIN":
			return "暴雨";
		case "FOG":
			return "雾";
		case "LIGHT_SNOW":
			return "小雪";
		case "MODERATE_SNOW	":
			return "中雪";
		case "HEAVY_SNOW":
			return "大雪";
		case "STORM_SNOW":
			return "暴雪";
		case "DUST":
			return "浮尘";
		case "SAND":
			return "沙尘";
		case "WIND":
			return "大风";
		default:
			return "未知天气";
	}
}
//pm2.5
export function getAirQualityByPM(pm) {
  if (pm >= 0 && pm <= 35) {
    return '优';
  } else if (pm > 35 && pm <= 75) {
    return '良';
  } else if (pm > 75 && pm <= 115) {
    return '轻度污染';
  } else if (pm > 115 && pm <= 150) {
    return '中度污染';
  } else if (pm > 150 && pm <= 250) {
    return '重度污染';
  } else if (pm > 250) {
    return '严重污染';
  } else {
    return '无数据';
  }
} 

//生活指数 风速
export function getWeathernSpeed(ultraviolet) {
	switch (ultraviolet) {
		case "0":
			return "无风";
		case "1":
			return "微风徐徐";
		case "2":
			return "清风";
		case "3":
			return "树叶摇摆";
		case "4":
			return "树枝摇动";
		case "5":
			return "风力强劲";
		case "6":
			return "风力强劲";
		case "7":
			return "风力超强";
		case "8":
			return "狂风大作";
		case "9":
			return "狂风呼啸";
		case "10":
			return "暴风毁树";
		case "11":
			return "飓风";
			case "12":
				return "台风";
				case "13":
					return "强台风";
		default:
			return "未知";
	}
}

//生活指数 穿衣指数
export function getWeatherDressing(ultraviolet) {
	switch (ultraviolet) {
		case "0":
			return "宜穿短衣、短裙";
		case "1":
			return "宜穿T恤、短裙";
		case "2":
			return "宜穿短衣、衬衫";
		case "3":
			return "宜穿单衣";
		case "4":
			return "宜穿夹衣";
		case "5":
			return "宜穿风衣";
		case "6":
			return "宜穿毛衣";
		case "7":
			return "宜穿棉服";
		case "8":
			return "宜穿羽绒服";
		default:
			return "未知";
	}
}


//生活指数 舒适度指数
export function getWeatherComfort (ultraviolet) {
	switch (ultraviolet) {
		case "0":
			return "闷热";
		case "1":
			return "酷热";
		case "2":
			return "很热";
		case "3":
			return "热";
		case "4":
			return "温暖";
		case "5":
			return "舒适";
		case "6":
			return "凉爽";
		case "7":
			return "冷";
		case "8":
			return "很冷";
		case "9":
			return "寒冷";
		case "10":
			return "极冷";
		case "11":
			return "刺骨的冷";
		case "12":
			return "湿冷";
		case "13":
			return "干冷";
		default:
			return "未知";
	}
}

//生活指数 感冒指数
export function getWeatherColdRisk (ultraviolet) {
	switch (ultraviolet) {
		case "1":
			return "少发";
		case "2":
			return "较易发";
		case "3":
			return "易发";
		case "4":
			return "极易发";
		default:
			return "未知";
	}
}

//生活指数 洗车指数
export function getWeatherCarWashing (ultraviolet) {
	switch (ultraviolet) {
		case "1":
			return "适宜";
		case "2":
			return "较适宜";
		case "3":
			return "较不适宜";
		case "4":
			return "不适应";
		default:
			return "未知";
	}
}
//天气图片
export function getWeatherIconFrom(skyconCode) {
	switch (skyconCode) {
		case "CLEAR_DAY":
			return "https://xwhy20.top:3333/tianqiImg/qing.png";
		case "CLEAR_NIGHT":
			return "https://xwhy20.top:3333/tianqiImg/qingye.png";
		case "PARTLY_CLOUDY_DAY":
			return "https://xwhy20.top:3333/tianqiImg/多云白天.png";
		case "PARTLY_CLOUDY_NIGHT":
			return "https://xwhy20.top:3333/tianqiImg/夜间多云.png";
		case "CLOUDY":
			return "https://xwhy20.top:3333/tianqiImg/阴.png";
		case "LIGHT_HAZE":
			return "https://xwhy20.top:3333/tianqiImg/轻度雾霾.png";
		case "MODERATE_HAZE":
			return "https://xwhy20.top:3333/tianqiImg/中度雾霾.png";
		case "HEAVY_HAZE":
			return "https://xwhy20.top:3333/tianqiImg/重度雾霾.png";
		case "LIGHT_RAIN":
			return "https://xwhy20.top:3333/tianqiImg/小雨.png";
		case "MODERATE_RAIN":
			return "https://xwhy20.top:3333/tianqiImg/中雨.png";
		case "HEAVY_RAIN":
			return "https://xwhy20.top:3333/tianqiImg/大雨.png";
		case "STORM_RAIN":
			return "https://xwhy20.top:3333/tianqiImg/大暴雨.png";
		case "FOG":
			return "https://xwhy20.top:3333/tianqiImg/雾.png";
		case "LIGHT_SNOW":
			return "https://xwhy20.top:3333/tianqiImg/小雪.png";
		case "MODERATE_SNOW	":
			return "https://xwhy20.top:3333/tianqiImg/中雪.png";
		case "HEAVY_SNOW":
			return "https://xwhy20.top:3333/tianqiImg/大雪.png";
		case "STORM_SNOW":
			return "https://xwhy20.top:3333/tianqiImg/暴雪.png";
		case "DUST":
			return "https://xwhy20.top:3333/tianqiImg/浮尘.png";
		case "SAND":
			return "https://xwhy20.top:3333/tianqiImg/沙尘暴.png";
		case "WIND":
			return "https://xwhy20.top:3333/tianqiImg/大风.png";
		default:
		return "https://xwhy20.top:3333/tianqiImg/未知天气.png";
	}
}
