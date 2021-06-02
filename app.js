//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('app.js-----onLaunch --小程序初始化') 
    
    //调用云服务功能
    if(!wx.cloud){ console.error('请使用2.2.3以上的基础库以便支持云服务') }
    else{
      wx.cloud.init({traceUser:true,});
      console.log("初始化云服务功能！");
    }
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
    fileID:'',
    cloudPath :'',
    imagePath:'',
  },

  globalFunc:function(){
      return '我是来自app.js的全局函数'
  }
  
})