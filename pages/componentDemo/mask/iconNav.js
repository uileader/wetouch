// circleMenu4.js
export default {
  data () {
    return {
      showMask: false,
      rotate1: '',
      rotate2: '',
      rotate3: '',
      switch: false,
      height: ui.DEFAULT_CONTENT_HEIGHT + 'px'
    }
  },
  methods: {
    handleShowMask () {
      if (this.switch) {
        this.showMask = false
        this.rotate1 = ''
        this.rotate2 = ''
        this.rotate3 = ''
        this.switch = false
      } else {
        this.showMask = true
        this.rotate1 = 'rotate1'
        this.rotate2 = 'rotate2'
        this.rotate3 = 'rotate3'
        this.switch = true
      }
    },
    maskHide () {
      this.showMask = false
      this.rotate1 = ''
      this.rotate2 = ''
      this.rotate3 = ''
      this.switch = false
    },
    navigateBack () {
      ui.navigateBack()
    }
  }
}
