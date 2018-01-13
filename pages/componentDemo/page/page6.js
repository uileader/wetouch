export default {
  data () {
    return {
      items: [],
      bottom: 30,
      scrollPosition: 0,
      key: 'scrollEnd'
    }
  },
  mounted () {
    var value = ui.getStorageSync(this.key)
    this.scrollPosition = value || 0

    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
  },
  methods: {
    handleScrollEnd (scrollTop) {
      ui.setStorageSync(this.key, scrollTop)
    }
  }
}
