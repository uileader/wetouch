// segment2.js
export default {
  data () {
    return {
      contentshow: 0,
      items0: [],
      items1: [],
      setShow: false
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
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
    changTab (index) {
      this.contentshow = index
      if (index === 0) {
        this.setShow = false
      } else {
        this.setShow = true
      }
    }
  },
  mounted () {
    for (let i = 1; i <= 100; i++) {
      this.items0.push(i + ' - 推荐项目列表')
      this.items1.push(i + ' - 热点项目列表')
    }
  }
}
