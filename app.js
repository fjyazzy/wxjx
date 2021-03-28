//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('app.js-----onLaunch --小程序初始化') 
  },
  onShow:function(){
    console.log('app.js-----onshow --小程序显示')
  },
  onHide(){
    console.log('app.js-----onHide --小程序隐藏')
  },

  globalData: {
    userInfo: null,
    selected: 0,
    openID:'',
    globalMsg: '我是来自app.js的全局变量',
    usite:"http://132.232.88.15",
    //usite: "http://localhost",
  },

  globalFunc:function(){
      return '我是来自app.js的全局函数'
  }
  
})