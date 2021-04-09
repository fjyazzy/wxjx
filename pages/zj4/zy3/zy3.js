// pages/zj4/zy3/zy3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myfontsize:'25px'
  },
checkboxchange:function(e){
var text=[];
var mybold1='';
var myitalic1='';
var myunderline1='';
text=e.detail.value;
for (var i=0;i<text.length;i++){
  if(text[i]=='isBold'){
    mybold1='bold';
  }
  if(text[i]=='isItalic'){
    myitalic1='italic';
  }
  if(text[i]=='isUnderline'){
    myunderline1='underline';
  }   
}
this.setData({
  mybold:mybold1,
  myitalic:myitalic1,
  myunderline:myunderline1,
}); 
console.log(text[0]);
},
radiochange:function(e){
  this.setData({
    myfontsize:e.detail.value
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