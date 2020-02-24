// miniprogram/pages/mine/mine.js
import {getUserInfo} from "../../utils/UserInfoTools";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:getUserInfo(),
  },

  toMyCollect: function(view) {
    wx.navigateTo({
      url: `../my-collect/my-collect?type=1`
    })
  },

  toMyLike: function(view) {
    wx.navigateTo({
      url: `../my-collect/my-collect?type=1`
    })
  },

  toUserInfo:function(view){
    wx.navigateTo({
      url: `../user_info/user_info`
    })
  },

  toSelectGrade:function(){
    wx.navigateTo({
      url: `../select_grade/select_grade`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})