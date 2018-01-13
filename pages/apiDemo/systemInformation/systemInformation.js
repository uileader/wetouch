// systemInformation.js
export default {
  data () {
    return {
      systemInfo: {}
    }
  },
  methods: {
    getSystemInfo () {
      var that = this
      ui.getSystemInfo({
        success: function (res) {
          that.systemInfo = res
        }
      })
    }
  }
}
