export default {
  data () {
    return {
      items: [],
      bottom: 30,
      toggle: false,
      height: ui.DEFAULT_CONTENT_HEIGHT + 'px',
      canClick: true,
      hideOnTap: true,
      offsetX: ui.WIN_WIDTH
    }
  },
  methods: {
    // 点击开始／关闭按钮
    togglepopicon () {
      if (this.toggle) {
        if (this.canClick) {
          this.canClick = false
          this.toggle = false
        }
      } else {
        if (this.canClick) {
          this.canClick = false
          this.toggle = true
          this.hideOnTap = false
          setTimeout(() => {
            this.canClick = true
            this.hideOnTap = true
          }, 700)
        }
      }
    },
    // 点击遮罩触发，安卓回退时触发
    dismiss () {
      if (this.canClick) {
        this.canClick = false
        this.toggle = false
      }
    },
    // 设置mask延时的情况下，mask关闭时触发，安卓回退时触发
    maskhide () {
      this.canClick = true
    }
  },
  mounted () {
    this.togglestyle = 'popdefault2'
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}

