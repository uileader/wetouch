// statusBar.js
export default {
  data () {
    return {
      style: '未获取'
    }
  },
  methods: {
    get () {
      ui.getStatusBarStyle({
        success: ({ style }) => {
          this.style = style === 'dark' ? '黑色' : '白色'
        }
      })
    },
    set (style) {
      this.style = '未获取'
      ui.setStatusBarStyle({
        style
      })
    }
  }
}
