// pages/zj5/zy1/zy1.js
function createrandomindex(){
  return Math.floor(Math.random()*10)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
index:0,
imgarr:[
  '/images/icon_al.png',
  '/images/icon_al_2.png',
  '/images/icon_buy.png',
  '/images/icon_list.png',
  '/images/icon_more.png',
  '/images/icon_more_2.png',
  '/images/icon_buy_2.png',
  '/images/icon_list_2.png',
  '/images/icon_msg_2.png',
  '/images/icon_user.png'
]
  },
changeface:function(){
 this.setData({
   index:createrandomindex()
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
    var that=this;
    wx.onAccelerometerChange(
      function(res){
        if(res.x>0.5||res.y>0.5||res.z>0.5){
          wx.showToast({
            title:'摇一摇成功过',
            icon:'success',
            duration:2000
          })
          that.changeface()
        }
      }
    )
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