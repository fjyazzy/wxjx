// pages/zj5/zy10/zy10.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
latitude:39.93111,
longitude:116.199167,
markers:[{
id:1,
latitude:39.93111,
longitude:116.199167,
iconPath:'../../../images/icon_al.png',
label:{
  content:'我的位置',
  color:'#0000ff',
  bgcolor:'#ffff00',
  fontSize:20
}},{
  latitude:39.92528,
  longitude:116.20111,
  iconPath:'../../../images/icon_al.png',
}
]
  },
chooselocation:function(){
wx.chooseLocation({
  success:function(res){
    console.log(res)
  }
})
},
openlocation:function(){
wx.getLocation({
  type:'gcj02',
  success:function(res){
    wx.openLocation({
      latitude: res.latitude,
      longitude: res.longitude,
      scale:28,
    })
  } 
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