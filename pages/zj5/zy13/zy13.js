// pages/zj5/zy13/zy13.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
status:'获取中......',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
var that=this
wx.getNetworkType({
  success: (res) => {
    that.setData({
      status:res.networkType
    })
  },
})
wx.onNetworkStatusChange((res) => {
  if(res.isConnected){
    that.setData({
      status:res.networkType
    })
  }else{
    that.setData({
      status:'未联网'
    })
  }
})
  },

  wifistatus:function(){
var that=this;
wx.startWifi({
  success(res) {
    console.log(res.errMsg, 'wifi初始化成功')
  },
  fail: function(res){
    console.log(res.errMsg, 'wifi初始化失败')
  }
});
wx.getConnectedWifi({
  success:function(resa) {
    that.setData({
      res:resa.wifi,
    })
  },
  fail:function(){
    that.setData({
      xxx:'zyyyyyy'
    })
  }
});

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