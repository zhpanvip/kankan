// miniprogram/pages/select_grade/select_grade.js
import {
  log
} from "../../utils/LogUtils";
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
      }, ],
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
      }, ]
    }
  },

  onPrimaryItemClick: function(labelData) {
    const selectedLabel = labelData.detail;
    const primarySchool = this.data.gradeLabel.primarySchool;
    for (var i = 0; i < primarySchool.length; i++) {
      if (primarySchool[i].lableCode == selectedLabel.lableCode) {
        primarySchool[i].isSelected = true;
      } else {
        this.data.gradeLabel.primarySchool[i].isSelected = false;
      }
    }
    this.setData({
      gradeLabel: this.data.gradeLabel
    })
    this.onGradeLabelSelected(selectedLabel);
  },

  juniorItemClick: function(labelData) {
    const selectedLabel = labelData.detail;
    const juniorSchool = this.data.gradeLabel.juniorSchool;
    for (var i = 0; i < juniorSchool.length; i++) {
      if (juniorSchool[i].lableCode == selectedLabel.lableCode) {
        juniorSchool[i].isSelected = true;
      } else {
        this.data.gradeLabel.juniorSchool[i].isSelected = false;
      }
    }
    this.setData({
      gradeLabel: this.data.gradeLabel
    })
    this.onGradeLabelSelected(selectedLabel);
  },

  onHighItemClick: function(labelData) {
    const selectedLabel = labelData.detail;
    const highSchool = this.data.gradeLabel.highSchool;
    for (var i = 0; i < highSchool.length; i++) {
      if (highSchool[i].lableCode == selectedLabel.lableCode) {
        highSchool[i].isSelected = true;
      } else {
        this.data.gradeLabel.highSchool[i].isSelected = false;
      }
    }
    this.setData({
      gradeLabel: this.data.gradeLabel
    })
    this.onGradeLabelSelected(selectedLabel);
  },

  onGradeLabelSelected: function(selectedLabel) {
    const pages=getCurrentPages();
    const prePage=pages[pages.length-2];
    prePage.setUserGrade(selectedLabel);
    setTimeout(function() {
      wx.navigateBack({
        delta: 1
      })
    }, 200);

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