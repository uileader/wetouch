export default {
  data () {
    return {
      statusBarHeight: ui.STATUS_BAR_HEIGHT,
      headerHeight: ui.DEFAULT_HEADER_HEIGHT,
      radioCalendar: false,
      radioDate: '',
      radioYear: '',
      radioMonth: '',
      radioDay: '',
      // 时间对象，存储临时变化的时间
      dateobj: {},
      // 时间可选范围
      monthrange: [],
      // 默认选中的时间范围
      defaultMonthrange: [],
      rangeCalendar: false,
      rangeCalendarDefault: false,
      // 时间差
      differ: '',
      differ2: '',
      differShow: false,
      rangeDate: '',
      rangeDate2: '',
      rangestart: '',
      rangeend: '',
      rangestart2: '',
      rangeend2: '',
      height: ui.WIN_HEIGHT
    }
  },
  methods: {
    radioinit (thisdate) {
      this.dateobj.radioDate = thisdate
      this.dateobj.radioDate = thisdate.split('/')
      this.radioDate = this.dateobj.radioDate
      this.radioMonth = this.dateobj.radioDate[1]
      this.radioDay = this.dateobj.radioDate[2]
    },
    // 单选将改变的时间，赋值给时间。
    rangeinit (thisdate) {
      let start, end
      this.dateobj.rangestart = thisdate.rangedate[0]
      this.dateobj.rangeend = thisdate.rangedate[1]
      start = this.dateobj.rangestart.split('/')
      end = this.dateobj.rangeend.split('/')
      this.rangestart = `${start[1]}月${start[2]}日`
      this.rangeend = `${end[1]}月${end[2]}日`
    },
    rangeinit2 (thisdate) {
      let start, end
      this.dateobj.rangestart2 = thisdate.rangedate2[0]
      this.dateobj.rangeend2 = thisdate.rangedate2[1]
      start = this.dateobj.rangestart2.split('/')
      end = this.dateobj.rangeend2.split('/')
      this.rangestart2 = `${start[1]}月${start[2]}日`
      this.rangeend2 = `${end[1]}月${end[2]}日`
    },
    selectedChange (e) {
      this.radioinit(e)
      setTimeout(() => {
        this.radioCalendar = false
      }, 300)
    },
    selectedStartHandler (e) {
      this.rangeDate = e
    },
    selectedEndHandler (e) {
      this.dateobj.rangedate = e
      setTimeout(() => {
        this.rangeCalendar = false
        ui.setStatusBarStyle({style: 'light'})
      }, 500)
      this.calculationDays()
      this.rangeinit(this.dateobj)
    },
    failedHandler (err) {
      if (err === 1) {
        ui.showToast({ title: '您选择的时间超过30天,请重新选择' })
      }
    },
    selectedStartHandler2 (e) {
      this.rangeDate2 = e
    },
    selectedEndHandler2 (e) {
      this.dateobj.rangedate2 = e
      setTimeout(() => {
        this.rangeCalendarDefault = false
        ui.setStatusBarStyle({style: 'light'})
      }, 500)
      this.calculationDays2()
      this.rangeinit2(this.dateobj)
    },
    failedHandler2 (err) {
      if (err === 1) {
        ui.showToast({ title: '您选择的时间超过30天,请重新选择' })
      }
    },
    format (obj) {
      var date = new Date(obj)
      var y = 1900 + date.getYear()
      var m = '0' + (date.getMonth() + 1)
      var d = '0' + date.getDate()
      return y + '/' + m.substring(m.length - 2, m.length) + '/' + d.substring(d.length - 2, d.length)
    },
    radioCalendaropen () {
      this.radioCalendar = true
      // ui.setStatusBarStyle({style: 'light'})
    },
    // 双选打开
    rangeCalendaropen (state) {
      this.rangeCalendar = true
      ui.setStatusBarStyle({ style: 'dark' })
    },
    rangeCalendarDefaultOpen () {
      this.rangeCalendarDefault = true
      ui.setStatusBarStyle({ style: 'dark' })
    },
    handleSelect (key) {
      this[key] = false
      if (key === 'rangeCalendar') {
        ui.setStatusBarStyle({style: 'light'})
      } else if (key === 'rangeCalendarDefault') {
        ui.setStatusBarStyle({style: 'light'})
      }
    },
    radioSave () {
      this.radioDate = Date.parse(new Date(this.radioDate))
    },
    // 范围选择，根据选择日期，计算几晚
    calculationDays () {
      let start, end
      start = Date.parse(this.dateobj.rangedate[0])
      end = Date.parse(this.dateobj.rangedate[1])
      this.differ = Math.floor((end - start) / (24 * 3600 * 1000))
      this.differShow = true
    },
    // 默认选中的。范围选择，根据选择日期，计算几晚
    calculationDays2 () {
      let start, end
      start = Date.parse(this.dateobj.rangedate2[0])
      end = Date.parse(this.dateobj.rangedate2[1])
      this.differ2 = Math.floor((end - start) / (24 * 3600 * 1000))
    }
  },
  created () {
    // 计算时间范围
    let radiodate = new Date()
    let rangedate = new Date()
    let rangedate2 = new Date()
    this.radioDate = this.format(Date.parse(radiodate))
    let start, end, defaultStart, defaultEnd
    start = this.format(rangedate.setMonth(new Date().getMonth()))
    end = this.format(rangedate.setMonth(new Date().getMonth() + 6))
    start = start.substring(0, 7)
    end = end.substring(0, 7)
    this.monthrange.push(start, end)
    defaultStart = this.format(rangedate2.setDate(new Date().getDate()))
    defaultEnd = this.format(rangedate2.setDate(new Date().getDate() + 2))
    this.defaultMonthrange.push(defaultStart, defaultEnd)
  }
}
