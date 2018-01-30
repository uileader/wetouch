
// navBar.js
export default {
  data () {
    return {
      items: [],
      bottom: 30,
      className: '',
      searchWidth: '',
      headerHeight: ui.DEFAULT_HEADER_HEIGHT - 20,
      maskStyle: { backgroundColor: 'transparent' },
      show10: false,
      className2: ''
    }
  },
  methods: {
    handleNavLeft () {
      ui.showToast({
        title: 'NavBar左侧点击事件'
      })
    },
    handleNavRight () {
      ui.showToast({
        title: 'NavBar右侧点击事件'
      })
    },
    handleNavCenter () {
      ui.showToast({
        title: 'NavBar搜索点击事件'
      })
    },
    handleScroll (scrollTop) {
      if (scrollTop > 120) {
        this.className = 'nav_center'
      } else {
        this.className = ''
      }
    },
    handleShow10 () {
      this.show10 = true
      this.className2 = 'active'
    },
    handleHide (text) {
      this.show10 = false
      ui.showToast({
        title: text
      })
      this.className2 = ''
    },
    popoverHide () {
      this.className2 = ''
    },
    navigateBack () {
      ui.navigateBack()
    }
  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
    this.searchWidth = window.innerWidth - 110
  }
}