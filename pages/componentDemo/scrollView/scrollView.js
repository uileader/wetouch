// scrollView.js
export default {
  data () {
    return {
      toView: 'blue',
      scrollTop: 0
    }
  },
  methods: {
    tap () {
      this.toView = 'yellow'
    },
    tapMove () {
      this.scrollTop = this.scrollTop + 20
    },
    backTop () {
      this.scrollTop = 0
      this.scrollTop = this.scrollTop + 1
    }
  }

}
