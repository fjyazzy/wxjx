Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  /**   * 组件的初始数据   */
  data: {
    newList: [
      {
        "pageno": "1",
        "pagename": "itemccccc",
        "pagetitle": "linkccccccccccc",
        "pagetext": "linkcccccccc"
      },
      {
        "pageno": "2",
        "pagename": "itemddddd",
        "pagetitle": "lidddddddddddd",
        "pagetext": "linkdddddddddddd"
      },
      {
        "pageno": "3",
        "pagename": "iteffffffff",
        "pagetitle": "lidffffffffff",
        "pagetext": "linkffffffff"
      }



    ],
  },
  attached() {
  },
  methods: {
    //显示页面代码
    showpage: function () {
      var that = this;
      /*
      wx.request({
        url: that.data.usite + '/cmsv1/apis/getHomePagelist.ashx?mlh=08',
        header: { 'content-type': 'applciation/json;charset=UTF-8' },
        method: 'GET',
        success: function (res) {
          var str2 = res.data.substr(1, res.data.length - 2)
          console.log(str2);
          that.setData({
            newList: JSON.parse(str2),
          })
        },
        fail: function (err) {
          console.log(err)
        }
      })
      */
    }


  }
})