// pages/category/category.js
const app = getApp()
Page({
  data: {
    pagelist:{},
    id:0,
    title: "推荐文章",
    uhide: 0,
  },
  onLoad: function (options) {
    this.getData(options);
  },
  getData: function (options) {
    const db=wx.cloud.database()
    db.collection('Pages').where({
      mlno:options.id
    }).get({
        complete:res=>{
          this.setData({
          })
        },
        success:res=>{
          this.setData({
            pagelist:res.data 
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

    this.setData({
      id: options.id,
      title: options.title
    });
  },
  //点击切换隐藏和显示
  toggleBtn: function (event) {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = event.currentTarget.id;
    console.log(itemId);
    if (toggleBtnVal == itemId) {
      that.setData({
        uhide: 0
      })
    } else {
      that.setData({
        uhide: itemId
      })
    }
  }


})