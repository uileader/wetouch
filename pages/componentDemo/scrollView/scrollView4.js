// scrollView4.js
export default {
  data () {
    return {
      toView: 'a4',
      scrollLeft: 100
    }
  },
  methods: {
    tap () {
      this.toView = 'a6'
    },
    tapMove () {
      this.scrollLeft = this.scrollLeft + 20
    },
    backTop () {
      this.scrollLeft = 0
    }

  },
  mounted () {
  }
}
