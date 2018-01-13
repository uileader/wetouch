// page4.js
export default {
  data () {
    return {
      items: [],
      items2: [],
      bottom: 30,
      show1: true,
      show2: false
    }
  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
    for (let i = this.bottom + 1; i <= 60; i++) {
      this.items2.push(`列表项目${i}`)
    }
  },
  methods: {
    gotoSuggestions (scrollTop) {
      ui.pageScrollTo('#suggestion-title')
    },
    gotoTop () {
      ui.pageScrollTo(0)
    },
    handleScroll (scrollTop) {
      if (scrollTop > 1600) {
        this.show2 = true
        this.show1 = false
      } else {
        this.show2 = false
        this.show1 = true
      }
    }
  }
}
