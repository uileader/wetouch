// navBar2.js
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    handleNavRight () {
      ui.showActionSheet({
        itemList: [
          '转账记录',
          '使用帮助',
          '延时转账服务'
        ],
        success: (index) => {
          ui.showToast({
            title: `index: ${index}`
          })
        }
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
