export default {
  data () {
    return {
      height: ui.DEFAULT_CONTENT_HEIGHT,
      // 数据
      datalist: [],
      // 下拉时临时存储数据
      pulldownlist: [],
      // 有3个值，默认notnull：不为空。nullval：返回值为空。error：错误
      pulldownlistflag: 'notnull',
      // 下拉刷新时返回的具体错误提示。
      requesterror: '',
      // 正常显示
      isnormal: false,
      // loading
      isloading: true,
      // 为空
      isnull: false,
      // 超时
      overtime: false,
      // 断网
      isconnect: false,
      // 请求失败
      isfail: false,
      // 是否登录
      islogin: false,
      // 下拉刷新时用来演示每次添加新的条目所使用的页码，实际开发中不需要
      afterPageNo: 2,
      // 请求参数
      state: '',
      pullDown: {
        distance: 60,
        onBegin: () => {},
        onActive: this.handleActive,
        onAfter: this.handleAfter
      }
    }
  },
  methods: {
    // 请求函数
    InitiatingRequest () {
      // 每次请求前，把所有状态初始化
      this.initialize()
      var self = this
      // 每次发送请求时，显示loading效果
      self.isloading = true
      // 为了演示loading效果，加了1秒的延时，正常不需要settimeout
      setTimeout(() => {
        ui.request({
          url: '/touchui-backstage/listInfo.do?state=' + this.state,
          data: {pageSize: 1, pageNo: 1},
          success: function (data) {
            // 成功后，关闭loading效果
            self.isloading = false
            // 判断数据为空
            if (data.data === '' || data.data === 'undefined') {
              // 将为空提示的容器显示出来
              self.isnull = true
            } else {
              // 将内容所在的容器显示出来
              self.isnormal = true
              // 将返回数据赋值给组件
              self.datalist = data.data.datalist
            }
          },
          fail: function (error) {
            self.isloading = false
            // 网络异常
            if (error.errMsg === 'offline') {
              self.isconnect = true
            } else if (error.errMsg === 'timeout') {  // 超时
              self.overtime = true
            } else {   // 失败
              self.isfail = true
            }
          }
        })
      }, 1000)
    },
    // 演示的请求失败函数
    failedRequest () {
      this.initialize()
      var self = this
      self.isloading = true
      ui.request({
        url: 'http://192.168.1.160:3000/posts2',
        success: function (data) {
          self.isloading = false
        },
        fail: function (data) {
          self.isloading = false
          self.isfail = true
        }
      })
    },
    // 初始时，重置所有状态变量
    initialize () {
      this.isnormal = false
      this.datalist = []
      this.isloading = false
      this.isnull = false
      this.overtime = false
      this.isconnect = false
      this.isfail = false
      this.islogin = false
    },
    loginfn () {
      ui.showToast({ title: '登录登录~~' })
    },
    // 下拉时，进行的操作。
    handleActive () {
      let that = this
      // 将返回的请求接管，实现让请求结果来控制下拉刷新的状态
      return ui.request({
        url: '/touchui-backstage/listInfo.do?state=' + that.state,
        // promise设置为true，让请求返回promise，这样就可以接管请求
        // 请求结束后页面自动回弹
        promise: true,
        // 请求的参数
        data: {pageSize: 1, pageNo: that.afterPageNo},
        success: function (data) {
          // 返回数据为空
          if (data.data === '' || data.data === 'undefined') {
            that.pulldownlistflag = 'nullval'
          } else {  // 返回数据不为空
            that.pulldownlistflag = 'notnull'
            that.pulldownlist = data.data.datalist
            that.afterPageNo++
          }
        },
        fail: function (error) {
          if (error.offline) {
            that.pulldownlistflag = 'error'
            that.requesterror = '网络异常'
          } else if (error.timeout) {
            that.pulldownlistflag = 'error'
            that.requesterror = '请求超时'
          } else {
            that.pulldownlistflag = 'error'
            that.requesterror = '请求失败'
          }
        }
      })
    },
    // 下拉结束后，执行的函数。因为只要下拉即时没有到达刷新的高度也会触发这个方法
     // flag 为1表示执行了handleActive。为undefined代表handleActive没有执行。
    handleAfter (flag) {
      if (flag) {
        // 返回数据不为空，增加一条数据
        if (this.pulldownlistflag === 'notnull') {
          for (let i = 0; i < this.pulldownlist.length; i++) {
            this.datalist.unshift(this.pulldownlist[i])
          }
        } else if (this.pulldownlistflag === 'nullval') {  // 返回数据为空，不操作
          return false
        } else if (this.pulldownlistflag === 'error') {    // 返回错误，弹出错误提示
          ui.showToast({
            title: this.requesterror
          })
        }
      }
    }
  },

  mounted () {
    // 获取url参数
    let getData = ui.getQuery()
    this.state = getData.state
    // 初始化
    this.initialize()
    // 请求结果失败
    if (this.state === '5') {
      this.failedRequest()
    } else if (this.state === '6') {   // 需要登录，不发请求
      this.islogin = true
      this.isloading = false
    } else if (this.state === '7') {  // 已知结果为空，不发请求
      this.isnull = true
      this.isloading = false
    } else {    // 正常发起请求
      this.InitiatingRequest()
    }
  }
}
