
export default {
  data () {
    return {
      openType: true
    }
  },
  methods: {
    open () {
      ui.setPagePopGesture({
        openPagePopGesture: true,
        success: () => {
          this.openType = true
        }
      })
    },
    close () {
      ui.setPagePopGesture({
        openPagePopGesture: false,
        success: () => {
          this.openType = false
        }
      })
    }
  }
}
