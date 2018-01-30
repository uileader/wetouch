export default {
  data () {
    return {
      key: '',
      text: '',
      gettext: '',
      list: ['请选择'],
      val: 0
    }
  },
  methods: {
    handleChange (val) {
      this.val = val
    },
    storage () {
      ui.setStorageSync(this.key, this.text)
      if (!this.contains(this.list, this.key)) {
        this.list.push(this.key)
      }
      ui.showToast({
        title: '已缓存'
      })
    },
    contains (arr, obj) {
      var i = arr.length
      while (i--) {
        if (arr[i] === obj) {
          return true
        }
      }
      return false
    },
    getStorage () {
      var value = ui.getStorageSync(this.list[this.val])
      this.gettext = value
    },
    removeStorage () {
      this.removePicker(this.list[this.val])
      ui.removeStorageSync(this.list[this.val])
      ui.showToast({
        title: '已移除'
      })
    },
    removePicker (val) {
      var index = this.val
      if (index > -1) { this.list.splice(index, 1) }
    },
    clearStorage () {
      ui.clearStorageSync()
      this.list = ['请选择']
      ui.showToast({
        title: '已清理'
      })
    }
  }
}
