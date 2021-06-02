// pages/zj5/zy11/zy11.js
var tempFilePaths,tempFilePath;
Page({

  /**
   * 页面的初始数据
   */
  data: {
msg:'',
hidden:true
  },
openfile:function(){
  var that=this;
  wx.chooseImage({
    success(res){
      tempFilePaths=res.tempFilePaths
      console.log(tempFilePaths)
      that.setData({
        imgpath:tempFilePaths[0],
        hidden:false,
        msg:tempFilePaths[0]+'文件打开成功'
      })
    }
  })
},
savefile:function(){
  var that=this;
wx.saveFile({
  tempFilePath:tempFilePaths[0],
  success(res){
    console.log(tempFilePaths)
    that.setData({
      hidden:false,
      msg:res.savedFilePath+'文件保存成功'
    })
  }
})
},

getsavedfileinfo:function(){
var i,file;
var that=this;
wx.getSavedFileList({
  success:function(res){
    if(res.fileList.length==0){
      hidden:false;
      msg:'没有文件信息'
    }else{
      for(i=0;i<res.fileList.length;i++){
        file=res.fileList[i]
        console.log(file.filePath)
        wx.getSavedFileInfo({
          filePath: file.filePath,
          success:function(res){
            that.setData({
              hidden:false,
              msg:res.size+' '+res.createTime
            })
          }
        })
      }

    }
  }
})
},
removedsavedfile:function(){
  var i,file;
  var that=this;
  wx.getSavedFileList({
    success:function(res){
      for(i=0;i<res.fileList.length;i++){
        file=res.fileList[i];
        wx.removeSavedFile({
          filePath: file.filePath,
          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
        console.log('删除文件：'+i)
      }
      that.setData({
        hidden:false,
        msg:'文件全部删除' 
      })
    }
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