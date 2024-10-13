// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  onShow(){
    wx.showModal({
      title: '重新编辑',
      content: '下架今天的所有课程(其他学员将看不到这些课程)',
      cancelText: '取消',
      confirmText: '重新编辑',
      confirmColor: '#21B664',
      success (res) { 
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  handlerGohomeClick() {
    console.log(12121)
    wx.navigateTo({
      url: '../index/index'
    });
  },
})
