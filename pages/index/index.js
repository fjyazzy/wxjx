// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
       imgsrc:"/images/book.png",
       homeimage:['/images/home.png','/images/home2.png','/images/home3.png']
  },
  tapCat:function(){
    let audio=wx.createInnerAudioContext()
    audio.src="/audios/meow.mp3"
    audio.play()
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('index.js-----onLoad --页面加载')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('index.js-----onReady--监听页面初次渲染完成')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('index.js-----onShow--监听页面显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('index.js-----onHide--监听页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('index.js-----onUnload--监听页面卸载')
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