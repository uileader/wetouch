import util from '#/static/utils/util'
var formatLocation = util.formatLocation
export default {
  data () {
    return {
      hasLocation: false,
      location: ''
    }
  },
  methods: {
    getLocation: function () {
      var that = this
      ui.getLocation({
        success: function (res) {
          that.setData({
            hasLocation: true,
            location: formatLocation(res.longitude, res.latitude)
          })
        }
      })
    },
    clear: function () {
      this.setData({
        hasLocation: false
      })
    }
  }
}
