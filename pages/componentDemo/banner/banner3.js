// banner3.js
export default {
  data () {
    return {
      items: [],
      bottom: 30,
      alpha: 0,
      className: '',
      swiperHeight: ui.WIN_WIDTH / 750 * 375,
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
  methods: {
    handleScroll (scrollTop) {
      if (scrollTop > 100) {
        this.alpha = 1
      } else {
        var val = scrollTop / 100
        this.alpha = val
      }
      if (scrollTop > 40) {
        this.className = 'nav_color'
        ui.setStatusBarStyle({style: 'dark'})
      } else {
        this.className = ''
        ui.setStatusBarStyle({style: 'light'})
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
  }
}
