// tabBar2.js
export default {
  data () {
    return {
      items: [],
      val: 1
    }
  },
  methods: {
    tabresult () {
      ui.switchTab({
        url: '/pages/componentDemo/tabBar/tabBar1-1'
      })
    }
  },
  mounted () {
    for (let i = 30; i >= this.val; i--) {
      this.items.push(`列表项目${i}`)
    }
  }
}
