export default {
  data () {
    return {
      items: [],
      imgHeight: parseInt(ui.WIN_WIDTH / 1125 * 628),
      scrollDirection: null,
      startX: '',
      startY: '',
      scrollTop: null,
      height: ui.DEFAULT_CONTENT_HEIGHT,
      alpha: 0,
      className: ''
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    handleScroll (scrollTop) {
      if (scrollTop > 100) {
        this.alpha = 1
        this.className = 'active'
      } else {
        var val = scrollTop / 100
        this.alpha = val
        this.className = ''
      }
    },
    scroll (y) {
      if (y > 0) {
        // //滚动容器没有滚动到最上方
        this.scrollTop = '1'
      } else {
        // 滚动容器滚动到最上方
        this.scrollTop = '0'
      }
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
        if (this.scrollTop === '0') {  // 当scrollview内容向上滚动到最上方时，把图片显示出来
          ui.pageScrollTo(0, 200)
        }
      }
    },

    touchend (e) {
      // scrollview内容向下滚动时，把图片隐藏
      if (this.scrollDirection === '0') {
        ui.pageScrollTo(this.imgHeight, 200)
      }
    }
  },
  mounted () {
    for (let i = 1; i <= 30; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
