// pages/zy7/zy7.js
Page({

  calc:function(e){
    var x,y;
    var x=e.detail.value;
    if(x<0){
      y=Math.abs(x);
    }else if(x<10){
      y=Math.exp(x)*Math.sin(x);
    }else if(x<20){
      y=Math.pow(x,3);
    }else{
      y=(3+2*x)*Math.log(x);
    }
   this.setData({
    y:y
   })
  },
  /**
   * 页面的初始数据
   */
  data: {

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