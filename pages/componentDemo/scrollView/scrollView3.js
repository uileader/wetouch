export default {
  data () {
    return {
      items: [],
      bottom: 30,
      top: 0,
      proportion: 0,
      // 下拉刷新（初始状态）
      state: 1,
      showLoading: false,
      imgSrc: require('#/images/mt_01.png'),
      height: ui.DEFAULT_CONTENT_HEIGHT,
      imgHeight: parseInt(ui.WIN_WIDTH / 1125 * 628),
      pullDown: {
        distance: 60,
        onBegin: this.handleBegin,
        onActive: this.handleActive,
        onAfter: this.handleAfter
      },
      pullUp: {
        distance: 50,
        onBegin: () => {},
        onActive: this.handleActive,
        onAfter: this.handlePullUpAfter
      }
    }
  },
  methods: {
    handleLoadMore () {
      window.setTimeout(() => {
        for (let i = this.bottom + 1; i <= this.bottom + 10; i++) {
          this.items.push(`列表项目${i}`)
        }
        this.bottom += 10
      }, 1500)
    },
    handleBegin ({ distance, direction }) {
      this.proportion = distance / 60
      // 拉满60px
      if (this.proportion >= 1) {
        if (this.state === 1 && direction === 'down') {
          // 释放刷新
          this.state = 2

          // 300ms吉祥物翻转时间
          window.setTimeout(() => {
            // 刷新中...
            this.state = 3
          }, 300)
        }
      } else {
        this.state = 1
      }
    },
    handleActive () {
      return ui.request({
        // promise设置为true，让请求返回promise，这样就可以接管请求
        // 请求结束后页面自动回弹
        promise: true,
        url: '/touchui-backstage/listInfo.do?state=1',
        success: (response) => {
          // 刷新成功...
          this.state = 4
        },
        fail: (err) => {
        }
      })
    },
    handleAfter (flag) {
      this.proportion = 0
      this.state = 1
      if (flag) {
        for (let i = this.top - 1; i >= this.top - 10; i--) {
          this.items.unshift(`列表项目${i}`)
        }
        this.top -= 10
      }
    },
    handlePullUpAfter (flag) {
      if (flag) {
        // 模拟数据，这里应该从handleActive 里从接口拿到数据
        for (let i = this.bottom + 1; i <= this.bottom + 10; i++) {
          this.items.push(`列表项目${i}`)
        }
        this.bottom += 10
      }
    }
  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
