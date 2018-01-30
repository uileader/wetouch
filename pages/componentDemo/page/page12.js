// page8.js
export default {
  data () {
    return {
      items: [],
      bottom: 30,
      pullDown: {
        distance: 400
      }
    }
  },
  methods: {

  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
