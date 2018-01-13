// getSetting2.js
export default {
  data () {
    return {
      showMask: false,
    }
  },
  methods: {
    handleShowMask (show) {
      this.showMask = show
    },
    setting(){
      ui.openSetting({
        success: () => {
          ui.showToast({ title: '调取成功' })
        }
      })
    }
  }
}
