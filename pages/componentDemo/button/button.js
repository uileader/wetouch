export default {
  data () {
    return {
      isLoading: false,
      buttonText: '提交',
      isDisable: false
    }
  },
  mounted () {
  },
  methods: {
    submitHandler () {
      this.isLoading = true
      this.buttonText = '提交中...'
      this.isDisable = true
      var that = this
      setTimeout(function () {
        that.isLoading = false
        that.buttonText = '提交'
        that.isDisable = false
      }, 1000)
    },
    handleViewTap () {
      ui.showToast({
        title: '点击了ui-view'
      })
    },
    handleButtonTap () {
      ui.showToast({
        title: '点击了ui-button'
      })
    }
  }
}
