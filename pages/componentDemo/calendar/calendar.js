// horizontal-calendar.js
export default {
  data () {
    return {
      date: '',
      dateobj: {},
      dateyear: null,
      ma: ['201611', '201810'],
      datemonth: null,
      dateday: null,
      monthrange: [],
      contentHeight: ui.DEFAULT_CONTENT_HEIGHT
    }
  },
  methods: {
    // 选择日期
    selectedHandler (e) {
      this.init(e)
    },
    // 滑动时变化
    monthChangeHandler (e) {
      this.init(e)
    },
    nextchange () {
      // 结束时间范围的时间戳
      let endrange = Date.parse(new Date(this.monthrange[1]))
      let date = new Date(this.dateobj.date)
      date.setMonth(date.getMonth() + 1)
      // 改变后的日期时间戳
      date = Date.parse(date)
      if (date > endrange) {
        return false
      } else {
        this.dateobj.date = this.format(date)
        this.init(this.dateobj.date)
      }
    },
    prevchange () {
      let date = new Date(this.dateobj.date)
      // 开始时间范围的时间戳
      let startrange = Date.parse(new Date(this.monthrange[0]))
      date.setMonth(date.getMonth() - 1)
      // 改变后的日期时间戳
      date = Date.parse(date)
      if (date < startrange) {
        return false
      } else {
        this.dateobj.date = this.format(date)
        this.init(this.dateobj.date)
      }
    },
    qiandao () {
      ui.showToast({ title: `签到：${this.dateyear} 年 ${this.datemonth} 月 ${this.dateday} 日` })
    },
    format (obj) {
      var date = new Date(obj)
      var y = 1900 + date.getYear()
      var m = '0' + (date.getMonth() + 1)
      var d = '0' + date.getDate()
      return y + '/' + m.substring(m.length - 2, m.length) + '/' + d.substring(d.length - 2, d.length)
    },
    // 根据参数，改变dateobj。dateobj用来临时存储改变的时间。并且生成数组。
    init (thisdate) {
      this.dateobj.date = thisdate
      this.dateobj.arr = thisdate.split('/')
      this.date = this.dateobj.date
      this.dateyear = this.dateobj.arr[0]
      this.datemonth = this.dateobj.arr[1]
      this.dateday = this.dateobj.arr[2]
    }

  },
  created () {
    let date = new Date()
    let start, end
    start = this.format(date.setMonth(new Date().getMonth() - 6))
    end = this.format(date.setMonth(new Date().getMonth() + 6))
    start = start.substring(0, 7)
    end = end.substring(0, 7)
    this.monthrange.push(start, end)
  }
}
