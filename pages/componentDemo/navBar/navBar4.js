// navBar9.js
export default {
  data () {
    return {
      show: true,
      items: []
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
    setTap () {
      ui.showToast({
        title: '点击了设置'
      })
    }
  },
  mounted () {
    for (let i = 1; i <= 30; i++) {
      this.items.push(i + ' - 内容文本')
    }
  }
}
