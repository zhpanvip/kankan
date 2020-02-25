// miniprogram/pages/index/index.js
import {
  isLogin
} from "../../utils/UserInfoTools";
import { log } from "../../utils/LogUtils";

const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerData: [{
      imageUrl: "../../images/banner1.png",
      webUrl: ""
    }, {
        imageUrl: "../../images/banner2.png",
        webUrl: ""
      }],
    writings: [{
      title: "你若盛开，清风自来",
      shortContent: "倪瓒曾曰：“兰生萧艾中，未尝损芳馨。”何也？深陷浮沤，兰也是兰，困于泥淖，莲还是莲。只因自身清雅难掩，清风便顺势而来。\n倪瓒曾曰：“兰生萧艾中，未尝损芳馨。”何也？深陷浮沤，兰也是兰，困于泥淖，莲还是莲。只因自身清雅难掩，清风便顺势而来。",
      writingLabels: ["高中", "散文"],
      readingCount: 1024,
      thumbUpCount: 57,
      collectCount: 75,
      writingId: 1,
    },
    {
      title: "细雨闲花皆寂寞,文人英雄应如是",
      shortContent: "寂寞是一根断了的红线，有心人紧紧抓着它，默默等待另一头的牵线人，即使那人早已远去。“细雨湿衣看不见，闲花落地听无声。”每每读起这句，不禁感叹细",
      writingLabels: ["高中", "议论文"],
      writingId: 1,
    },
    {
      title: "浮尘不拂,真珠难露",
      shortContent: "战机防护,止于表象众人服;力排众议,透视本质获真知。沃德借透视本质之笔，书正解之章。故曰:浮尘不拂,真珠难露。透过现象观本质者,往往能化曲为直,傲视群雄。",
      writingLabels: ["小学", "叙事", "400字"]
    },
    {
      title: "绿水青山图",
      shortContent: "你踏着微湿的土壤,淡绿色的裙摆轻拂过大地的发梢,轻转回眸,身后一片碧绿,硕果生机。望着自己的杰作,你展颜一笑,皓眸红唇,晃得娇美的樱花在微风的渲染下,静静飘落在你的头顶",
      writingLabels: ["高中", "议论文"]
    },
    {
      title: "东南风起",
      shortContent: "“凤翱翔于千仞兮，非梧不栖；士伏处于一方矣，非主不依。乐躬耕于南亩兮，吾爱吾庐，聊寄傲于琴书兮，以待天时。”青年一曲歌罢，遥望山路来处，似在沉思。",
      writingLabels: ["高中", "议论文"]
    },
    {
      title: "不器与器",
      shortContent: "孔子认为,君子,不能像器具那样,拘泥于某种特定形态功能,但求一技之长安身;而应当追求“道”,不断“致良知”,探求人间真理。而当今,信息时代洪流滚滚,人们忙碌如蚁,转而追求起“小确幸佛系°的态度"
    },
    {
      title: "荆韵湘语",
      shortContent: "诗经是典型的北方语言：黄土上的事，黄土一样的情感，他是中华平淡的多数，宽厚、坚忍。然而我们最华美的篇章是水的：楚辞。",
      writingLabels: ["高中", "议论文"]
    },
    {
      title: "抛妻弃子之谜",
      shortContent: "这富贵村，虽然名为富贵，但其实是一片山旮旯里的穷乡僻壤，偶尔飞出一两个金凤凰，萧顺就是一个。去年刚刚医科毕业的他正在城里医院里履行着天职。家里有一老母，还有一个快要生娃的妻子，她们并不知道萧顺的工作单位在哪里，因为这山村实在是太闭塞了，惟一与外界的联系就是那一月才来一次的邮差。",
      writingLabels: ["高中", "议论文"]
    },
    {
      title: "面壁求真，拒绝炒作",
      shortContent: "“真正的宁静不是远离车马喧嚣，而是在心灵中种菊修篱。”《林徽因传》的作者白落梅在这本传记中如是说。年轻的欧雷·布尔面对评论家的意见，没有在浮躁的炒作中随波逐流，而是虚心接纳，"
    },
    {
      title: "24小时共享书店",
      shortContent: "首先要有空间。最好是在专门的书房，书房不求大，但求有一张宽敞的书桌，一排顶到天花板的书架。然而，苦于房价居高等显而易见的理由",
      writingLabels: ["高中", "议论文"]
    },
    {
      title: "你若盛开，清风自来",
      shortContent: "倪瓒曾曰：“兰生萧艾中，未尝损芳馨。”何也？深陷浮沤，兰也是兰，困于泥淖，莲还是莲。只因自身清雅难掩，清风便顺势而来。\n倪瓒曾曰：“兰生萧艾中，未尝损芳馨。”何也？深陷浮沤，兰也是兰，困于泥淖，莲还是莲。只因自身清雅难掩，清风便顺势而来。",
      writingLabels: ["高中", "议论文"]
    },
    {
      title: "细雨闲花皆寂寞,文人英雄应如是",
      shortContent: "寂寞是一根断了的红线，有心人紧紧抓着它，默默等待另一头的牵线人，即使那人早已远去。“细雨湿衣看不见，闲花落地听无声。”每每读起这句，不禁感叹细",
      writingLabels: ["高中", "议论文"]
    },
    {
      title: "浮尘不拂,真珠难露",
      shortContent: "战机防护,止于表象众人服;力排众议,透视本质获真知。沃德借透视本质之笔，书正解之章。故曰:浮尘不拂,真珠难露。透过现象观本质者,往往能化曲为直,傲视群雄。",
      writingLabels: ["高中", "议论文"]
    },
    {
      title: "绿水青山图",
      shortContent: "你踏着微湿的土壤,淡绿色的裙摆轻拂过大地的发梢,轻转回眸,身后一片碧绿,硕果生机。望着自己的杰作,你展颜一笑,皓眸红唇,晃得娇美的樱花在微风的渲染下,静静飘落在你的头顶",
      writingLabels: ["高中", "议论文"]
    },
    {
      title: "东南风起",
      shortContent: "“凤翱翔于千仞兮，非梧不栖；士伏处于一方矣，非主不依。乐躬耕于南亩兮，吾爱吾庐，聊寄傲于琴书兮，以待天时。”青年一曲歌罢，遥望山路来处，似在沉思。",
      writingLabels: ["高中", "议论文"]
    },
    {
      title: "不器与器",
      shortContent: "孔子认为,君子,不能像器具那样,拘泥于某种特定形态功能,但求一技之长安身;而应当追求“道”,不断“致良知”,探求人间真理。而当今,信息时代洪流滚滚,人们忙碌如蚁,转而追求起“小确幸佛系°的态度"
    },
    {
      title: "荆韵湘语",
      shortContent: "诗经是典型的北方语言：黄土上的事，黄土一样的情感，他是中华平淡的多数，宽厚、坚忍。然而我们最华美的篇章是水的：楚辞。",
      writingLabels: ["高中", "议论文"]
    },
    {
      title: "抛妻弃子之谜",
      shortContent: "这富贵村，虽然名为富贵，但其实是一片山旮旯里的穷乡僻壤，偶尔飞出一两个金凤凰，萧顺就是一个。去年刚刚医科毕业的他正在城里医院里履行着天职。家里有一老母，还有一个快要生娃的妻子，她们并不知道萧顺的工作单位在哪里，因为这山村实在是太闭塞了，惟一与外界的联系就是那一月才来一次的邮差。",
      writingLabels: ["高中", "议论文"]
    },
    {
      title: "面壁求真，拒绝炒作",
      shortContent: "“真正的宁静不是远离车马喧嚣，而是在心灵中种菊修篱。”《林徽因传》的作者白落梅在这本传记中如是说。年轻的欧雷·布尔面对评论家的意见，没有在浮躁的炒作中随波逐流，而是虚心接纳，"
    },
    {
      title: "24小时共享书店",
      shortContent: "首先要有空间。最好是在专门的书房，书房不求大，但求有一张宽敞的书桌，一排顶到天花板的书架。然而，苦于房价居高等显而易见的理由",
      writingLabels: ["高中", "议论文"]
    },
    ],
    loadingSuccess: true,
    statusBarHeight: App.globalData.statusBarHeight,
  },

  onItemClick: function (view) {
    const id = view.currentTarget.dataset.id;
    const writing = this.data.writings[id];
    const writingId = writing.writingId;
    wx.navigateTo({
      url: `../writings/writings?writingId=${writingId}`
    })
  },
  toSearch: function (view) {
    wx.navigateTo({
      url: `../search/search`
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!isLogin()) {
      this._wxLogin();
    }
  },

  /**
   * 调用微信登录获取登录code
   */
  _wxLogin: function () {
    wx.login({
      success: res => {
        if (res.code) {
          this.loginWithCode(res.code);
        }
      }
    })
  },

  /**
   * 通过code换取userId,进行登录
   * @param code 微信登录code
   */
  loginWithCode: function (code) {
    log("loginWithCode")
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