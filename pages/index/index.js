// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [
      'http://owx19rg0d.bkt.clouddn.com/WechatIMG256.jpeg',
      'http://owx19rg0d.bkt.clouddn.com/WechatIMG258.jpeg',
      'http://owx19rg0d.bkt.clouddn.com/WechatIMG259.jpeg',
      'http://owx19rg0d.bkt.clouddn.com/WechatIMG260.jpeg',
      'http://owx19rg0d.bkt.clouddn.com/WechatIMG551.jpeg',
      'http://owx19rg0d.bkt.clouddn.com/WechatIMG262.jpeg',
      'http://owx19rg0d.bkt.clouddn.com/WechatIMG263.jpeg',
      'http://owx19rg0d.bkt.clouddn.com/WechatIMG264.jpeg',
      'http://owx19rg0d.bkt.clouddn.com/WechatIMG410.jpeg'
    ]
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
  
  },

  previewImg:function(e){
    let selected = e.currentTarget.id;

    wx.previewImage({
      current: this.data.imgs[Number(selected)],
      urls: this.data.imgs,
    })
  },
  callMe:function(e){
    let phone = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },
  findInMap:function(){
    wx.openLocation({
      latitude: 31.7763300000,
      longitude: 117.2607100000,
      name:'安徽尚学堂教育（海恒分校)',
      address:'安徽省合肥市蜀山区经开区海恒步行街日之惠超市4楼青少年活动中心431室.'
    })
  }
})