export default {
  data () {
    return {
      isLike: false,
      icon_bg: 'praiseago',
      animateClass: '',
      animateele: false,
      alpha: 0,
      items: [],
      bottom: 30,
      className: '',
      statusHeight: ui.STATUS_BAR_HEIGHT,
      isSplashSwiper: false,
      duration: 500,
      interval: 1000,
      pullDown: {
        distance: 400,
        onBegin: this.handleBegin,
        onActive: this.handlePullRefresh,
        onAfter: this.handleAfter
      }
    }
  },
  methods: {
    like () {
      if (this.isLike) {
        this.icon_bg = 'praiseago'
        this.isLike = false
        this.animateele = false
        this.animateClass = ''
      } else {
        this.icon_bg = 'praiseafter'
        this.isLike = true
        this.animateClass = 'fadeOutUp'
        this.animateele = true
      }
    },
    handleScroll (scrollTop) {
      if (scrollTop > 50) {
        // var val=(scrollTop-50)/100
        // if(val<0.3){
        //   this.alpha = val
        // }
        this.alpha = 0.3
      } else {
        this.alpha = 0
      }
    },
    handlePullRefresh () {
      ui.showToast({
        title: '处理下拉刷新'
      })
    },
    handleBegin ({ distance, direction }) {
      if (distance > 10) {
        this.className = 'opacity'
      }
    },
    handleAfter () {
      this.className = 'opacity opacity1'
    },
    splashInto () {
      this.isSplashSwiper = false
      ui.setStorageSync('splash', 'show')
    },
    changeSwiper (e) {
    },
    swiperInit () {
    }
  },
  mounted () {

    let environment = ui.IS_APP
    if (environment) {
      //首屏引导页
      var splashShow = ui.getStorageSync('splash')
      if (splashShow === 'show') {
        this.isSplashSwiper = false
      } else {
        this.isSplashSwiper = true
      }

      
    let closeTime = ui.IS_IOS ? 2000 : 500
    // 初始化完成后，关闭启动页面
    window.setTimeout(() => {
      ui.closeSplashscreen()
    }, closeTime)

    window.setTimeout(() => {
      ui.setStatusBarStyle({
        style: 'light'
      })
    }, 3000)

    } else {
      this.isSplashSwiper = false
    }
    
  }
}
