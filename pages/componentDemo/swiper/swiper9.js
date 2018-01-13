// swiper9.js
export default {
  data () {
    return {
      index: 3,
      items: [1, 2, 3, 4, 5, 6, 7],
      current: 4
    }
  },
  methods: {
    getRandomColor () {
      return '#' + (~~(Math.random() * (0xffffff))).toString(16)
    },
    handleChangeEnd (newIndex) {

      if (newIndex !== this.index) {
        if (newIndex > this.index) {
          this.items.push(this.current + 4)
          this.items.shift()

          this.current = this.current + 1
        } else {
          this.items.unshift(this.current - 4)
          this.items.pop()

          this.current = this.current - 1
        }

        this.$refs.swiper.slideTo(3, 0)
      }
    }
  }
}
