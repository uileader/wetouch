import util from '#/static/utils/util'
var formatLocation = util.formatLocation
export default {
  data () {
    return {
      hasLocation: false,
      location: '',
      locationAddress: ''
    }
  },
  methods: {
    chooseLocation: function () {
      var that = this
      ui.chooseLocation({
        backgroundColor: '#3399ff',
        success: function (res) {
          that.setData({
            hasLocation: true,
            location: formatLocation(res.longitude, res.latitude),
            locationAddress: res.address
          })
        },
        fail: function (res) {
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
