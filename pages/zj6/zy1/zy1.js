// pages/zj6/zy1/zy1.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
userinfo:{},
hasuserinfo:false,
caniuse:wx.canIUse('button.open-type.getUserInfo'),
openID:'',
detail:'点击头像显示详细信息'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success:res=>{
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success:res=>{
              this.setData({
                  userinfo:res.userInfo,
                  hasuserinfo:true
              })
            }
          })
        }
      }
    })
    this.getopenid()
  },

getuserinfo:function(e){
console.log(e)
if(e.detail.userInfo){
  this.setData({
    userinfo:e.detail.userInfo,
    hasuserinfo:true
  })
}else{
  wx.showModal({
    title:e.detail.errMsg,
    content:'小程序需要用户授权公开信息才能继续运行'
  })
}
},
getopenid:function(e){
  var that=this;
  wx.showLoading({title:'获取用户openID中.....'});
  wx.cloud.callFunction({
    name:'login',
    data:{},
    complete:res=>{wx.hideLoading()},
    success:res=>{
      console.log('[云函数] [login] user openid: ', res.result.openid);
      wx.showModal({
        cancelColor: 'cancelColor',
        title:"openid",
        content:'openid:' + res.result.openid
      });
      that.setData({
        //openID:res.result.openid,
      })},
      fail:res=>{
        console.log('[云函数] [login] 执行失败');
        that.setData({
          //openID:'000000000',
        })
      }
  })
},
getdetail:function(e){
var userinf=this.data.userinfo;
var gender=userinf.gender;
var detailstr='性别:'+gender;
detailstr=detailstr+"\n国家:"+userinf.country;
this.setData({
  detail:detailstr
})
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