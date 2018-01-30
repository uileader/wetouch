// maskTip.js
export default {
  data () {
    return {
      showMask1: false,
      showMask2: false,
      showMask3: false,
      imgSrc1:require('#/images/pop-img01.png'),
      imgSrc2:require('#/images/pop-img02.png'),
      imgSrc3:require('#/images/pop-img03.png')
    }
  },
  methods: {
    handleShowMask1 (show) {
      this.showMask1 = show
    },
    handleShowMask2 (show) {
      this.showMask2 = show
    },
    handleShowMask3 (show) {
      this.showMask3 = show
    }
  }
}
