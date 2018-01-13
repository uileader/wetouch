// scanCode.js
export default {
  data () {
    return {
      result: ''
    }
  },
  methods: {
    scanCode: function () {
      var that = this
      ui.scanCode({
        success: function (res) {
          that.setData({
            result: res.result
          })
        },
        fail: function (res) {
        }
      })
    }
  }
}
