// pages/zj5/zy8/zy8.js
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
this.animation=wx.createAnimation()
  },
  rotate:function(){
    this.animation.rotate(Math.random()*720-360).step()
    this.setData({
      animation:this.animation.export()
    })
},
scale:function(){
  this.animation.scale(Math.random()*2).step()
  this.setData({
    animation:this.animation.export()
  })
},
translate:function(){
  this.animation.translate(Math.random()*100-50,Math.random()*100-50).step()
  this.setData({
    animation:this.animation.export()
  })
},
skew:function(){
  this.animation.skew(Math.random()*90,Math.random()*90).step()
  this.setData({
    animation:this.animation.export()
  })
},
rotateandscale:function(){
  this.animation.rotate(Math.random()*720-360)
  .scale(Math.random()*2)
  .step()
  this.setData({
    animation:this.animation.export()
  })
},
rotatethenscale:function(){
  this.animation.rotate(Math.random()*720-360).step()
  .scale(Math.random()*2).step()
  this.setData({
    animation:this.animation.export()
  })
},
all:function(){
  this.animation.rotate(Math.random()*720-360)
  .scale(Math.random()*2)
  .skew(Math.random()*90,Math.random()*90)
  .step()
  this.setData({
    animation:this.animation.export()
  })
},
allinqueue:function(){
  this.animation.rotate(Math.random()*720-360).step()
  .scale(Math.random()*2).step()
  .skew(Math.random()*90,Math.random()*90).step()
  this.setData({
    animation:this.animation.export()
  })
},
reset:function(){
  this.animation.rotate(0,0)
  .scale(1)
  .translate(0,0)
  .skew(0,0)
  .step({duration:0})
  this.setData({
    animation:this.animation.export()
  })
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