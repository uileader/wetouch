// back.js
export default {
  data () {
    return {
      type: '未拦截'
    }
  },
  methods: {
    back () {
      ui.vibrateLong()
    },
    onBackButtonClick () {
      if (this.type === '未拦截') {
        ui.onBackButtonClick(this.back)
        this.type = '已拦截'
      }
    },
    offBackButtonClick () {
      var self = this
      ui.offBackButtonClick({
        listener: this.back,
        success () {
          self.type = '未拦截'
        }
      })
    }
  }
}
