// getSetting.js
export default {
  data () {
    return {}
  },
  methods: {
    showConfirm (scope) {
      ui.getSetting({
        success: (res) => {
          if (res[scope]) {
            ui.showToast({ title: '已授权', icon: 'success' })
          } else {
            ui.showConfirm({
              content: '您未授权，是否前往授权',
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              success (result) {
                if (result.confirm) {
                  ui.openSetting()
                }
              }
            })
          }
        }
      })
    }
  }
}
