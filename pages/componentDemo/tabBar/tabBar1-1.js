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
      ui.switchTab({
        url: '/pages/componentDemo/tabBar/tabBar1-2'
      })
    }
  },
  mounted () {
    for (let i = 1; i <= this.val; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
