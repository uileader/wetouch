export default {
  data () {
    return {
      target: 'qq',
      type: 'link',
      icon: require('#/images/slogo.png'),
      title: 'Touch UI',
      content: 'Touch UI是一款很棒的移动开发框架',
      href: 'http://www.uileader.com/',
      show: false,
      imgSrc: {
        weixin_message: require('#/images/share_weixin_friend.png'),
        weixin_timeline: require('#/images/share_weixin_circle.png'),
        qq: require('#/images/share_qq.png'),
        weibo: require('#/images/share_weibo.png')
      }
    }
  },
  methods: {
    share (val) {
      this.target = val
      ui.share({
        target: this.target,
        type: this.type,
        icon: this.icon,
        title: this.title,
        content: this.content,
        href: this.href
      }, function () {
      }, function () {
      })
    },
    popSwitch () {
      if (this.show) {
        this.show = false
      } else {
        this.show = true
      }
    },
    log (str) {
    },
    handleShow (key) {
      this[key] = false
    }
  }
}
