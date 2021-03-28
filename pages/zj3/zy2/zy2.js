// pages/zj3/zy2/zy2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
a:10,
b:20,
c:30,
student:{
  stuid:'20190213',
  name:'zhangsan',
  birthday:'2001-9-1'
},
array:['2018','2019','2020']
  },
modify:function(){
  this.setData({  a:10,
  b:20,
  c:30,
  student:{
    stuid:'201900502',
    name:'lishi',
    birthday:'2001-9-3'
  },
  array:['2028','2029','2030']
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