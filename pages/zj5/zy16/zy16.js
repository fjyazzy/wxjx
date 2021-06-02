// pages/zj5/zy16/zy16.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
brightness:'待查询',
copybrightness:''
  },
setscreenbrightness:function(e){
wx.setScreenBrightness({
  value: e.detail.value,
})
},
getscrennbrightness:function(){
var that=this;
wx.getScreenBrightness({
  success:function(res){
that.setData({
  brightness:res.value.toFixed(1)
})
  }
})
},
setkeepscreenon:function(){
let iskeeping=e.detail.value;
if(iskeeping){
  wx.setKeepScreenOn({
    keepScreenOn: true,
  })
  wx.vibrateShort({
    success: (res) => {},
  })
}
},
copybrightness:function(){

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