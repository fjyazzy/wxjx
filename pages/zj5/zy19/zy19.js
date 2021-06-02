// pages/zj5/zy19/zy19.jsitemlist
var itemlist1=['1111111111','2222222','3333333','4444444']
Page({

dp:function(){
var that=this;
wx.showActionSheet({
  itemList: itemlist1,
  itemColor:'#0000ff',
  success:function(res){
    that.setData({
      tapindex:res.tapIndex,
      tapitem:itemlist1[res.tapIndex]
    }) 
  },
  fail:function(res){
that.setData({
  tapindex:-1,
  tapitem:'取消'
})
  },
  complete:function(res){}
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