// userCenter.js

export default {
  data () {
    return {
      portraitUrl: require('#/images/portrait_bg.png'),
      showMask: false,
      pullDown: {
        distance: 200,
        onBegin: () => { },
        onActive: () => { },
        onAfter: () => { }
      },
      winWidth: ui.WIN_WIDTH,
      winHeight: ui.WIN_HEIGHT,
      statusHeight:ui.STATUS_BAR_HEIGHT
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    handleShowMask () {
      this.showMask = false
    }
  },
  mounted () {
    this.showMask = true
    setTimeout(() => {
    this.ctx = document.getElementById('myCanvas').getContext('2d')
    this.ctx.fillStyle="rgba(0,0,0,0.7)"
    this.ctx.fillRect(0,0,ui.WIN_WIDTH * 2, ui.WIN_HEIGHT * 2)  
    this.ctx.arc(313 * 2  / 375 * this.winWidth, 184 * 2+this.statusHeight*2, 40 * 2, 0 ,2 * Math.PI)
    this.ctx.stroke()
    this.ctx.save()
    this.ctx.clip()
    this.ctx.clearRect(0,0,ui.WIN_WIDTH * 2, ui.WIN_HEIGHT * 2)
    this.ctx.restore()
    this.ctx.rect(7 * 2 / 375 * this.winWidth, 285 * 2+this.statusHeight*2, 361 * 2 / 375 * this.winWidth, 50 * 2);
    this.ctx.stroke()
    this.ctx.clip()
    this.ctx.clearRect(0,0,ui.WIN_WIDTH * 2, ui.WIN_HEIGHT * 2)
    }, 1000)
  }
}
