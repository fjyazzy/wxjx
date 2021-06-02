// pages/zj6/zy3/zy3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
fiel1:''
  },
  doQuery:function(e){
    const db=wx.cloud.database()
    db.collection('myusers').where({
      _id:'2'
    }).get({
        complete:res=>{
          this.setData({
          })
        },
        success:res=>{
          this.setData({
            fiel1:res.data[0].xm
          })
          console.log('[数据库] [查询记录] 成功: ', res)
        },
        fail:err=>{
          wx.showToast({
            icon:"none",
            title:'查询失败'
          })
        }
    }
    )
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