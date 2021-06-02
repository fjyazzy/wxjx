// pages/zj5/zy14/zy14.js
Page({

  startcompass: function () {
    var that = this;
    wx.startCompass({
      success: function (res) {
        wx.onCompassChange(function (res) {
          that.setData({
            rescompass: res
          })
        })
      }
    })
  },
  stopcompass: function () {
    var that = this;
    wx.stopCompass({
      success: (res) => {
        console.log('罗盘已经停止')
      },
    })
  },

  startacc: function () {
    var that = this;
    wx.startAccelerometer({
      success: function () {
        wx.onAccelerometerChange(
          function (res) {
            that.setData({
              resacc: res
            })
          }
        )
      }
    })
  },
  stopacc: function () {
    wx.stopAccelerometer({
      success: (res) => {
        console.log('加速计已经停止')
      },
    })
  },

  startgyroscope: function () {
    var that = this;
    wx.startGyroscope({
      success: function (res) {
        wx.onGyroscopeChange(
          function (res) {
            that.setData({
              resgyroscope: res
            })
          }
        )
      }
    })
  },
  stopgyroscope: function () {
    wx.stopGyroscope({
      success: (res) => {
        console.log('陀螺仪已经停止')
      },
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