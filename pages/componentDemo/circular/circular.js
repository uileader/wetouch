export default {
  data () {
    return {
      value1: 40,
      value2: 40,
      j: 60,
      count: 0,
      animate: 'Quad'
    }
  },

  methods: {
    minus () {
      if (this.value1 <= 0) {
        this.value1 = 0
      } else {
        this.value1 -= 10
      }
    },
    add () {
      if (this.value1 >= 100) {
        this.value1 = 100
      } else {
        this.value1 += 10
      }
    },
    beginAnimationEnd () {
      this.animate = 'none'
    }
  },
  mounted () {
    setInterval(() => {
      this.value2 = this.j / 0.6
      if (this.j <= 9) {
        if (this.j <= 0) {
          this.j = 0
        } else {
          this.j--
        }
      } else {
        this.j--
      }
      this.count = this.j
    }, 1000)
  }
}
