// shearPlate.js
export default {
  data () {
    return {
      exampleText: 'TOUCH UI 是一套非常好用的框架☺',
      clipboardText: ''
    }
  },
  methods: {
    handleInputChange (val) {
      this.exampleText = val
    },
    get () {
      var self = this
      ui.getClipboardData({
        success: function (res) {
          self.clipboardText = res.data
        }
      })
    },
    set () {
      ui.setClipboardData({
        data: this.exampleText
      })
    }
  }
}
