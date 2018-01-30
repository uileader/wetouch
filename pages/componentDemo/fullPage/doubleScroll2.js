export default {
  data () {
    return {
      items: [],
      imgHeight: parseInt(ui.WIN_WIDTH / 1125 * 628),
      scrollDirection: null,
      startX: '',
      startY: '',
      scrollTop: null,
      height: ui.WIN_HEIGHT,
      STATUS_BAR_HEIGHT: ui.STATUS_BAR_HEIGHT
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    touchstart (e) {
      this.startX = e.changedTouches[0].clientX
      this.startY = e.changedTouches[0].clientY
    },
    touchmove (e) {
      var moveX = e.changedTouches[0].clientX
      var moveY = e.changedTouches[0].clientY
      var disX = moveX - this.startX
      var disY = moveY - this.startY
      // 判断scrollview内容向下滚动
      if (Math.abs(disX) < Math.abs(disY) && disY < 0) {
        this.scrollDirection = '0'
      } else if (Math.abs(disX) < Math.abs(disY) && disY > 0) {    // 判断scrollview内容向上滚动
        this.scrollDirection = '1'
      }
    },

    touchend (e) {
      // scrollview内容向下滚动时，把图片隐藏
      if (this.scrollDirection === '0') {
        ui.pageScrollTo(46, 200)
      } else if (this.scrollDirection === '1') {
        ui.pageScrollTo(0, 200)
      }
    }
  },
  mounted () {
    for (let i = 1; i <= 30; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
