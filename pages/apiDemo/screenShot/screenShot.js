// screenShot.js
export default {
  data () {
    return {}
  },
  methods: {
    listen () {
      ui.onUserCaptureScreen(function (res) {
        // ui.vibrateLong()
        ui.showToast({
          title: '已成功截屏'
        })
      })
    }
  },
  mounted () {
    this.listen()
  }
}
