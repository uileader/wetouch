// accelerometer.js
export default {
  data () {
    return {
      x: 0,
      y: 0,
      z: 0
    }
  },
  methods: {
    onReady: function () {
      var that = this
      ui.onAccelerometerChange(function (res) {
        that.setData({
          x: res.x.toFixed(2),
          y: res.y.toFixed(2),
          z: res.z.toFixed(2)
        })
      })
    },
    start () {
      ui.startAccelerometer()
    },
    stop () {
      ui.stopAccelerometer()
    }
  },
  mounted () {
    this.onReady()
  }
}
