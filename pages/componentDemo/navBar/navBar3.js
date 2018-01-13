// navBar3.js
export default {
  data () {
    return {
      show: true,
      items: [],
      show10: false
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    msgTap () {
      this.show = false
      ui.showToast({
        title: '点击了消息'
      })
    },
    moreTap () {
      ui.showToast({
        title: '点击了更多'
      })
    },
    handleShow10 () {
      this.show10 = true
    },
    handleHide (text) {
      this.show10 = false
      ui.showToast({
        title: text
      })
    }
  },
  mounted () {
    for (let i = 1; i <= 30; i++) {
      this.items.push(i + ' - 内容文本')
    }
  }
}
