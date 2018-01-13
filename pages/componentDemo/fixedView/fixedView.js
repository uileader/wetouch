// fixedView.js
export default {
  data () {
    return {
      items: [],
      bottom: 30,
      fixedTop: ui.DEFAULT_HEADER_HEIGHT
    }
  },
  methods: {},
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
