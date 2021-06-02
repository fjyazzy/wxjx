// pages/zj5/zy17/zy17.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
hide1:false,
hide2:true
  },

  getsysteminfo:function(){
    var that=this;
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          msg:'异步',
          hide1:false,
          hide2:true,
          model:res.model,
          pixelratio:res.pixelRatio,
          screenwidth:res.screenWidth,
          screenheight:res.screenHeight,
          windowwidth:res.windowWidth,
          windowheight:res.windowHeight,
          language:res.language,
          version:res.version,
          system:res.system,
          platform:res.platform,
          sdkversion:res.SDKVersion
        })
      },
    })
  },

  getsysteminfosync:function(){
var that=this;
try{
  var res=wx.getSystemInfoSync();
  that.setData({
    msg:'同步',
    hide1:true,
    hide2:false,
    model:res.model,
    pixelratio:res.pixelRatio,
    screenwidth:res.screenWidth,
    screenheight:res.screenHeight,
    windowwidth:res.windowWidth,
    windowheight:res.windowHeight,
    language:res.language,
    version:res.version,
    system:res.system,
    platform:res.platform,
    sdkversion:res.SDKVersion
  })
}catch(e){
  console.log(e)
}
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})