// popicon.js
export default {
  data () {
    return {
      items: [],
      bottom: 30,
      toggle: false,
      offsetX: ui.WIN_WIDTH / 2 - 24,
      thisTop: window.innerHeight,
      canClick: true,
      toggleicon: 'togglebtn'
    }
  },
  methods: {
    // 点击遮罩触发，安卓回退时触发
    dismiss () {
      if (this.canClick) {
        this.canClick = false
        this.toggleicon = 'closestyle'
        this.toggle = false
      }
    },
    // 点击开始／关闭按钮
    togglepopicon () {
      if (this.toggle) {
        if (this.canClick) {
          this.canClick = false
          this.toggleicon = 'closestyle'
          this.toggle = false
        }
      } else {
        if (this.canClick) {
          this.canClick = false
          this.toggleicon = 'openstyle'
          this.toggle = true
          setTimeout(() => {
            this.canClick = true
          }, 700)
        }
      }
    },
    // 设置mask延时的情况下，mask关闭时触发，安卓回退时触发
    maskhide () {
      this.canClick = true
    }
  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
