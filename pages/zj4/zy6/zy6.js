// pages/zj4/zy6/zy6.js
function person(name,sex,birthplace,birthday,height,weight){
  this.name=name
  this.sex=sex
  this.birthplace=birthplace
  this.birthday=birthday
  this.height=height
  this.weight=weight
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
flag:true,
gender:["男","女"]
  },
nameinput:function(e){
  this.name=e.detail.value
},
heightinput:function(e){
  this.height=e.detail.value
},
weightinput:function(e){
  this.weight=e.detail.value
},
pickersex:function(e){
  this.sex=this.data.gender[e.detail.value]
  this.setData({
    sex:this.sex
  })
},
pickerregion:function(e){
  this.birthplace=e.detail.value
  this.setData({
    birthplace:this.birthplace
  })
},
pickerdate:function(e){
  this.birthday=e.detail.value
  this.setData({
    birthday:this.birthday
  })
},
showmessage:function(e){
  var p=new person(this.name,this.sex,this.birthplace,this.birthday,this.height,this.weight)
  this.setData({
    flag:false,
    person:p
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