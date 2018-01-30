export default {
  data () {
    return {
      items: [],
      bottom: 30,
      height: ui.DEFAULT_CONTENT_HEIGHT,
      imgHeight: parseInt(ui.WIN_WIDTH / 1125 * 628),
      pullDown: {
        distance: 50,
        onBegin: () => {},
        onActive: this.handleActive,
        onAfter: this.handlePullDownAfter
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
    handleActive () {
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
     // 下拉结束后，执行的函数。因为只要下拉即时没有到达刷新的高度也会触发这个方法
     // flag 为1表示执行了handleActive。为undefined代表handleActive没有执行。
    handlePullDownAfter (flag) {
      if (flag) {
        ui.showToast({
          title: '处理下拉刷新'
        })
      }
    }
  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
