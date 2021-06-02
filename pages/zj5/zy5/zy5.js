// pages/zj5/zy5/zy5.js
Page({

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
     this.ctx=wx.createCanvasContext('mycanvas', this)
  },
  drawrect:function(){
     var ctx=this.ctx;
     ctx.rect(0,0,50,50);
     ctx.stroke();
     ctx.draw(true);
  },
  scale:function(){
    this.ctx.scale(2,2);
    this.drawrect();
  },
  translate:function(){
    this.ctx.translate(20,20);
    this.drawrect();
  },
  rotate:function(){
    this.ctx.rotate(30*Math.PI/180);
    this.drawrect();
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