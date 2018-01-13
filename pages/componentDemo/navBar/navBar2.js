// navBar3.js
export default {
  data () {
    return {
      target: '',
      type: 'link',
      icon: require('#/images/slogo.png'),
      title: 'Touch UI',
      content: 'Touch UI是一款很棒的移动开发框架',
      href: 'http://www.uileader.com/',
      show: true,
      show: false,
      show2: false,
      items: [],
      collect: 'collect1',
      imgSrc: {
        weixin_message: require('#/images/share_weixin_friend.png'),
        weixin_timeline: require('#/images/share_weixin_circle.png'),
        qq: require('#/images/share_qq.png'),
        weibo: require('#/images/share_weibo.png')
      }
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    msgTap () {
      if (this.show2) {
        this.collect = 'collect1'
        this.show2 = false
      } else {
        this.collect = 'collect2'
        this.show2 = true
      }
    },
    share (val) {
      this.target = val
      ui.showToast({ title: val })
      // ui.share({
      //   target: this.target,
      //   type: this.type,
      //   icon: this.icon,
      //   title: this.title,
      //   content: this.content,
      //   href: this.href
      // }, function () {
      //   ui.showToast({ title: '分享成功' })
      // }, function () {
      //   ui.showToast({ title: '分享失败' })
      // })
    },
    popSwitch () {
      this.show = true
    },
    log (str) {
    }
  },
  mounted () {
    for (let i = 1; i <= 30; i++) {
      this.items.push(i + ' - 内容文本')
    }
  }
}
