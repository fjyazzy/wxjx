// pages/zj5/zy7/zy7.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
pen:5,
color:'#000000'
  },
isClear:false,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx=wx.createCanvasContext('mycanvas', this)
  },
touchstart:function(e){
this.x1=e.changedTouches[0].x;
this.y1=e.changedTouches[0].y;
if(this.isClear){
  this.ctx.setStrokeStyle('#ffffff');
  this.ctx.setLineCap('round');
  this.ctx.setLine.Join('round');
  this.ctx.setLineWidth(20);
  this.ctx.beginPath();
}else{
  this.ctx.setStrokeStyle(this.data.color);
  this.ctx.setLineWidth(this.data.pen);
  this.ctx.setLineCap('round');
  this.ctx.beginPath();
}
},
touchmove:function(e){
  var x2=e.changedTouches[0].x;
  var y2=e.changedTouches[0].y;
  if(this.isClear){
    this.ctx.save();
    this.ctx.moveTo(this.x1,this.y1);
    this.ctx.lineTo(x2,y2);
    this.ctx.stroke();
    this.x1=x2;
    this.y1=y2;
  }else{
    this.ctx.moveTo(this.x1,this.y1);
    this.ctx.lineTo(x2,y2);
    this.ctx.stroke();
    this.x1=x2;
    this.y1=y2;   
  }
  this.ctx.draw(true);
},
touchend:function(){},
penselect:function(e){
this.setData({
  pen:parseInt(e.currentTarget.dataset.param)
})
this.isClear=false;
},
colorselect:function(e){
this.setData({
  color:e.currentTarget.dataset.param
});
this.color=false;
},
clear:function(){
  this.isClear=true;
},
clearall:function(){
  this.setData({
    pen:5,
    color:'#00000'
  })
  this.ctx.draw();
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