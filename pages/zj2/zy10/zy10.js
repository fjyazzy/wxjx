// pages/zy10/zy10.js
var rand,sum;
function createrand(){
   rand=[];
   sum=0;
  for(var i=0;i<6;i++){
    var r=(Math.random()*100).toFixed(2)*1;
    rand.push(r);
    sum+=rand[i];
    console.log(rand[i]);
  }
  console.log(sum);
}

Page({
   
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    createrand();
    this.setData({
      rand:rand,
      sum:sum.toFixed(2)
    });

  },
newrand:function(){
  createrand();
  this.setData({
    rand:rand,
    sum:sum.toFixed(2)
  });
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