export default {
  data () {
    return {
      items: [],
      range: 0,
      imgHeight: 135,
      height: ui.WIN_HEIGHT,
      rangetext1: 0,
      rangetext2: 0,
      toView: '',
      opacity: 1,
      opacityText: 0,
      current: 0,
      scaleval: 'scale(1)',
      imgwidth: '90',
      stopscroll: 'stopscroll',
      statusHeight: ui.STATUS_BAR_HEIGHT,
      // 数据
      datalist: [],
      // 数据为空
      empty: false,
      // networkview组件的request属性的默认值
      requestval: null,
      // 默认请求地址
      requesturl: '/touchui-backstage//listMenu.do?state=',
      // 请求状态参数
      state: '',
      // 需要登录
      needLogin: false,
      tabItems: [
        { name: '热销榜' },
        { name: '主食' },
        { name: '超值套餐' },
        { name: '小食' },
        { name: '饮品' },
        { name: '甜品' },
        { name: '促销产品和热卖产品' },
        { name: '开心乐园餐' }
      ]
    }
  },
  methods: {
    // 请求处理函数
    getPostList () {
      this.init()
      return ui.request({
        // promise设置为true，让请求返回promise，这样就可以接管请求
        promise: true,
        url: this.requesturl + this.state,
        success: (response) => {
          if (response.data === '') {   // 返回数据为空
            this.empty = true
          } else {     // 返回数据不为空
            this.datalist = response.data
            this.computeInit()
          }
        },
        error: (response) => {
        }
      })
    },
    // 初始时，重置所有状态变量
    init () {
      this.empty = false
      this.needLogin = false
      this.datalist = []
      if (this.state === '5') { // 设定一个请求失败地址（这里用来设置请求失败的效果，实际使用时一般用不到）
        this.requesturl = '/touchui-backstage/listMenu2.do'
      } else {
        this.requesturl = '/touchui-backstage/listMenu.do?state='
      }
    },
    loginfn () {
      ui.showToast({ title: '登录登录~~' })
    },
    computeInit () {
      let arr = []
      let sum = 0
      let length = this.datalist.length
      for (var i = 0; i < length; i++) {
        arr.push(this.datalist[i].items.length)
        if (i === 0) {
          this.datalist[i].top = 0
        } else {
          sum += arr[i - 1]
          this.datalist[i].top = 84 * sum + 32 * i
        }
      }
    },
    handleScroll (scrollTop) {
      if (scrollTop === 110) {
        this.stopscroll = ''
        this.range = scrollTop / 2 + 10 + 'px'
      } else if (scrollTop === 0) {
        this.stopscroll = 'stopscroll'
      }

      if (scrollTop > 50) {
        this.opacityText = 1
        this.opacity = 1 - this.opacityText
      } else {
        var val = scrollTop / 50
        this.opacityText = val
        this.opacity = 1 - this.opacityText
      }
      this.rangetext1 = -scrollTop / 4 + 2.5 + 'px'
      if (this.rangetext1 < -25) {
        this.rangetext1 = -25
      }

      this.scaleval = `scale(${this.scaleval - 0.1})`
      if (this.scaleval <= 0.7) {
        this.scaleval = `scale(0.7)`
      }
      this.rangetext2 = scrollTop / 9 + 'px'
      if (this.rangetext2 > 12) {
        this.rangetext2 = 12
      }

      this.opacityText = 1 - this.opacity
    },
    scroll (y, key) {
      if (y > 0) {
        // //滚动容器没有滚动到最上方
        this.scrollTop = '1'
      } else {
        // 滚动容器滚动到最上方
        this.scrollTop = '0'
      }
      let top = Math.abs(y)
      var length = this.datalist.length
      for (var i = 0; i <= length - 1; i++) {
        if (top >= this.datalist[i].top - 10) {
          this.current = i
        }
      }
    },
    handleChange (index, key) {
      this.toView = 'id' + index
      this[key] = index
    },
    touchstart (e) {
      // e.preventDefault()
      // e.stopPropagation()
    },
    navigateBack () {
      ui.navigateBack()
    }
  },
  mounted () {
    // 每次进入页面时都会执行数据请求，并重置所有变量状态
    // 获取参数
    let getData = ui.getQuery()
    this.state = getData.state
    // 初始化，重置所有状态变量
    this.init()
    // 请求失败
    if (this.state === '7') {   // 已知结果为空，不发请求
      this.empty = true
    } else if (this.state === '6') {    // 需要登录，不发请求
      this.needLogin = true
    } else if (this.state === '5') {
      // 将请求处理函数赋给requestval变量（networkview组件的request属性绑定了该变量），重新发起请求
      // 这里用来设置请求失败的效果，实际使用时一般用不到
      this.requestval = this.getPostList()
    } else {    // 正常发起请求
      // 将请求处理函数赋给requestval变量（networkview组件的request属性绑定了该变量），发起请求
      this.requestval = this.getPostList()
    }
  }
}
