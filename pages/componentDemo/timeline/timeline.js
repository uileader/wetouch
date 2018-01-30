// timeline.js
export default {
  data () {
    return {
      list: [
        {time: '今天 05-14', content: '0.28'},
        {time: '周一 05-15', content: '0.52'},
        {time: '周二 05-16', content: '待领取'},
        {time: '周三 05-17', content: '支付后获得'},
        {time: '周四 05-18', content: '支付后获得'},
        {time: '周五 / 周六', content: '已累积'}
      ],
      left: (window.innerWidth - 280) / 2,
      winWidth: window.innerWidth,
      color: ''
    }
  }
}
