const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var utilMsg='我是来自Util.js的变量'
function utilFunc(){
  return '我是来自Util.js的函数'
}

module.exports = {
  formatTime: formatTime,
  utilMsg:utilMsg,
  utilFunc:utilFunc
}
