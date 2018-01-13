// slideView.js
export default {
  data () {
    return {
      list1: [
        { height: 80, color: '#FCB300', text: '第37周|总票房8.11亿较上周上涨4.38%，《猩猿崛起》突破票房10亿', switcher: 'off', icon: 'api-access'},
        { height: 80, color: '#FF7360', text: '总票房9.60亿较上周 下降30.64%，《战狼2》突破票房10亿', switcher: 'off', icon: 'api-network'},
        { height: 80, color: '#39CCC5', text: '本周悬疑《心理罪》、喜剧《鲛珠传》、动作《上船下套》等多部电影在电影院上映。', switcher: 'off', icon: 'api-configure'},
        { height: 80, color: '#FCB300', text: '第64周|总票房12亿较上周上涨2.85%，《票吧》突破票房10亿', switcher: 'off', icon: 'api-access'}
      ],
      list2: [
        {switcher: 'off', name: '阿强', address: '北京', time: '2010/12/1', buttonText: '删除'},
        {switcher: 'off', name: '安生', address: '北京', time: '2010/11/13', buttonText: '删除'},
        {switcher: 'off', name: '010-52013145', address: '北京', time: '2010/09/13', buttonText: '删除'}
      ],
      list3: [
        { head: require('#/images/swipeOut01.png'), name: '前端早读课', time: '2017/10/4', img: require('#/images/swipeOut04.png'), text: '【视频】基于Recat Native的跨三端技术实践' },
        { head: require('#/images/swipeOut02.png'), name: '极乐技术社区', time: '2017/9/5', img: require('#/images/swipeOut05.png'), text: '【教程】微信小程序--蓝牙连接开发总结' },
        { head: require('#/images/swipeOut03.png'), name: '前端人', time: '2017/8/20', img: require('#/images/swipeOut06.png'), text: ' 如丝般顺滑：CSS3实现60帧的动画' }
      ],
      el: 0,
      el2: 0
      // swiperOutheight:[50, 50, 50, 50]
    }
  },
  methods: {
    del (index) {
      this.list1[index].height = 0
      // 实际使用时将该项id传给后台即可，不需要在前台真正删除数据。
      // 前台直接删除数据会导致一些问题。
      // setTimeout(() => {
      //   this.list1.splice(index, 1, {})
      // }, 500)
    },
    tap (message) {
      ui.showToast({ title: message })
    },
    changeHandler1 (index) {
      if (this.el !== index) {
        this.$refs.swipe[this.el].close()
        this.el = index
      }
    },
    changeHandler2 (index) {
      if (this.el2 !== index) {
        this.$refs.swipe2[this.el2].close()
        this.el2 = index
      }
    },
    handletap (message) {
      ui.showToast({ title: message })
    }
  }
}
