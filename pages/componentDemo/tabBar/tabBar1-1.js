// tabBar.js
export default {
  data () {
    return {
      items: [],
      val: 30
    }
  },
  methods: {
    tabresult () {
      ui.navigateTo({
        url: '/pages/componentDemo/tabBar/tabBar3-1'
      })
    },
    navigateBack () {
      ui.navigateBack()
    }
  },
  mounted () {
    for (let i = 1; i <= this.val; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
