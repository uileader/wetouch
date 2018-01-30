// canvas.js
import '#/static/utils/tween'
import '#/static/utils/canvas'

export default {
  data () {
    return {
      value: 80,
      centerLeft: 270,
      centerTop: 270,
      ctx: null,
      radius: 270,
      lineWidth: 30,
      i: 0,
      textShow: false
    }
  },
  mounted () {
    // document.body.addEventListener('load', () => {

    // })

    setTimeout(() => {
      this.ctx = document.getElementById('myCanvas').getContext('2d')
      this.drawAnimationBackground()
      this.textShow = true
    }, 1000)
  },
  methods: {
    drawAnimationBackground () {
      let i = 1
      let j = 1
      let t = 1
      // let animatedFlag = false
      this.circularAni = setInterval(() => {
        var a = Math.tween.Elastic.easeOut(t, 0, this.radius, 93)
        this.ctx.clearRect(0, 0, this.centerLeft * 4, this.centerTop * 4)
        this.drawACircular(2, '', 'rgba(255, 255, 255, 0.2)', 100, t * 1.5 * this.radius / 60)
        this.drawACircular(4, '', 'rgba(255, 255, 255, 0.5)', 100, t * 1.5 * this.radius * 0.9 / 60)
        this.drawACircle('rgba(255, 255, 255, 0.1)', 100, a * 0.7)
        this.drawACircle('rgba(255, 255, 255, 0.1)', 100, a * 0.5)
        t++
        if (t * 1.5 * this.radius / 60 >= this.radius) {
          clearInterval(this.circularAni)
          this.setBounceCircularValue(this.value)
        }
      }, 1000 / 60)
    },
    drawBounceBackground () {
      this.drawACircular(1, '', 'rgba(255, 255, 255, 0.2)', 100, this.radius)
      this.drawACircular(2, '', 'rgba(255, 255, 255, 0.5)', 100, this.radius * 0.9)
      this.drawACircle('rgba(255, 255, 255, 0.1)', 100, this.radius * 0.5)
      this.drawACircle('rgba(255, 255, 255, 0.1)', 100, this.radius * 0.7)
    },
    drawACircular (lineWidth, lineCap, color, percent, radius) {
      this.ctx.setLineWidth(lineWidth)
      this.ctx.setStrokeStyle(color)
      this.ctx.setLineCap(lineCap)
      this.ctx.beginPath()
      this.ctx.arc(this.centerLeft, this.centerTop, radius, -Math.PI * 2 / 4, Math.PI * 2 * percent / 100 - Math.PI * 2 / 4, false)
      this.ctx.stroke()
    },
    drawACircle (color, percent, radius) {
      this.ctx.setLineWidth(1)
      this.ctx.setFillStyle(color)
      this.ctx.beginPath()
      this.ctx.arc(this.centerLeft, this.centerTop, radius, -Math.PI * 2 / 4, Math.PI * 2 * percent / 100 - Math.PI * 2 / 4, false)
      this.ctx.fill()
    },
    setBounceCircularValue (value) {
      if (value > 100) {
        value = 100
        this.i = 100
      }
      if (value < 0) {
        value = 0
        this.i = 0
      }
      this.value = value
      if (this.circularAni) {
        clearInterval(this.circularAni)
      }
      var isNegative = (this.value - this.i) < 0
      this.circularAni = setInterval(() => {
        this.ctx.clearRect(0, 0, this.centerLeft * 4, this.centerTop * 4)
        this.drawBounceBackground()

        this.drawACircular(this.lineWidth, '', 'rgba(255, 255, 255, 0.6)', this.i, this.radius * 0.9 - this.lineWidth / 2)
        if (this.i === this.value) {
          clearInterval(this.circularAni)
          return
        } else {
          this.i = isNegative ? this.i - 1 : this.i + 1
        }
      }, 1000 / 60)
    }
  }
}
