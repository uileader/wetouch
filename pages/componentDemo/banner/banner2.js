// navBar4.js
export default {
  data () {
    return {
      items: [],
      bottom: 30,
      alpha: 0,
      className: '',
      imgHeight: parseInt(ui.WIN_WIDTH / 1125 * 628),
      pullDown: {
        distance: 60,
        onBegin: this.handleBegin,
        onActive: this.handlePullRefresh,
        onAfter: this.handleAfter
      }
    }
  },
  methods: {
    handleScroll (scrollTop) {
      if (scrollTop > 100) {
        this.alpha = 1
      } else {
        var val = scrollTop / 100
        this.alpha = val
      }
    },
    handlePullRefresh () {
      // 将返回的请求接管，实现让请求结果来控制下拉刷新的状态
      return ui.request({
        // promise设置为true，让请求返回promise，这样就可以接管请求
        // 请求结束后页面自动回弹
        promise: true,
        url: '/touchui-backstage/listInfo.do?state=1',
        success: (response) => {
        },
        fail: (err) => {
        }
      })
    },
    handleBegin ({ distance, direction }) {
      if (distance > 10) {
        this.className = 'opacity'
      }
    },
    handleAfter (flag) {
      this.className = 'opacity opacity1'
      if (flag) {
        ui.showToast({
          title: '处理下拉刷新'
        })
      }
    },
    navigateBack () {
      ui.navigateBack()
    }
  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
