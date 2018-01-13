// search.js
export default {
  data () {
    return {
      headerTop: ui.DEFAULT_HEADER_HEIGHT + 'px',
      items: [],
      show: false,
      transitionName: 'search-pop-in'
    }
  },
  methods: {
    showFullScreenSearch () {
      this.show = true
      this.transitionName = 'search-pop-in'
    },
    hideFullScreenSearch () {
      this.show = false
      this.transitionName = 'search-pop-out'
    },
    handleTap () {
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
