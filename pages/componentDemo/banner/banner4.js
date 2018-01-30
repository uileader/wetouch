export default {
  data () {
    return {
      items: [],
      range: 0,
      imgHeight: parseInt(ui.WIN_WIDTH / 800 * 800)
    }
  },
  methods: {
    handleScroll (scrollTop) {
      if (scrollTop < 380) {
        this.range = -scrollTop / 2 + 'px'
      }
    }
  },
  mounted () {
    for (let i = 1; i <= 40; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
