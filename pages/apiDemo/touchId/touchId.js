// touchId.js
export default {
  data () {
    return {
      loading: false,
      type: '',
      typeText: '未验证',
      disable: true
    }
  },
  methods: {
    use () {
      var self = this
      self.loading = true
      self.type = ''
      self.typeText = '等待验证'
      ui.useTouchID({
        success: function (result) {
          ui.showToast({
            title: result
          })
          self.type = 'success'
          self.typeText = '验证成功'
        },
        fail: function (result) {
          ui.showToast({
            title: result
          })
          self.type = 'fail'
          self.typeText = '验证失败'
        },
        complete: function () {
          self.loading = false
        }

      })
    },
    canUse () {
      var self = this
      ui.canUseTouchID({
        success: function (result) {
          self.disable = false
        },
        fail: function (result) {
          self.disable = true
          self.type = 'fail'
          self.typeText = '设备不支持'
        }
      })
    }
  },
  mounted () {
    var self = this
    setTimeout(function () {
      self.canUse()
    }, 2000)
  }
}
