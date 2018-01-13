// navBar4.js
import Bigger from '#/static/utils/bigger.js'// 仅仅需要将bigger.js引入即可
export default {
  data () {
    return {
      ...Bigger.data, // Bigger所需data
      items: [],
      bottom: 30,
      swiperHeight: ui.WIN_WIDTH / 750 * 375,
      alpha: 0,
      items1: [{
        src: 'http://images.uileader.com/20171103/5906a28c-0f12-4b71-8df2-98791d8716f6.jpg',
        title: '放肆玩乐，轻巧办公'
      },
      {
        src: 'http://images.uileader.com/20171103/34795a1c-1365-4256-b9c1-6fb4af1de3da.jpg',
        title: '高温保护，一路驰骋'
      },
      {
        src: 'http://images.uileader.com/20171103/926a6fdc-80f6-4244-8354-860627c88115.jpg',
        title: '七夕好货，独家礼赠'
      }]
    }
  },
  computed: {
    imgObj () {
      return Bigger.imgObj(this)
    },
    underObj () {
      return Bigger.underObj(this)
    },
    placeObj () {
      return Bigger.placeObj(this)
    }
  },
  methods: {
    handleScroll (scrollTop) {
      if (scrollTop === 0) {
        Bigger.setPrevent(true)
      } else {
        Bigger.setPrevent(false)
      }
      if (scrollTop > 100) {
        this.alpha = 1
      } else {
        var val = scrollTop / 100
        this.alpha = val
      }
    },
    navigateBack () {
      ui.navigateBack()
    }
  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
    Bigger.init('#Bigger', this, this.swiperHeight)// 传入三个参数,id,this,图片高度
  }
}
