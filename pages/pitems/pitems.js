// pages/pitems/pitems.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nrlist: {},
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options);
    console.log("pageno:" + options.id)
  },
  getData: function (options) {
    const db=wx.cloud.database()
    db.collection('Pages').where({
      pageno:options.id
    }).get({
        complete:res=>{
          this.setData({
          })
        },
        success:res=>{
          this.setData({
            nrlist:res.data 
          })
          console.log('[数据库] [Pages] 成功: ', res)
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