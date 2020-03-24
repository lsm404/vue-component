
// 防抖 - debounce 当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时
export const debounce = (fn, delay) => {
  console.log('2', fn)
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    console.log(...args, '23')
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
// 节流 - throttle 当持续触发事件时，保证一定时间段内只调用一次事件处理函数。
export const throttle = (fn, delay = 500) => {
  let flag = true
  return (...args) => {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, args)
      flag = true
    }, delay)
  }
}
// 近几天
export const nearFutureDays = num => {
  let time = new Date()
  time.setDate(time.getDate() - num)
  let timeList = new Date(time)
  return timeList
}
// 未来几天
export const FutureDays = (arg, num) => {
  let time = new Date(arg)
  time.setDate(time.getDate() + num)
  let timeList = new Date(time)
  return timeList
}
export const setCookie = (name, value, day) => {
  var setting = arguments[1]
  if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
    for (var i in setting) {
      let oDate = new Date()
      oDate.setDate(oDate.getDate() + day)
      document.cookie = i + '=' + setting[i] + ';expires=' + oDate
    }
  } else {
    let oDate = new Date()
    oDate.setDate(oDate.getDate() + day)
    document.cookie = name + '=' + value + ';expires=' + oDate
  }
}
export const getCookie = (name) => {
  var arr = document.cookie.split('; ')
  for (var i = 0; i < arr.length; i++) {
    var arr2 = arr[i].split('=')
    if (arr2[0] === name) {
      return arr2[1]
    }
  }
  return ''
}
/**
 * 接口时间格式化
 * @param  {[Date]}  time  [description]
 * @return {string}          [description]
 */
export const dataFormat = (time) => {
  let year = time.getFullYear()
  let month = (time.getMonth() < 9 ? '0' : '') + (time.getMonth() + 1)
  let day = (time.getDate() < 10 ? '0' : '') + time.getDate()
  return year + '-' + month + '-' + day
}
// 时间格式化
export const timeFormart = (time) => {
  let year = time.getFullYear()
  let month = (time.getMonth() < 9 ? '0' : '') + (time.getMonth() + 1)
  let day = (time.getDate() < 10 ? '0' : '') + time.getDate()
  let hour = (time.getHours() < 10 ? '0' : '') + time.getHours()
  let minute = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
  let second = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds()
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
}
// 时间格式化
export const timeFormartNohour = (time) => {
  let year = time.getFullYear()
  let month = (time.getMonth() < 9 ? '0' : '') + (time.getMonth() + 1)
  let day = (time.getDate() < 10 ? '0' : '') + time.getDate()
  return year + '-' + month + '-' + day
}
// 获取基于当天的前几天和后几天, 返回二维数组，分别是年月日和时分秒
export const getDateTime = (day, pos, monthAdd) => {
  /**
   * pos : true： 向后推day天，  false: 向前推day天。
   * day 差异天数
   * monthAdd 是否对月份进行加1
   */
  let milliseconds = day * 24 * 60 * 60 * 1000
  let currMilliseconds = (new Date()).getTime()
  let diffcurrMilliseconds = 0
  let dateFomat = ''
  if (pos) {
    diffcurrMilliseconds = currMilliseconds + milliseconds
  } else {
    diffcurrMilliseconds = currMilliseconds - milliseconds
  }
  dateFomat = new Date(diffcurrMilliseconds)
  let year = dateFomat.getFullYear()
  let mounth = (dateFomat.getMonth() < 9 ? '0' : '') + (dateFomat.getMonth() + (monthAdd ? 1 : 0))
  let dayC = (dateFomat.getDate() < 10 ? '0' : '') + dateFomat.getDate()
  let hour = (dateFomat.getHours() < 10 ? '0' : '') + dateFomat.getHours()
  let minute = (dateFomat.getMinutes() < 10 ? '0' : '') + dateFomat.getMinutes()
  let second = (dateFomat.getSeconds() < 10 ? '0' : '') + dateFomat.getSeconds()
  let allDate = [
    [year, mounth, dayC],
    [hour, minute, second]
  ]
  return allDate
}
export const GetDateDiff = (startDate, endDate) => {
  var startTime = new Date(startDate).getTime()
  var endTime = new Date(endDate).getTime()
  var dates = Math.abs((startTime - endTime)) / (1000 * 60 * 60 * 24)
  return dates
}
export const getPageSize = (count, size) => {
  let pageNum = 0
  if (count > 0) {
    let pages = Math.ceil(count / size)
    pageNum = pages > 5 ? 5 : pages < 1 ? 1 : pages
  } else {
    pageNum = 0
  }
  return pageNum
}
// 判断对象是否完全相等
export const objMatch = (x, y) => {
  if (x === y) {
    return true
  }
  if (!(x instanceof Object) || !(y instanceof Object)) {
    return false
  }
  if (x.constructor !== y.constructor) {
    return false
  }
  for (var p in x) {
    if (x.hasOwnProperty(p)) {
      if (!y.hasOwnProperty(p)) {
        return false
      }
      if (x[p] === y[p]) {
        continue
      }
      if (typeof (x[p]) !== 'object') {
        return false
      }
      if (!Object.equals(x[p], y[p])) {
        return false
      }
    }
  }
  for (p in y) {
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
      return false
    }
  }
  return true
}
// 获取字符串真实长度(中文两个字符,英文一个字符)
export const getStrLength = (str) => {
  if (str == null) return 0
  if (typeof str !== 'string') str += ''
  // eslint-disable-next-line no-control-regex
  return str.replace(/[^\x00-\xff]/g, '01').length
}
// base64解码
export const b64EncodeUnicode = (str) => {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1)
  }))
}
// base64编码
export const b64DecodeUnicode = (str) => {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))
}
