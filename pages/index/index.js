// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
import todo from '../../components/calendar/plugins/todo'
import selectable from '../../components/calendar/plugins/selectable'
import solarLunar from '../../components/calendar/plugins/solarLunar/index'
import timeRange from '../../components/calendar/plugins/time-range'
import week from '../../components/calendar/plugins/week'
import holidays from '../../components/calendar/plugins/holidays/index'
import plugin from '../../components/calendar/plugins/index'
var util = require('../../utils/util.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    currentDate: '', // 初始时不显示日期，将在onLoad中设置  
    calendarConfig: {
      theme: 'elegant',
      markToday: '今'
      // showHolidays: true,
      // emphasisWeek: true,
      // chooseAreaMode: true
      // defaultDate: '2020-9-8',
      // autoChoosedWhenJump: true
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },

  onLoad() {
    console.log(util.formatTime(new Date()))
    this.setCurrentDate(); 
  },
  onShow(){
    // const calendar = this.selectComponent('#calendar').calendar;
    // calendar.jump()
  },
  //index.js
select: function (e) {
  this.setData({
      selectVal:e.detail
    })
    console.log(e.detail)
  },
  addCourse() {
    console.log(12121)
    wx.navigateTo({
      url: '../addCourse/index'
    })
  },
  // 设置当前日期  
  setCurrentDate: function() {  
    let now = new Date();  
    let month = (now.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以要+1  
    let day = now.getDate().toString().padStart(2, '0');  
    let year = now.getFullYear().toString().substr(-2); // 如果不需要年份，可以去掉这行代码  
    let formattedDate = `${month}月${day}日`; // 如果需要年份，可以拼接为 `${year}年${month}月${day}日`  
    this.setData({  
      currentDate: formattedDate  
    });  
  },  
  
  // 切换到上一天  
  prevDate: function() {  
    let now = new Date(this.data.currentDate.replace(/月/g, '-').replace(/日/g, '') + '-01'); // 转换为Date对象  
    now.setDate(now.getDate() - 1); // 减去一天  
    this.updateDateDisplay(now);  
  },  
  
  // 切换到下一天  
  nextDate: function() {  
    let now = new Date(this.data.currentDate.replace(/月/g, '-').replace(/日/g, '') + '-01'); // 转换为Date对象  
    now.setDate(now.getDate() + 1); // 增加一天  
    this.updateDateDisplay(now);  
  },  
  
  // 更新日期显示  
  updateDateDisplay: function(date) {  
    let month = (date.getMonth() + 1).toString().padStart(2, '0');  
    let day = date.getDate().toString().padStart(2, '0');  
    let formattedDate = `${month}月${day}日`;  
    this.setData({  
      currentDate: formattedDate  
    });  
  }  
})
