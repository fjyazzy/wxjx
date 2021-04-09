// pages/zj4/zy2/zy2.js
Page({
  clear:function(){
    this.setData({
      a:'',
      b:'',
      c:'',
      result:''
    })
  },
  formsubmit:function(e){
    var a=parseFloat(e.detail.value.a);
    var b=parseFloat(e.detail.value.b);
    var c=parseFloat(e.detail.value.c);
    var area;
    if(a+b<=c||a+c<=b||b+c<=a){
      wx.showToast({
        title:'三角形的两边之和小于第三边',
        icon:'none',
        duration:2000
      });
      this.clear();
      return;
    }
    else{
      var s=(a+b+c)/2;
      area=Math.sqrt(s*(s-a)*(s-b)*(s-c))
    };
    this.setData({
      result:area
    });
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