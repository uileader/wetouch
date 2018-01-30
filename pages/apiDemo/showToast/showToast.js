// userFeedback.js
export default {
  data () {
    return {}
  },
  methods: {
    showToast1 () {
      ui.showToast({ title: '默认Toast' })
    },
    showToast2 () {
      ui.showToast({ title: '默认Toast，但是文字很长、很长、很长' })
    },
    showToast3 () {
      ui.showToast({ title: '成功Toast', icon: 'success' })
    },
    showToast4 () {
      ui.showToast({ title: '成功Toast显示为3秒', icon: 'success', duration: 3000 })
    },
    showToast5 () {
      ui.showToast({ title: '加载中', icon: 'loading' })
    },
    hideToast () {
      ui.hideToast()
    }
  }
}
