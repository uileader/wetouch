// page2.js
export default {
  data () {
    return {
      items: [],
      bottom: 30,
      state: 0,
      proportion: 0,
      pullUp: {
        distance: 50,
        onBegin: this.handleBegin,
        onActive: this.handleActive,
        onAfter: this.handlePullUpAfter
      }
    }
  },
  methods: {
    handleBegin ({ distance, direction }) {
      this.proportion = Math.abs(distance) / 50
      this.state = 1
      if (this.proportion >= 1) {
        this.state = 2
      }
    },
    handleActive () {
      this.state = 3
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
    handlePullUpAfter (flag) {
      if (flag) {
        this.state = 0
        // 模拟数据，这里应该从handleActive 里从接口拿到数据
        for (let i = this.bottom + 1; i <= this.bottom + 10; i++) {
          this.items.push(`列表项目${i}`)
        }
        this.bottom += 10
      } else {
        this.state = 0
      }
    },
    pullup () {
      ui.triggerPagePullUp()
    }
  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
