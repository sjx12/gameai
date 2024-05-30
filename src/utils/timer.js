export const getTimer = stringTime => {
  if (!stringTime) return
  var minute = 1000 * 60
  var hour = minute * 60
  var day = hour * 24
  var week = day * 7
  var month = day * 30
  let timer = stringTime.replace(/-/g, '/')
  var time1 = new Date().getTime() //当前的时间戳
  var time2 = Date.parse(new Date(timer)) //指定时间的时间戳
  var time = time1 - time2
  var result = null
  if (time < 0) {
    alert('设置的时间不能早于当前时间！')
  } else if (time / month >= 1) {
    result = parseInt(time / month) + '月前'
  } else if (time / week >= 1) {
    result = parseInt(time / week) + '周前'
  } else if (time / day >= 1) {
    result = parseInt(time / day) + '天前'
  } else if (time / hour >= 1) {
    result = parseInt(time / hour) + '小时前'
  } else if (time / minute >= 1) {
    result = parseInt(time / minute) + '分钟前'
  } else {
    result = '刚刚发布！'
  }
  return result
}

export const formatTime = time => {
  let newTime = ''
  if (time) {
    newTime = time.replace(/-/g, '/')
  }
  let timeStamp = new Date(newTime).getTime()
  let result = getTimer(timeStamp)
  return result
}

/*
 *时间戳转换为日期格式
 */

export const format = (msStr, format) => {
  const date = new Date(msStr / 1)
  let fmt = format
  const obj = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length))
  }
  const keys = Object.keys(obj)
  for (let i = 0; i <= keys.length; i += 1) {
    const k = keys[i]
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? obj[k] : `00${obj[k]}`.substr(String(obj[k]).length))
    }
  }
  return fmt
}
