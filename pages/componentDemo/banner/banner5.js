let videoContext
export default {
  data () {
    return {
      videoSrc: 'http://images.uileader.com/20171024/392f790e-4c5b-4909-83dd-d13e94bcd64f.mp4',
      items: [],
      collect: 'collect1',
      collectActive: false,
      show: false,
      isShow: true,
      navState: true,
      imgSrc: {
        weixin_message: require('#/images/share_weixin_friend.png'),
        weixin_timeline: require('#/images/share_weixin_circle.png'),
        qq: require('#/images/share_qq.png'),
        weibo: require('#/images/share_weibo.png')
      }
    }
  },
  methods: {
    onReady: function (res) {
      videoContext = ui.createVideoContext('myVideo')
    },
    bindplay (e) {
      if (e.detail.show === undefined) {
        this.isShow = true
      }
    },
    bindcontrolschange (e) {
      if (this.navState) {
        this.navState = false
      } else {
        this.isShow = e.detail.show
      }
    },
    msgTap () {
      if (this.collectActive) {
        this.collect = 'collect1'
        this.collectActive = false
      } else {
        this.collect = 'collect2'
        this.collectActive = true
      }
    },
    popSwitch () {
      this.show = true
    },
    share (val) {
      this.target = val
      ui.showToast({ title: val })
    },
    navigateBack () {
      ui.navigateBack()
    }
  },
  mounted () {
    this.onReady()
    for (let i = 1; i <= 40; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
