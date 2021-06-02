// pages/zj5/zy3/zy3.js
var ctx=wx.createCanvasContext('myCanvas')
Page({
  clear:function(){
    ctx.draw()
  },
  drawdot:function(e){
    ctx.arc(200,200,10,0,2*Math.PI);
    ctx.setFillStyle('black');
    ctx.fill();
    ctx.draw()
  },
  drawcircle:function(){
    ctx.setFillStyle('black');
    ctx.arc(200,200,10,0,2*Math.PI);
    ctx.fill();
    ctx.setStrokeStyle('red');
    ctx.moveTo(300,200);
    ctx.arc(200,200,100,0,2*Math.PI);
    ctx.stroke()
    ctx.draw()
  },
  drawdash:function(){
     ctx.setStrokeStyle('red');
     ctx.setLineDash([20,10]);
     ctx.setLineWidth(10);
     ctx.moveTo(50,100);
     ctx.lineTo(250,100);
     ctx.lineTo(150,300);
     ctx.lineTo(50,100);
     ctx.stroke();
     ctx.draw();
     ctx.setLineDash([0,0]);
     ctx.setLineWidth(1);
  },
  drawtext:function(){
    ctx.setFillStyle('red');
    ctx.setFontSize(40);
    ctx.setTextBaseline('bottom');
    ctx.rotate(30*Math.PI/180);
    ctx.fillText('福建水利电力',80,80);
    ctx.draw();
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