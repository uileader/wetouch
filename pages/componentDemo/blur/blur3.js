export default {
  data () {
    return {
      url: require('#/images/indexList/t4.png'),
      items: [],
      alpha: 0,
      className: ''
    }
  },
  methods: {
    handleScroll (scrollTop) {
      if (scrollTop > 70) {
        this.className = 'active'
      } else {
        this.className = ''
      }
      if (scrollTop > 100) {
        this.alpha = 1
      } else {
        var val = scrollTop / 100
        this.alpha = val
      }
    },
    navigateBack () {
      ui.navigateBack()
    }
  },
  mounted () {
    for (let i = 1; i <= 30; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
