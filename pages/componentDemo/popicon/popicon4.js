// popicon4.js
export default {
  data () {
    return {
      items: [],
      bottom: 30,
      toggle: false,
      thisLeft: window.innerWidth,
      thisTop: window.innerHeight,
      offsetX: -70,
      offsetY: -110,
      display: 'none',
      canClick: true,
      toggleicon: 'togglebtn'
    }
  },
  methods: {
    // 点击开始／关闭按钮
    togglepopicon () {
      if (this.toggle) {
        if (this.canClick) {
          this.toggleicon = 'closestyle'
          this.display = 'none'
          this.toggle = false
          this.canClick = false
        }
      } else {
        if (this.canClick) {
          this.toggleicon = 'openstyle'
          this.display = 'block'
          this.toggle = true
          setTimeout(() => {
            this.canClick = true
          }, 700)
        }
      }
    },
    // 点击每一项时
    closepopicon (val) {
      ui.showToast({ title: val })
      this.display = 'none'
      this.toggleicon = 'closestyle'
      this.toggle = false
    },
    // 点击遮罩触发，安卓回退时触发
    dismiss () {
      if (this.canClick) {
        this.canClick = false
        this.toggleicon = 'closestyle'
        this.display = 'none'
        this.toggle = false
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
