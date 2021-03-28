// pages/zj3/zy3/zy3.js
const app=getApp()
var util=require('../../../utils/util.js');
var indexMsg='我是来自zj3.js的局部变量';
function indexFunc(){
   return '我是来自zj3.js的局部函数'
} 
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    msg1:app.globalData.globalMsg,
    msg2:app.globalFunc(),
    msg3:indexMsg,
    msg4:indexFunc(),
    msg5:util.utilMsg,
    msg6:util.utilFunc()
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