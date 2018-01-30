export default {
  data () {
    return {
      items: [],
      show10: false,
      maskStyle: { backgroundColor: 'transparent' }
    }
  },
  methods: {
    handleShow10 () {
      this.show10 = true
    },
    handleHide (text) {
      this.show10 = false
      ui.showToast({
        title: text
      })
    },
    navigateBack () {
      ui.navigateBack()
    }
  },
  mounted () {
    for (let i = 1; i <= 30; i++) {
      this.items.push(i + ' - 内容文本')
    }
  }
}
