// pages/zj5/zy12/zy12.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '',
    hidden: true
  },
  student: function (id, name, chinese, math, english) {
    this.id = id;
    this.name = name;
    this.chinese = chinese;
    this.math = math;
    this.english = english;
  },

  loadstudents: function () {
    var students = new Array();
    var stu1 = new this.student('1', 'tom', '60', '70', '80');
    var stu2 = new this.student('2', 'jerry', '70', '70', '80');
    students.push(stu1);
    students.push(stu2);
    return students;
  },

  setstorage: function () {
    var that = this
    wx.setStorage({
      data: this.loadstudents(),
      key: '高一',
      success: function (res) {
        that.setData({
          hidden: false,
          msg: '数据保存成功'
        })
      }
    })
  },

  setstoragesync: function () {
    var that = this
    wx.setStorageSync('高二',this.loadstudents());
    that.setData({
      hidden: false,
      msg: '同步数据保存成功'
    })
  },

  getstorage: function () {
    var that = this
    wx.getStorage({
      key: '高一',
      success: function (res) {
        var length = res.data.length;
        if (length > 1) {
          that.setData({
            hidden: false,
            msg: '数据:' + res.data[length - 2].name
          })
          console.log(res.data)
        }
      },
      fail: function () {
        that.setData({
          hidden: false,
          msg: '取数据失败'
        })
      }
    })
  },

  getstoragesync: function () {
    var that = this
    var res=wx.getStorageSync('高二');
    var length = res.length;
    if (length > 1) {
      that.setData({
        hidden: false,
        msg: '同步数据:' + res[length - 1].name
      })
      console.log(res.data)
    }

  },


  getstorageinfo: function () {
    var that = this
    wx.getStorageInfo({
      success: function (res) {
        that.setData({
          hidden: false,
          msg: '数据:' + res
        })
      },
      fail: function () {
        that.setData({
          hidden: false,
          msg: '取数据失败'
        })
      }
    })
  },

  getstorageinfosync: function () {
    var that = this
    var res=wx.getStorageInfoSync();
try{
  that.setData({
    hidden: false,
    msg: '数据:' + res
  })
}catch(e){
  that.setData({
    hidden: false,
    msg: '取数据失败'
  })
}

  },

  removestorage: function () {
    var that = this;
    wx.removeStorage({
      key: '高一',
      success: function (res) {
        that.setData({
          hidden: false,
          msg: '删除' 
        })
      },
      fail: function () {
        that.setData({
          hidden: false,
          msg: '删除数据失败'
        })
      }
    })
  },

  removestoragesync: function () {
    var that = this
    try{
      wx.removeStorageSync('高二');
      that.setData({
        hidden: false,
        msg: '删除okay'
      })
    }catch(e){
      that.setData({
        hidden: false,
        msg: '删除数据失败'
      })
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