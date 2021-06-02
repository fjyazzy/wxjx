// pages/zj5/zy2/zy2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getinput:function(e){
    this.inputval=10;
    this.inputval=e.detail.value;
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
    var that=this;
    that.isShow=true;
    wx.onAccelerometerChange(
      function(res){
        if(!that.isShow){
          return;
        }
        if(res.x>0.5||res.y>0.5||res.z>0.5){
          wx.showToast({
            title:'摇一摇成功过',
            icon:'success',
            duration:2000
          })
          that.jc()
        }
      }
    )
  },

  jc:function(){
    var that=this;
    var result=1;
    for(var i=1;i<=that.inputval;i++){
         result=result*i
    }
    this.setData({
      result:result
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
      this.isShow=false;
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