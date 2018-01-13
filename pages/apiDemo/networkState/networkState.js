// networkState.js
export default {
  data () {
    return {
      hasNetworkType: false,
      networkType: ''
    }
  },
  methods: {
    getNetworkType () {
      var that = this
      ui.getNetworkType({
        success: function (res) {
          that.hasNetworkType = true
          that.networkType = res.subtype || res.networkType
        }
      })
    },
    clear () {
      this.hasNetworkType = false
      this.networkType = ''
    }
  }
}
