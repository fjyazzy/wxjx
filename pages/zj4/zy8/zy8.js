// pages/zj4/zy8/zy8.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
poster:'/images/icon_home.png',
name:'歌曲名',
author:'歌手名',
src:''
  },
  audioplay:function(){
    this.audioctx.play()
  },
  audiopause:function(){
    this.audioctx.pause()
  },
  audio14:function(){
    this.audioctx.seek(14)
  },
  audiostart:function(){
    this.audioctx.seek(0)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.audioctx=wx.createAudioContext('id', 'myaudio')
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