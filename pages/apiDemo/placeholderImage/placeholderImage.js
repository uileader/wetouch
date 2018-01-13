// backgroundImage.js
export default {
  data () {
    return {
      tipShow: false,
      height: ui.DEFAULT_CONTENT_HEIGHT
    }
  },
  methods: {
    handleSwitchChange (e) {
      if (e) {
        this.tipShow = true
      } else {
        this.tipShow = false
      }
    }
  }
}
