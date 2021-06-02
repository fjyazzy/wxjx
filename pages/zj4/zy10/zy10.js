// pages/zj4/zy10.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getemail:'',
    getpwd:'',
    getpwdconfirm:''
  },

  formsubmit:function(e){
    if(e.detail.value.email.length==0||e.detail.value.password.length==0){
      this.setData({
        showmsg01:'邮箱或密码不得为空',
      })
    }else if(e.detail.value.password!=e.detail.value.confirm){
      this.setData({
        showmsg02:'两次密码不一样',
        getpwd:'',
        getpwdconfirm:''
      })
    }else{
      wx.navigateTo({
        url:'../detail/detail'
      })
    }
  },
  inputemail:function(e){
   var email=e.detail.value
   var checkednum=this.checkEmail(email)
  },
  checkEmail:function(e){
    let  str=/^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-])*\.[a-zA-Z0-9-]{2,6}$/
    if(str.test(email)){return true}
    else{
      wx.showToast({
        title:'邮箱格式错误',
        icon:'loading'
      })
      this.setData({
        getemail:''
      })
      return false
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