// pages/zj4/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
array:[
  '第一场 15:00',
  '第二场 16:00',
  '第三场 17:00',
]
  },
formsubmit:function(e){
  var name=e.detail.value.name;
  var id=e.detail.value.id;
  var time=e.detail.value.time;
  wx.showModal({
    content:e.detail.value.name+"同学，你的学号是："+id+"你选择的场次是"+this.data.array[time]+",请确认",
    success:function(res){
      if(res.confirm){
          wx.showModal({
            title:'信息确认',
            content:'你的考场信息已经确认'
          })
          wx.navigateTo({
            url: '../zy10/zy10',
          })
      }else{
        console.log('cancle')
      }
    }
  })
},
choosetime:function(e){
   var index=e.detail.value
   this.setData({
     index:index
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