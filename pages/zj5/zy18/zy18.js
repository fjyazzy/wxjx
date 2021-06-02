// pages/zj5/zy18/zy18.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
title:''
  },
inputtitle:function(e){
  this.setData({
    title:e.detail.value
  })
},
szbt:function(){
let title=this.data.title;
wx.setNavigationBarTitle({
  title: title,
})
},

szys:function(){
  wx.setNavigationBarColor({
    backgroundColor: '#ff0000',
    frontColor: '#ffffff',
    animation:{
      duration:4000,
      timingFunc:'easeIn'
    }
  })
},

jzdh:function(){
wx.showNavigationBarLoading({
  success: (res) => {},
})
},
tzdh:function(){
wx.hideNavigationBarLoading({
  success: (res) => {},
})
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