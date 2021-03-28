// pages/zy8/zy8.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     flag:true,
     name:'',
     chinese_score:'',
     math_score:'',
     avrage:''
  },
nameinput:function(e){
  this.setData({
    name:e.detail.value
  })
},
chineseinput:function(e){
  this.setData({
    chinese_score:e.detail.value
  })
},
mathinput:function(e){
  this.setData({
    math_score:e.detail.value
  })
},
mysubmit:function(e){
  if(this.data.name==''||this.data.chinese_score==''||this.data.math_score==''){return;}
  else{
    var avg=(this.data.chinese_score*1+this.data.math_score*1)/2;
    this.setData({
      avrage:avg,
      flag:false
    });
  }
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