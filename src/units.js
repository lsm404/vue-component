
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
