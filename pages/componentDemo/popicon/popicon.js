// popicon.js
export default {
  data () {
    return {
      items: [],
      bottom: 30,
      toggle: false,
      offsetX: ui.WIN_WIDTH / 2,
      canClick: true,
      hideOnTap: true,
      togglestyle: 'togglebtn'
    }
  },
  methods: {
    // 点击遮罩触发，安卓回退时触发
    dismiss () {
      if (this.canClick) {
        this.canClick = false
        this.togglestyle = 'closestyle'
        this.toggle = false
      }
    },
    // 设置mask延时的情况下，mask关闭时触发，安卓回退时触发
    maskhide () {
      this.canClick = true
    },
    // 点击关闭按钮
    togglepopicon () {
      if (this.toggle) {
        if (this.canClick) {
          this.canClick = false
          this.togglestyle = 'closestyle'
          this.toggle = false
        }
      } else {
        if (this.canClick) {
          this.canClick = false
          this.togglestyle = 'openstyle'
          this.toggle = true
          this.hideOnTap = false
          setTimeout(() => {
            this.canClick = true
            this.hideOnTap = true
          }, 700)
        }
      }
    }
  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
