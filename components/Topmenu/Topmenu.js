Component({
  properties: {
    uname: { // 属性名 uname
      type: String, 
      value: '游客', 
      observer(newVal, oldVal, changedPath) {
      }
    },
    usite:{// 属性名 usite
      type: String,
      value:'http://',
    },
  },

  data: {
    TopMenuList: [],
  },
  attached() {
    this.showpage();
  },
  methods: {
    //显示页面代码
    showpage:function(){
      const db=wx.cloud.database()
      db.collection('Topmenu').where({
        
      }).get({
          complete:res=>{
            this.setData({
            })
          },
          success:res=>{
            this.setData({
              TopMenuList:res.data 
            })
            console.log('[数据库] [topmenu] 成功: ', res)
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

  },



})
