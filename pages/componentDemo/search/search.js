// search2.js
// search.js
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    showFullScreenSearch () {
      ui.app.searchShow = true
      ui.setStatusBarStyle({ style: 'dark' })
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
