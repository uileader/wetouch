export default {
  data () {
    return {
      items: [],
      imgHeight: parseInt(ui.WIN_WIDTH / 1125 * 628),
      scrollDirection: null,
      startX: '',
      startY: '',
      scrollTop: null,
      scrollNum: 0,
      scrollNum1: 0,
      scrollPosition: 0,
      scrollstartval: 0,
      scrollendval: 0,
      scrolldistance: 0,
      scrollTemp: null,
      height: ui.DEFAULT_CONTENT_HEIGHT
    }
  },
  methods: {
    handleLoadMore () {
      window.setTimeout(() => {
        for (let i = this.bottom + 1; i <= this.bottom + 10; i++) {
          this.items.push(`列表项目${i}`)
        }
        this.bottom += 10
      }, 1500)
    },

    scroll (y) {
      this.scrolldistance = y - this.scrollstartval
      // this.scrollDirection = y
      // this.scrollTop = y
      // 获取滚动的距离
      // if (this.scrollTop === null) {
      //   this.scrollTop = y
      // }
      if (y > this.scrollTop) {
        this.scrollNum = y
        // 当滚动条滚动的距离<=图片的高度时候
        if (y <= this.imgHeight) {
          // this.scrollNum = this.scrollendval - this.scrollstartval
          this.scrollPosition = this.scrollNum
          // this.scrollNum1 = this.scrollNum - y
          // page滚动的距离，始终等于滚动条滚动的距离。
          this.scrollPosition = y
        } else {
        }
      } else if (y < this.scrollTop) {
        //  滚动距离=图片的高度-（内容向下滚时的滚动高度-当前的滚动高度）
        // this.scrollNum1 = this.imgHeight - (this.scrollNum - y)
        // this.scrollPosition = this.scrollNum1
      }

      this.scrollTop = y
      // this.scrollTemp = this.scrollTemp
    },
    scrollstart (y) {
      this.scrollstartval = y
      // ui.pageScrollTo(this.imgHeight, 200)
    },
    scrollend (y) {

      // this.scrollPosition = y
      // this.scrollendval = y
      // this.scrollTemp = this.scrollPosition
    },
    touchstart (e) {
      this.startX = e.changedTouches[0].clientX
      this.startY = e.changedTouches[0].clientY
    },
    touchmove (e) {
      // if (this.scrollPosition > this.imgHeight) {
      //   this.scrollPosition = this.imgHeight
      //   return false
      // }
      // if (this.scrollPosition < -this.imgHeight) {
      //   this.scrollPosition = -this.imgHeight
      //   return false
      // }
      // this.scrollPosition = this.scrollTemp + this.scrolldistance
      var moveX = e.changedTouches[0].clientX
      var moveY = e.changedTouches[0].clientY
      var disX = moveX - this.startX
      var disY = moveY - this.startY
      // 判断scrollview内容向下滚动
      if (Math.abs(disX) < Math.abs(disY) && disY < 0) {
        this.scrollDirection = '0'
        // 用scrollNum 来保存当前滚动的距离。
        this.scrollNum = this.scrollTop
        if (this.scrollTemp === null) {
          this.scrollTemp = this.scrollTop
        } else {
        }
        if (this.scrollTemp <= this.imgHeight) {
          this.scrollPosition = this.scrollTop
        }
        // 如果滚动的距离,小于等于图片的高度，那么就一值让pageScrollTo跟随滚动的高度走。
      } else if (Math.abs(disX) < Math.abs(disY) && disY > 0) {    // 判断scrollview内容向上滚动
        this.scrollDirection = '1'
         // 滚动距离=图片的高度-（内容向下滚时的滚动高度-当前的滚动高度）
        // this.scrollNum1 = this.imgHeight - (this.scrollNum - this.scrollTop)
        //  // ui.pageScrollTo(this.scrollNum1, 200)
        // this.scrollPosition = this.scrollNum1
      }
    }

    // touchend (e) {
    //   // scrollview内容向下滚动时，把图片隐藏
    //   if (this.scrollDirection === '0') {
    //     ui.pageScrollTo(this.imgHeight, 200)
    //   }
    // }
  },
  mounted () {
    for (let i = 1; i <= 30; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
