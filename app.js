export default {
  data () {
    return {
      tabIndex: 0,
      drawerVisibility: false,
      showMode: 'push',
      showModeValue: 'push',
      showPlacement: 'left',
      showPlacementValue: 'left',
      tabPaths: [],
      tabBarList: [],
      isApp: ui.IS_APP,
      navStyle: {},
      tabBar: {},
      tabBarHeight: 56,
      toggle: false,
      offsetX: ui.WIN_WIDTH / 2,
      togglestyle: 'default',
      fixedzindex: null,
      tabbaricon: 'none',
      hideOnTap: true,
      tabbarhide: true,
      canClick: true,
      headerHeight: ui.DEFAULT_HEADER_HEIGHT,
      paths: [],
      searchShow: false,
      barHeight: ui.STATUS_BAR_HEIGHT,
      height: ui.DEFAULT_CONTENT_HEIGHT,
      searchValue: '',
      historyContent: [],
      showSlideMenu: false,
      slideMenuControl: false,
      hotList: [
        { text: '收纳', tagClass: 'tag-before' },
        {text: '热卖爆款', tagClass: 'tag-before', hot: 'hot'},
        { text: '卫衣', tagClass: 'tag-before' },
        { text: '手机壳', tagClass: 'tag-before' },
        { text: '电子烟', tagClass: 'tag-before' },
        { text: '手表男', tagClass: 'tag-before' },
        { text: '手机支架', tagClass: 'tag-before' },
        { text: '宿舍', tagClass: 'tag-before' },
        { text: '内裤男', tagClass: 'tag-before' },
        { text: '特产', tagClass: 'tag-before' },
        { text: '护肤套装', tagClass: 'tag-before' },
        { text: '耳机', tagClass: 'tag-before' },
        { text: '火鸡面', tagClass: 'tag-before' }
      ]
    }
  },
  computed: {
     // 控制通用导航栏是否显示
    navigationBarVisible () {
      return this.pageConfig.navigationBarVisible !== false
    },
    // 控制通用导航栏是否显示返回按钮（首页不显示，其他页显示）
    showBack () {
      let homePath = this.paths[0]
      if (this.tabBar && this.tabBar.paths) {
        return this.tabBar.paths.indexOf(homePath) < 0
      } else {
        return homePath !== this.$route.path
      }
    },
    // 通用导航栏应用app.json和page.json的设置
    winConfig () {
      let window = this.$router.options.window
      let config = { ...window, ...this.pageConfig }
      let color
      if (config.navigationBarTextColor === 'black') {
        color = '#666'
      } else if (config.navigationBarTextColor === 'white') {
        color = '#fff'
      } else {
        color = config.navigationBarTextColor
      }

      let scrollType = document.body.getAttribute('scroll-type')

      this.navStyle = {
        backgroundColor: config.navigationBarBackgroundColor,
        color: color,
        borderBottom: `1px solid ${config.navigationBarBorderColor}`,
        backgroundImage: config.navigationBarBackgroundGradient,
        position: scrollType === 'body' ? 'fixed' : 'absolute'
      }

      if (this.navStyle.backgroundColor) {
        this.navStyle.backgroundImage = 'none'
      }

      if (config.navigationBarBorderColor) {
        this.navStyle.borderBottom = `1px solid ${config.navigationBarBorderColor}`
      } else {
        this.navStyle.borderBottom = '0'
      }
      return config
    },
    // 控制底部标签栏是否显示
    isTabBar () {
      return this.tabBarList && this.tabBarList.length > 0
    },
    // 设置底部标签栏样式
    tabBarStyle () {
      let style = {}
      if (this.navigationBarVisible && this.tabBar.position === 'top') {
        style.top = this.headerHeight + 'px'
      }
      let scrollType = document.body.getAttribute('scroll-type')
      style.position = scrollType === 'body' ? 'fixed' : 'absolute'
      return style
    },

    bottom () {
      return this.isTabBar ? `${this.tabBarHeight}px` : 0
    },
    // 底部标签栏应用app.json和page.json的设置
    pageConfig () {
      if (this.isTabBar) {
        return this.tabBarList[this.tabIndex].pageConfig
      } else {
        return this.$route.meta.pageConfig || window.__$uiPageConfig
      }
    }
  },
  watch: {
    '$route.path' (path) {
      this.handleIosGesture()
      this.initTab()
      this.initBodyStyle()
    }
  },
  // 初始化
  created () {
    this.initTab()
    this.initPaths()
    this.initBodyStyle()
    this.$nextTick(() => {
      this.handleIosGesture()
    })
  },
  methods: {
    // 初始化底部标签栏
    initTab () {
      this.tabBar = this.getTabBar()
      this.tabBarList = this.tabBar.list
      if (this.tabBar.paths) {
        this.tabIndex = this.tabBar.paths.indexOf(this.$route.path)
      }
    },
    // 初始化路由
    initPaths () {
      let routes = this.$router.options.routes
      this.paths = routes.map((item) => {
        return item.path
      })
    },
    initBodyStyle () {
      if (this.winConfig && this.winConfig.backgroundColor) {
        document.body.style.backgroundColor = this.winConfig.backgroundColor
      }
    },
    // iOS是否禁用侧滑退出
    handleIosGesture () {
      if (ui.IS_IOS) {
        ui.setPagePopGesture && ui.setPagePopGesture({
          openPagePopGesture: !this.pageConfig.disableIosGesture
        })
      }
    },
    // tabBar示例用到，底部标签栏切换前事件处理
    handleTabBeforeChange ({ id, index, next }) {
      if (id === 'tab-bar-5' && index === 2) { // 弹出popicon图标导航
        if (this.canClick) {
          this.toggle = true
          this.canClick = false
          this.fixedzindex = 'z-index:701'
          this.tabbaricon = 'block'
          this.togglestyle = 'openstyle'
          this.hideOnTap = false
          setTimeout(() => {
            this.canClick = true
            this.hideOnTap = true
          }, 700)
        } else {
          return false
        }
      } else if (id === 'tab-bar-5' && index === 4) { // 弹出登录dialog
        import(`#/pages/dialogs/loginInterface.ui`).then((content) => {
          ui.showDialog({
            content: content,
            statusBarColor: 'dark'
          })
        })
      } else {
        next()
      }
    },
    // tabBar示例用到，底部标签栏切换后事件处理
    handleTabChange ({id, index}) {
      if (id === 'tab-bar-5' && index === 3) {
        ui.showToast({ title: 'TabChange事件，每次切换tab都触发' })
      }
    },
    // 回退处理
    handleBack () {
      ui.navigateBack()
    },
    getTabBar () {
      let tabBars = [this.$router.options.tabBar, ...this.$router.options.pageTabBars]
      for (let i = 0; i < tabBars.length; i++) {
        if (tabBars[i].paths && tabBars[i].paths.indexOf(this.$route.path) > -1) {
          return tabBars[i]
        }
      }
      return {}
    },
    // 关闭popicon图标导航
    hidepopicon (e) {
      if (this.canClick) {
        this.toggle = false
        this.canClick = false
        this.togglestyle = 'closestyle'
      } else {
        return false
      }
    },
    // 关闭popicon遮罩
    popiconMaskhide () {
      this.canClick = true
      this.togglestyle = 'default'
      this.tabbaricon = 'none'
    },

    // 退出搜索
    hideFullScreenSearch () {
      this.searchShow = false
      ui.setStatusBarStyle({ style: 'light' })
    },
    // 清空历史记录
    deleteHistory () {
      this.historyContent = []
    },
    // 搜索退出还原状态栏颜色
    searchHideHandle () {
      ui.setStatusBarStyle({ style: 'light' })
    },
    // 进入搜索设置状态栏颜色为黑色
    searchShowHandle () {
      ui.setStatusBarStyle({ style: 'dark' })
    },
    // 提交搜索
    searchSubmit (e) {
      let value = e.search
      if (value !== '') {
        this.historyContent.unshift(value)
        this.hideFullScreenSearch()
        ui.showToast({ title: value })
      }
      this.searchValue = ''
    },
    // 点击热门搜索
    hotTap (opt) {
      this.hideFullScreenSearch()
      ui.showToast({
        title: this.hotList[opt].text
      })
    },
    // 点击搜索历史
    historyTap (index) {
      this.hideFullScreenSearch()
      ui.showToast({
        title: this.historyContent[index]
      })
    },
    handleNavIconTap () {
      this.showSlideMenu = !this.showSlideMenu
    },

    // 关闭侧滑菜单
    closeMenu (val) {
      this.showSlideMenu = false
      if (val !== 'close') {
        ui.navigateTo({
          url: '/pages/templeteDemo/userCenter/userCenter'
        })
      }
    }
  },
  mounted () {

  }
}
