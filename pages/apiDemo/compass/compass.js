// compass.js
export default {
  data () {
    return {
      direction: 0,
      imgSrc:require('#/images/compass.png')
    }
  },
  mounted () {
    var that = this
    ui.onCompassChange(function (res) {
      that.direction = parseInt(res.direction)
    })
  }
}
