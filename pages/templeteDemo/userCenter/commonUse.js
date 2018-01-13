// commonUse.js
export default {
  data () {
    return {
      imageQuality: '普通'
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    clearCache () {
      ui.showToast({ title: '缓存清除', icon: 'success' })
    },
    imgQuality () {
      let itemList = [
        '普通',
        '高清'
      ]
      ui.showActionSheet({
        itemList: itemList,
        success: (index) => {
          // ui.showToast({
          //   title: `index: ${index}`
          // })
          this.imageQuality = itemList[index]
        }
      })
    }
  }
}
