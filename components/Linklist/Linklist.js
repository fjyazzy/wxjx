// Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: []
  },
  attached() {
    this.showpage();
  },
  methods: {
    //显示页面代码
    showpage: function () {
      const db=wx.cloud.database()
      db.collection('NewsList').where({
        
      }).get({
          complete:res=>{
            this.setData({
            })
          },
          success:res=>{
            this.setData({
              ItemList:res.data 
            })
            console.log('[数据库] [查询记录] 成功: ', res)
          },
          fail:err=>{
            wx.showToast({
              icon:"none",
              title:'查询失败'
            })
          }
      }
      )  
      
    }

  }
})
