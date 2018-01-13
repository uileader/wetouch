// mask.js
export default {
  data () {
    return {
      top2: ui.DEFAULT_HEADER_HEIGHT,
      showMask1: false,
      showMask2: false,
      showMask3: false,
      showMask4: false,
      showMask5: false,
      showMask6: false,
      showMask7: false,
      showMask8: false,
      showMask9: false,
      showMask10: false,
      imgSrc1: require('#/images/pop-img01.png')
    }
  },
  methods: {
    handleTap () {
      ui.showToast({
        title: 'tap...'
      })
    },
    handleShowMask1 (show) {
      this.showMask1 = show
    },
    handleShowMask2 (show) {
      this.showMask2 = show
    },
    handleShowMask3 (show) {
      this.showMask3 = show
    },
    handleShowMask4 (show) {
      this.showMask4 = show
    },
    handleShowMask5 (show) {
      this.showMask5 = show
    },
    handleShowMask6 (show) {
      this.showMask6 = show
    },
    handleShowMask7 (show) {
      this.showMask7 = show
    },
    handleShowMask8 (show) {
      this.showMask8 = show
    },
    handleShowMask9 (show) {
      this.showMask9 = show
    },
    handleShowMask10 (show) {
      this.showMask10 = show
    }
  }
}
