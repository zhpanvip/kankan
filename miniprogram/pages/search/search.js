// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gradeLabel: {
      primarySchool: [{
        labelName: "小学",
        lableCode: 101,
      }, {
        labelName: "一年级",
        lableCode: 101001
      }, {
        labelName: "二年级",
        lableCode: 101002
      }, {
        labelName: "三年级",
        lableCode: 101003
      }, {
        labelName: "四年级",
        lableCode: 101004
      }, {
        labelName: "五年级",
        lableCode: 101005
      }, {
        labelName: "六年级",
        lableCode: 101006
      }],
      juniorSchool: [{
        labelName: "初中",
        lableCode: 102,
      }, {
        labelName: "初一",
        lableCode: 102001
      }, {
        labelName: "初二",
        lableCode: 102002
      }, {
        labelName: "初三",
        lableCode: 102003
      },],
      highSchool: [{
        labelName: "高中",
        lableCode: 103,
      }, {
        labelName: "高一",
        lableCode: 103001
      }, {
        labelName: "高二",
        lableCode: 103002
      }, {
        labelName: "高三",
        lableCode: 103003
      },]
    },

    writingCountLabel: [{
      labelName: "50字",
      labelCode: 201
    },
    {
      labelName: "100字",
      labelCode: 202
    },
    {
      labelName: "200字",
      labelCode: 203
    },
    {
      labelName: "300字",
      labelCode: 204
    },
    {
      labelName: "400字",
      labelCode: 205
    },
    {
      labelName: "500字",
      labelCode: 206
    },
    {
      labelName: "600字",
      labelCode: 207
    },
    {
      labelName: "800字",
      labelCode: 208
    },
    {
      labelName: "1000字",
      labelCode: 209
    }
    ],

    typeLabel: [{
      labelName: "写人",
      labelCode: 301
    },
    {
      labelName: "叙事",
      labelCode: 302
    },
    {
      labelName: "写景",
      labelCode: 303
    },
    {
      labelName: "状物",
      labelCode: 304
    },
    {
      labelName: "议论文",
      labelCode: 305
    },
    {
      labelName: "记叙文",
      labelCode: 306
    },
    {
      labelName: "说明文",
      labelCode: 307
    },
    {
      labelName: "应用文",
      labelCode: 308
    },
    {
      labelName: "书信",
      labelCode: 309
    }
    ],

    showGrade: false,
    showCount: false,
    showType: false,
  },

  showGradePop: function () {
    if (this.data.showGrade) {
      this.hidePopWindow();
    } else {
      this.setData({
        showGrade: true,
        showCount: false,
        showType: false,
      })
    }
  },

  showCountPop: function () {
    if (this.data.showCount) {
      this.hidePopWindow();
    } else {
      this.setData({
        showGrade: false,
        showCount: true,
        showType: false,
      })
    }
  },

  showTypePop: function () {
    if (this.data.showType) {
      this.hidePopWindow();
    } else {
      this.setData({
        showGrade: false,
        showCount: false,
        showType: true,
      })
    }
  },

  hidePopWindow: function () {
    this.setData({
      showGrade: false,
      showCount: false,
      showType: false,
    })
  },

  onSearch: function (view) {
    wx.showToast({
      title: 'Search',
      icon: '',
      image: '',
      duration: 1000,
      mask: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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