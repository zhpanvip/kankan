// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    primarySchool: [{
      labelName: "小学",
      lableCode: 100,
      isSelected: true
    }, {
      labelName: "一年级",
      lableCode: 100
    }, {
      labelName: "二年级",
      lableCode: 100
    }, {
      labelName: "三年级",
      lableCode: 100
    }, {
      labelName: "四年级",
      lableCode: 100
    }, {
      labelName: "五年级",
      lableCode: 100
    }, {
      labelName: "六年级",
      lableCode: 100
    }],
    juniorSchool: [],
    highSchool: [],
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