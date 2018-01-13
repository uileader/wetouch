// page3.js
export default {
  data () {
    return {
      items: [],
      className: '',
      scrollChange: 0
    }
  },
  mounted () {
    for (let i = 1; i <= 50; i++) {
      this.items.push(`列表项目${i}`)
    }
  },
  methods: {
    handleScrollStart (scrollTop) {
      this.scrollChange = scrollTop
    },
    handleScroll (scrollTop) {
      if (Math.abs(scrollTop - this.scrollChange) > 100) {
        this.className = 'active'
      }
    },
    handleScrollEnd (scrollTop) {
      this.className = ''
    }
  }
}
